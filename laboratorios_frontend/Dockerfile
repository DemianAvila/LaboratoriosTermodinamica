FROM node:16-alpine
WORKDIR /app
COPY ../ .


RUN rm -rf node_modules package-lock.json && npm install --global



CMD npm run serve || tail -f /dev/null