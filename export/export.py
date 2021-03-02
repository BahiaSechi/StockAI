import json
from bottle import run, get


@get('/res')
def res():
    #with open("/home/mateo/Documents/Work/Dev/ensicaen/ia/stockai/export/res.txt") as file:
    with open("D:\\Travail\\ENSI\\Annee_2\\projet\\stockai\\export\\res.txt") as file:
        return file.readline()


@get('/file')
def history():
    with open("D:\\Travail\\ENSI\\Annee_2\\projet\\stockai\\export\\stats.json") as json_file:
        return json_file


def main():
    run(host='localhost', port=8081, debug=True)
