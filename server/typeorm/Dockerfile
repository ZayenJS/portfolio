FROM node

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app

VOLUME [ "/app/node_modules" ]

RUN npm i -g typeorm

USER node

ENTRYPOINT [ "typeorm" ]
