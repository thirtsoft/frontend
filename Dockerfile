FROM nginx

COPY nginx/site.conf /etc/nginx/conf.d/default.conf
COPY build/www /usr/share/nginx/html