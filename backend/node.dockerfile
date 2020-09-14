FROM node:12.18.3

COPY . /app

WORKDIR /app

RUN npm install --silent

EXPOSE 3333

CMD ["npm", "start"]