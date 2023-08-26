FROM node:18.16.0 as builder

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./app/package.json /usr/src/app/package.json

RUN npm install

COPY . /usr/src/app

EXPOSE 8200

CMD ["npm", "run", "start"]
