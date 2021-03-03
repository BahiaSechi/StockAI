import json
import ast
import os

from bottle import run, get, hook, response, Bottle

app = Bottle()


@app.hook('after_request')
def enable_cors():
    """
    You need to add some headers to each request.
    Don't use the wildcard '*' for Access-Control-Allow-Origin in production.
    """
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'


@app.get('/res')
def res():
    with open("/home/debian/work/server/stockai/export/res.txt") as file:
        return file.readline()


@app.get('/stats')
def history():
    with open("/home/debian/work/server/stockai/export/stats.txt") as json_file:
        return json_file


def main():
    run(app, host="51.210.180.105", port=8081, debug=True)
