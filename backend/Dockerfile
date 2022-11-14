FROM python:3.12.0a1-bullseye

WORKDIR /app

COPY app .

RUN pip install fastapi uvicorn[standard] pymongo

CMD uvicorn main:app --reload
