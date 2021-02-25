"""
file : indicatorsInflux.py
desc : 
"""
import json
from influxdb import InfluxDBClient
import pandas as pd 

client = InfluxDBClient(host='51.210.180.105', port=8086)

data = client.query('SELECT * FROM "stockai"."autogen"."open" WHERE "name"="IXIC" FILL(null)')



