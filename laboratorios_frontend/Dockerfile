FROM node:16-alpine
WORKDIR /app
COPY . .
RUN rm -rf node_modules package-lock.json dist
RUN npm install 
RUN npm run build

FROM nginx:1.23
WORKDIR /app
COPY --from=0 /app/dist ./
WORKDIR /etc/nginx
RUN rm nginx.conf
COPY /nginx_config/* ./
WORKDIR /
CMD nginx  -g 'daemon off;' -c /etc/nginx/nginx.conf 