import talib

from gateway.PriceType import PriceType
from gateway.gatewayInflux import get_data
from investStrategies.AbstractInvestor import AbstractInvestor


class Investor(AbstractInvestor):
    def next_action(self) -> bool:
        # close = get close prices
        close = get_data(self.preferred_ticker, 50, PriceType.CLOSE).values.flatten('F')
        rsi = talib.RSI(close, timeperiod=30)
        rsi = [x for x in rsi if str(x) != 'nan']

        if max(rsi) > 70:
            self.place_sell_order(close)
        elif min(rsi) < 30:
            self.place_buy_order(close)

    def place_buy_order(self, cost) -> bool:
        self.money -= cost
        self.placed_order += 1

    def place_sell_order(self, cost) -> bool:
        self.money += cost
        self.placed_order -= 1


    def sell_all(self, cost) -> bool:
        self.money += self.placed_order * cost
        self.placed_order = 0
