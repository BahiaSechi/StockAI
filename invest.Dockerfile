FROM python:3

RUN wget http://prdownloads.sourceforge.net/ta-lib/ta-lib-0.4.0-src.tar.gz &&\
    tar xzvf ta-lib-0.4.0-src.tar.gz && \
    cd ta-lib && \
    ./configure && \
    make && \
    make install && \
    cd .. && \
    rm -rf ta-lib* && \

ADD investStrategies /app
ADD export /app
ADD gateway /app
ADD requirements.txt /app
WORKDIR /app

EXPOSE 8081

ENTRYPOINT pip install -r requirements

RUN python3 investStrategies/main.py