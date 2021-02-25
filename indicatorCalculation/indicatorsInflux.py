"""
file : indicatorsInflux.py
desc : 
"""

from influxdb import DataFrameClient
import pandas as pd 
import talib as ta

client = DataFrameClient(host='51.210.180.105', port=8086)

def get_data(ticker_name):
    dfs = client.query('''
    SELECT value 
    FROM "stockai"."autogen"."close" 
    WHERE time > \'2012-12-31\' AND time < \'2019-08-31\' 
    AND ("name"=''' + ticker_name +''')''')  
    print(dfs[('close', (('name', ticker_name),))].values.flatten('F'))

get_data('AAPL')