FROM node:12

WORKDIR /app

COPY package*.json ./

RUN yarn

RUN yarn add global nodemon

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "yarn", "dev" ]
