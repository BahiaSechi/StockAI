import talib

from gateway.PriceType import PriceType
from gateway.gatewayInflux import get_data
from investStrategies.AbstractInvestor import AbstractInvestor


class Investor(AbstractInvestor):
    def next_action(self) -> bool:
        # close = get close prices
        close = get_data(self.preferred_ticker, 50, PriceType.CLOSE).values.flatten('F')
        rsi = talib.RSI(close, timeperiod=14)
        sma, smasig, smahist = talib.MACD(close, 12, 26, 9)
        rsi = [x for x in rsi if str(x) != 'nan']
        sma = [x for x in sma if str(x) != 'nan']
        smaconv = self.list_convergence(sma)
        print(max(rsi), sma, "\n")

        buy_signal = 0.0
        sell_signal = 0.0
        if max(rsi) > 85:
            sell_signal += 2.0
        elif min(rsi) < 15:
            buy_signal += 2.0
        elif max(rsi) > 70:
            sell_signal += 1.0
        elif min(rsi) < 30:
            buy_signal += 1.0

        if sma[-1] > 0 and smaconv > 0 == 2:
            sell_signal += 2.0
        elif sma[-1] < 0 and smaconv < 0 == -2:
            buy_signal -= 2.0
        elif sma[-1] > 0 and smaconv < 0 == 1:
            sell_signal -= 1.0
        else:
            buy_signal += 1.0

        if buy_signal > sell_signal and buy_signal >= 3.0 and self.money > close[-1] * 2:
            self.place_buy_order(close[-1])
            self.place_buy_order(close[-1])
        elif sell_signal > buy_signal and sell_signal >= 3.0 and self.placed_order > 1:
            self.place_sell_order(close[-1])
            self.place_sell_order(close[-1])
        elif buy_signal > sell_signal and buy_signal >= 2.0 and self.money > close[-1]:
            self.place_buy_order(close[-1])
        elif sell_signal > buy_signal and sell_signal >= 2.0 and self.placed_order > 0:
            self.place_sell_order(close[-1])

        return close[-1]

    def place_buy_order(self, cost) -> bool:
        self.money -= cost
        self.placed_order += 1

    def place_sell_order(self, cost) -> bool:
        self.money += cost
        self.placed_order -= 1
