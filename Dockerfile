# build environment
FROM node:12.13.1 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn
COPY . /app
# ARG REACT_APP_BACKEND_HOST=https://api.blog.stumpark.com
ENV REACT_APP_BACKEND_HOST=https://api.blog.stumpark.com
RUN yarn build
RUN yarn build:ssr
EXPOSE 3001
CMD ["yarn","start:ssr"]
