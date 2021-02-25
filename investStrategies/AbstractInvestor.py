from abc import ABC, abstractmethod


class AbstractInvestor(ABC):
    money = 10000
    placed_order = 0
    preferred_ticker = ''

    @abstractmethod
    def next_action(self) -> bool:
        ...

    @abstractmethod
    def place_buy_order(self, cost) -> bool:
        ...

    @abstractmethod
    def place_sell_order(self, cost) -> bool:
        ...

    def __init__(self, _starting_money, order, ticker) -> None:
        super().__init__()
        self.money = _starting_money
        self.placed_order = order
        self.preferred_ticker = ticker
