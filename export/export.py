import json

from bottle import route, run


@route('/')
def index():
    with open('stats.json') as json_file:
        return json.load(json_file)


if __name__ == "__main__":
    # execute only if run as a script
    run(host='localhost', port=8081)
