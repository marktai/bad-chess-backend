FROM node:9.2.1-alpine

ENV PORT 80

WORKDIR /app

EXPOSE 80

ADD ./package*.json ./yarn.lock /app/
RUN yarn install

ADD . /app
RUN yarn build

CMD yarn start
