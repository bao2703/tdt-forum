FROM node:11.6.0

ARG PORT=8080

ENV PORT=${PORT}

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}
