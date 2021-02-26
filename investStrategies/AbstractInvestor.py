from abc import ABC, abstractmethod


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
        while self.money > 0:
            self.next_action()

    # Function to check the type of the array
    def check_direction(arr, n):

        # If the first two and the last two elements
        # of the array are in increasing order
        if (arr[0] <= arr[1] and
                arr[n - 2] <= arr[n - 1]):
            return 2

            # If the first two and the last two elements
        # of the array are in decreasing order
        elif (arr[0] >= arr[1] and
              arr[n - 2] >= arr[n - 1]):
            return -2

            # If the first two elements of the array are in
        # increasing order and the last two elements
        # of the array are in decreasing order
        elif (arr[0] <= arr[1] and
              arr[n - 2] >= arr[n - 1]):
            return -1

            # If the first two elements of the array are in
        # decreasing order and the last two elements
        # of the array are in increasing order
        else:
            return 1

    def __init__(self, _starting_money, order, ticker, cost) -> None:
        super().__init__()
        self.money = _starting_money
        self.placed_order = order
        self.preferred_ticker = ticker
        self.preferred_cost = cost
