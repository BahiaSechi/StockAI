from ..AbstractInvestor import AbstractInvestor
import talib


class Investor(AbstractInvestor):
    def next_action(self) -> bool:
        # close = get close prices
        close = [0, 0, 0, 0, 0, 0]
        rsi = talib.RSI(close, timeperiod=14)

        if rsi > 70:
            self.place_buy_order(close)
        else:
            self.place_sell_order(close)

    def place_buy_order(self, cost) -> bool:
        self.money -= cost
        self.placed_order += 1

    def place_sell_order(self, cost) -> bool:
        self.money += cost
        self.placed_order -= 1
