FROM node:11.6.0

ARG PORT=8080

ENV PORT=${PORT}

WORKDIR /app

COPY package*.json ./
COPY yarn.* ./

RUN yarn install

COPY . .

EXPOSE ${PORT}
