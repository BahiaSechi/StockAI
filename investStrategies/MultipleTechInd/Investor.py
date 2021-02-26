import talib

from gateway.PriceType import PriceType
from gateway.gatewayInflux import get_data
from ..AbstractInvestor import AbstractInvestor


class Investor(AbstractInvestor):
    def next_action(self) -> bool:
        # close = get close prices
        close = get_data(self.preferred_ticker, 14, PriceType.CLOSE).values.flatten('F')
        rsi = talib.RSI(close, timeperiod=14)
        sma = talib.MACD(close, 12, 26, 9)

        buy_signal = 0.0
        sell_signal = 0.0
        if rsi > 70:
            sell_signal += 1.0
        elif rsi < 30:
            buy_signal += 1.0

        if self.check_direction(sma, 12) == 2:
            sell_signal += 2.0
        elif self.check_direction(sma, 12) == 1:
            sell_signal += 2.0
        elif self.check_direction(sma, 12) == -2:
            buy_signal -= 2.0
        else:
            buy_signal -= 1.0

        if buy_signal > sell_signal:
            self.place_buy_order(self.preferred_cost)
        elif sell_signal > buy_signal:
            self.place_sell_order(self.preferred_cost)

    def place_buy_order(self, cost) -> bool:
        self.money -= cost
        self.placed_order += 1

    def place_sell_order(self, cost) -> bool:
        self.money += cost
        self.placed_order -= 1
