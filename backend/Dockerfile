FROM python:3.12.0a1-bullseye

WORKDIR /keys

RUN openssl req -new -newkey rsa:4096 \
    -x509 -sha256 -days 365 -nodes \
    -out api_termodinamica.crt -keyout api_termodinamica.key \
    -subj "/C=MX/ST=CDMX/L=CU/O=UNAM/OU=IT/CN=unam.mx"

WORKDIR /app

COPY app .

RUN rm -rf *__pycache__*

RUN pip install fastapi uvicorn[standard] pymongo pyjwt

#CMD tail -f /dev/null

CMD uvicorn main:app  \
    --ssl-certfile /keys/api_termodinamica.crt \
    --ssl-keyfile /keys/api_termodinamica.key \
    --reload --host 0.0.0.0 \
    --port 80 