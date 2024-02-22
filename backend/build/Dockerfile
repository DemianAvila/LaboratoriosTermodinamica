FROM python:3.10-bullseye


WORKDIR /app

COPY app/* .

RUN rm -rf *__pycache__*

RUN pip install fastapi uvicorn[standard] pymongo pyjwt

ENV PORT 80

#CMD tail -f /dev/null

#CMD uvicorn main:app  \
#    --ssl-certfile /keys/api_termodinamica.crt \
#    --ssl-keyfile /keys/api_termodinamica.key \
#    --reload --host 0.0.0.0 \
#    --port 80 

CMD uvicorn main:app  \
    --reload --host 0.0.0.0 \
    --port 80 
