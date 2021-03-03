import sys

sys.path.append("/home/debian/work/server/stockai/")

from MultipleTechInd.Investor import Investor

investor = Investor(1000, 40, 'AAPL', 20)
investor.start_investing()
