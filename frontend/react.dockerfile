FROM node:12.18.3

COPY . ./app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --silent    

EXPOSE 3000

CMD ["npm","start"]