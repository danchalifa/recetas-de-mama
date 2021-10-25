FROM node:10.15.3-alpine

WORKDIR /usr/src/app

COPY api api
COPY client client


WORKDIR /usr/src/app/client
RUN npm install

WORKDIR /usr/src/app/api
RUN npm install
RUN npm install -g pm2

WORKDIR /usr/src/app/api


EXPOSE 9000

CMD ["npm", "start"]
