from influxdb import DataFrameClient
import pandas as pd 
import talib as ta

client = DataFrameClient(host='51.210.180.105', port=8086)

def get_data(ticker_name: str) -> dict:
    df = client.query(''' 
                      SELECT value
                      FROM "stockai"."autogen"."close"
                      WHERE ("name"= \''''+ ticker_name + '''\')''')
    print(df[('close', (('name', ticker_name),))].values.flatten('F'))
    return df

get_data('AAPL')