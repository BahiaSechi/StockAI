import csv
import datetime
from time import sleep

import requests


def do_import():
    headers = ["timestamp", "name", "open", "close", "high", "low", "volume"]

    with open("broker/big_five_stocks_reduced.csv", newline='') as stock_data:
        reader = csv.reader(stock_data, delimiter=',')
        i = 0
        for row in reader:
            # Send a request
            # Wait 0.5s
            if i != 0:
                # timestr = str(int(datetime.datetime.strptime(row[0], "%Y-%m-%d").timestamp() * 1000000000))
                data = "open,name=" + row[1] + " value=" + row[2] + " "  # + timestr
                data += "\nclose,name=" + row[1] + " value=" + row[3] + " "  # + timestr
                data += "\nhigh,name=" + row[1] + " value=" + row[4] + " "  # + timestr
                data += "\nlow,name=" + row[1] + " value=" + row[5] + " "  # + timestr
                data += "\nvolume,name=" + row[1] + " value=" + row[6] + " "  # + timestr
                r = requests.post("http://51.210.180.105:8086/write?db=stockai&u=manquiche&p=manquiche", data=data)
                if not r.ok:
                    print("Error: " + r.text)
                sleep(0.2)

            i += 1


if __name__ == "__main__":
    while True:
        do_import()
