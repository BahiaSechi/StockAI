import sys
import os

sys.path.append(os.getcwd())

from MultipleTechInd.Investor import Investor as RSISMAInvestor
from RSIOnly.Investor import Investor as RSIInvestor

# env variables definition
environ_var = {
    "default_path": os.getcwd(),
    "default_hostname": 'localhost',
    "default_port": 8081,
    "default_strategy": 'RSISMA',
    "default_ticker": 'AAPL',
    "default_funds": 5000,
    "default_goal": -1
}

# project path
try:
    STOCKAI_PATH = os.environ['STOCKAI_PATH']
except KeyError:
    STOCKAI_PATH = environ_var["default_path"]
# hostname
try:
    STOCKAI_HOSTNAME = os.environ['STOCKAI_HOST']
except KeyError:
    STOCKAI_HOSTNAME = environ_var["default_hostname"]
# port
try:
    STOCKAI_PORT = os.environ['STOCKAI_PORT']
except KeyError:
    STOCKAI_PORT = environ_var["default_port"]
# strategy
try:
    STOCKAI_STRATEGY = os.environ['STOCKAI_STRATEGY']
except KeyError:
    STOCKAI_STRATEGY = environ_var["default_strategy"]
# ticker
try:
    STOCKAI_TICKER = os.environ['STOCKAI_TICKER']
except KeyError:
    STOCKAI_TICKER = environ_var["default_ticker"]
# funds
try:
    STOCKAI_FUNDS = os.environ['STOCKAI_FUNDS']
except KeyError:
    STOCKAI_FUNDS = environ_var["default_funds"]
# goal
try:
    STOCKAI_GOAL = os.environ['STOCKAI_GOAL']
except KeyError:
    STOCKAI_GOAL = environ_var["default_goal"]

# starting investor
investor = None
if STOCKAI_STRATEGY == "RSI":
    investor = RSIInvestor(1000, 40, 'AAPL', 20)
elif STOCKAI_STRATEGY == "RSISMA":
    investor = RSISMAInvestor(1000, 40, 'AAPL', 20)

investor.start_investing()
