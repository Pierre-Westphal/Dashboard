
FROM node:lts-alpine as build-stage

WORKDIR /app

COPY app/package*.json ./

COPY README.md /

RUN npm install

COPY /app/ .

EXPOSE 8080

CMD ["npm", "start"]