# étape de build
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY app/package*.json ./
RUN npm install
COPY /app/ .
RUN npm run build

# étape de production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 81
CMD ["nginx", "-g", "daemon off;"]