FROM python:3.9

RUN wget http://prdownloads.sourceforge.net/ta-lib/ta-lib-0.4.0-src.tar.gz &&\
    tar xzvf ta-lib-0.4.0-src.tar.gz && \
    cd ta-lib && \
    ./configure --prefix=/usr && \
    make && \
    make install && \
    cd .. && \
    rm -rf ta-lib*

ADD . /app
ADD requirements.txt /app
WORKDIR /app

RUN python3 -m pip install -r requirements.txt

ENV STOCKAI_HOSTNAME 51.210.180.105
ENV STOCKAI_PORT 8081
ENV STOCKAI_STRATEGY RSISMA
ENV STOCKAI_TICKER AAPL
ENV STOCKAI_FUNDS 1000
ENV STOCKAI_GOAL 10000

EXPOSE 8081

ENTRYPOINT python3 investStrategies/main.py