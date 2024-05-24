### STAGE 1: Build ###
FROM node:latest AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .. .
RUN npm run build

# Stage 2: Serve the angular app with Nginx
FROM nginx:alpine
COPY --from=build-stage /app/dist/route1 /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80