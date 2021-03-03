FROM python:3

ADD . /app
WORKDIR /app

ENTRYPOINT python3 broker/import.py