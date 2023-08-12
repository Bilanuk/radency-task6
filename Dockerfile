FROM node:20
WORKDIR /nodejs_app
COPY package.json /nodejs_app
COPY yarn.lock /nodejs_app
RUN yarn install
COPY . /nodejs_app
CMD yarn db:init && yarn start
EXPOSE 3000
