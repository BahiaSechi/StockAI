from abc import ABC, abstractmethod
from datetime import datetime
from time import sleep
import json
import threading

import export.export


class AbstractInvestor(ABC):
    money = 10000
    placed_order = 0
    preferred_ticker = ''
    preferred_cost = 0
    defined_goal = 18000

    @abstractmethod
    def next_action(self) -> bool:
        ...

    @abstractmethod
    def place_buy_order(self, cost) -> bool:
        ...

    @abstractmethod
    def place_sell_order(self, cost) -> bool:
        ...

    @abstractmethod
    def sell_all(self, cost) -> bool:
        ...

    def start_investing(self):
        res_file = open("export/res.txt", "w")
        with open("export/stats.txt", "w") as file:
            thread = threading.Thread(target=export.export.main, args=())
            thread.daemon = True
            thread.start()

            while self.money > 0:
                price = self.next_action()

                # if money + the values of the stock >= goal
                print(self.defined_goal)
                print(self.money)
                print(self.placed_order * price)
                print(self.defined_goal)
                if self.defined_goal != -1 and self.money + (self.placed_order * price) >= self.defined_goal:
                    # sell all stocks
                    self.sell_all(price[-1])
                    print(f"Goal of {self.goal} has been achieved.\n Money : {self.money} ")
                    break

                data = {
                    'money': self.money,
                    'placed_order': self.placed_order,
                    'preferred_ticker': self.preferred_ticker,
                    'stock_value': self.placed_order * price,
                    'goal': self.defined_goal
                }

                file.write(
                    f"{datetime.now()} {self.money} {self.placed_order} {self.preferred_ticker} {self.placed_order * price};")
                file.flush()

                res_file.seek(0)
                res_file.truncate()
                res_file.write(f"{self.money} {self.placed_order} {self.preferred_ticker} {self.placed_order * price}")
                res_file.flush()

                # if money + the values of the stock >= goal
                if (self.money + (self.placed_order * price) >= self.defined_goal):
                    # sell all stocks
                    self.sell_all(price[-1])
                    print(f"Goal of {self.goal} has been achieved.\n Money : {self.money} ")
                    break

                sleep(1)

        res_file.close()

    def list_convergence(self, liste):
        result = 0
        oldX = 0

        for x in liste:
            if x > oldX:
                result += 1
            elif x < oldX:
                result -= 1

        return result

    def __init__(self, _starting_money, order, ticker, cost, *goal) -> None:
        super().__init__()
        self.money = _starting_money
        self.placed_order = order
        self.preferred_ticker = ticker
        self.preferred_cost = cost
        self.defined_goal = goal
