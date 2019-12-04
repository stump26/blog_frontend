# build environment
FROM node:10.16.3 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn
COPY . /app
ENV REACT_APP_BACKEND_HOST http://localhost$REACT_APP_BACKEND_HOST
ENV REACT_APP_BACKEND_PORT 4000$REACT_APP_BACKEND_PORT
RUN yarn build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]