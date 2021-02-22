"""
file : indicators.py
desc : Retrieves stock market information from a specific day via yfinance, calculates the main indicators via talib.
"""

#imports
import yfinance as yf
import talib as ta
import numpy as np

#dl of stock data of Apple from 2nd of January 2021
data = yf.download("AAPL", start="2020-01-02", end="2021-01-02")
data.reset_index(drop=False,inplace=True)

"""
indicators
"""

#Relative Strength Index
rsi = ta.RSI(data.Close, timeperiod=14) #skip 14 days to have real values
print("Relative Strength Index : \n")
print(rsi)
print("\n")

#Moving Average
periods = data.Date
mvag = ta.MAVP(data.Close, periods, minperiod=2, maxperiod=30, matype=0)
print("Moving Average : \n")
print(mvag)
print("\n")

#Moving Average Convergence Divergence
mvacd = ta.MACD(data.Close, 12, 26, 9)
print("Moving Average Convergence Divergence : \n")
print(mvacd)
print("\n")

#On Balance Volume
obv = ta.OBV(data.Close, data.Volume)
print("On Balance Volume : \n")
print(obv)

### END ###