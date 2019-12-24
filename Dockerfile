# build environment
FROM node:v12.13.1
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn
COPY . /app
ARG REACT_APP_BACKEND_HOST=https://api.blog.stumpark.com
RUN yarn build
RUN yanr build:ssr
RUN yarn start:ssr
