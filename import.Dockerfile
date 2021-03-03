FROM debian:10

ADD broker /app
ADD requirements.txt /app
WORKDIR /app

ENTRYPOINT python3 broker/import.py