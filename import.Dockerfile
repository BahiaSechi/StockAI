FROM python:3

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

ENTRYPOINT python3 broker/import.py