FROM node
MAINTAINER Nahuel Chaves

RUN npm install -g npm
RUN npm install -g babel

ADD . /nodejs

RUN npm install
