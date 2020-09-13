FROM node:12.18.3

COPY ./frontend ./app

WORKDIR /app

RUN npm install 

EXPOSE 3000

RUN npm start