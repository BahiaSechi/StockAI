"""
file : gatewayInflux.py
desc :
"""
from datetime import datetime, timedelta

from influxdb import DataFrameClient
from pandas import DataFrame

from gateway.PriceType import PriceType

client = DataFrameClient(host='51.210.180.105', port=8086)


def get_data(ticker_name: str, days: int, type: PriceType) -> DataFrame:
    date = datetime.now() - timedelta(minutes=days)
    date = date.isoformat() + "Z"

    dfs = client.query(f'''
    SELECT value 
    FROM "stockai"."autogen"."{type.value}"
    WHERE 
--     time > \'{date}\' 
--     AND 
    "name"=\'{ticker_name}\'
    ORDER BY time desc 
    LIMIT {days}''')

    print(dfs)
    return dfs[type.value]
