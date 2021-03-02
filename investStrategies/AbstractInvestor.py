from abc import ABC, abstractmethod
from time import sleep
import json


class AbstractInvestor(ABC):
    money = 10000
    placed_order = 0
    preferred_ticker = ''
    preferred_cost = 0

    @abstractmethod
    def next_action(self) -> bool:
        ...

    @abstractmethod
    def place_buy_order(self, cost) -> bool:
        ...

    @abstractmethod
    def place_sell_order(self, cost) -> bool:
        ...

    def start_investing(self):
        with open("stats.txt", "w") as file:
            while self.money > 0:
                price = self.next_action()

                data = {'money': self.money, 'placed_order': self.placed_order,
                        'preferred_ticker': self.preferred_ticker, 'stock_value': self.placed_order * price}

                print(data)
                file.writelines(
                    [str(self.money) + ",", str(self.placed_order) + ",", str(self.preferred_ticker) + ",",
                     str(self.placed_order * price) + "\n"]
                )
                file.flush()
                sleep(1)

    def list_convergence(self, list):
        result = 0
        oldX = 0

        for x in list:
            if x > oldX:
                result += 1
            elif x < oldX:
                result -= 1

        return result

    def __init__(self, _starting_money, order, ticker, cost) -> None:
        super().__init__()
        self.money = _starting_money
        self.placed_order = order
        self.preferred_ticker = ticker
        self.preferred_cost = cost
