FROM node:10.15.3-alpine

WORKDIR /usr/src/app

COPY package*.json .
COPY routes ./routes

COPY app.js ./
COPY bin/www ./bin/www


RUN npm install
RUN npm install -g pm2

EXPOSE 9000

CMD ["npm", "start"]
