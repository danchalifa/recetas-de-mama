FROM node:10.15.3-alpine

WORKDIR /usr/src/app


COPY package*.json ./
COPY public ./public
COPY src ./src
COPY build ./build

RUN npm install 

RUN npm install -g pm2

EXPOSE 3000

CMD ["npm", "start"]
