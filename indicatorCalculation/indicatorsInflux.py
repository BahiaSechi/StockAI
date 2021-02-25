"""
file : indicatorsInflux.py
desc : 
"""
import json
from influxdb import DataFrameClient
import pandas as pd 
import talib as ta
import numpy as np

client = DataFrameClient(host='51.210.180.105', port=8086)

dfs = client.query('''
SELECT value 
FROM "stockai"."autogen"."close" 
WHERE time > \'2012-12-31\' AND time < \'2019-08-31\' 
AND ("name"=\'AAPL\' 
OR "name"=\'MSFT\') 
GROUP BY "name"
''')

print(dfs[('close', (('name', 'AAPL'),))].values.flatten('F'))

rsi = ta.RSI(dfs[('close', (('name', 'AAPL'),))].values.flatten('F'), timeperiod=14) #skip 14 days to have real values

print(rsi)