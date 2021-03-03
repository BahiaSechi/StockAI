import sys

sys.path.append("/home/debian/work/server/stockai/")

from investStrategies.MultipleTechInd.Investor import Investor
import os

#env variables definition
STOCKAI_PATH = os.environ['STOCKAI_PATH']
STOCKAI_HOSTNAME = os.environ['STOCKAI_HOST']
STOCKAI_PORT = os.environ['STOCKAI_PORT']
STOCKAI_STRATEGY = os.environ['STOCKAI_STRATEGY']

#env variables verification
environ_list = ['STOCKAI_PATH', 'STOCKAI_HOSTNAME', 'STOCKAI_PORT', 'STOCKAI_STRATEGY']
for var in environ_list:
    if var in os.environ:
        print(f'{var} value is {os.environ[var]}')
    else:
        print(f'{var} does not exist')

#starting investor
investor = Investor(1000, 40, 'AAPL', 20)
investor.start_investing()
