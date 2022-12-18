FROM python:3.12.0a1-bullseye

WORKDIR /app

COPY app .

RUN rm -rf *__pycache__*

RUN pip install fastapi uvicorn[standard] pymongo pyjwt

#CMD tail -f /dev/null

CMD uvicorn main:app --reload --host 0.0.0.0 --port 80
