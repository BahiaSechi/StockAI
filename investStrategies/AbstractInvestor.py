from abc import ABC, abstractmethod
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

    def start_investing(self):
        res_file = open("../export/res.txt", "w")
        with open("../export/stats.json", "w") as file:
            thread = threading.Thread(target=export.export.main, args=())
            thread.daemon = True
            thread.start()

            file.write("[\n")
            file.flush()

            while self.money > 0:
                price = self.next_action()

                data = {
                    'money': self.money,
                    'placed_order': self.placed_order,
                    'preferred_ticker': self.preferred_ticker,
                    'stock_value': self.placed_order * price
                }

                json.dump(data, file)
                file.write(",\n")
                file.flush()

                res_file.seek(0)
                res_file.truncate()
                res_file.write(f"{self.money} {self.placed_order} {self.preferred_ticker} {self.placed_order * price}")
                res_file.flush()

                sleep(1)

        res_file.close()

        file.write("\n]")
        file.flush()

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
