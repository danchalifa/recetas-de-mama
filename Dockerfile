FROM node:10.15.3-alpine

WORKDIR /usr/src/app

RUN mkdir /usr/src/app/api
RUN mkdir /usr/src/app/client

COPY api/package*.json ./api
COPY api/routes ./api/routes

COPY api/app.js ./api
COPY api/bin/www ./api/bin/www

COPY client/package*.json ./client
COPY client/public ./client/public
COPY client/src ./client/src
COPY client/build ./client/build


COPY run-app.sh ./

RUN npm install --prefix api
RUN npm install --prefix client

RUN npm install
RUN npm install -g pm2

EXPOSE 3000
EXPOSE 9000

ENTRYPOINT ["sh", "/usr/src/app/run-app.sh"]