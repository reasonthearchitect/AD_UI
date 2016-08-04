FROM nginx
COPY ./dist /etc/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf