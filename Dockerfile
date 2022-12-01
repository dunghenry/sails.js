FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install && npm cache clean --force && npm install sails -g

EXPOSE 1337

CMD ["sails", "lift", "--prod"]