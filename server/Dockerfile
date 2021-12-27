FROM node

WORKDIR /app

COPY package.json .

RUN npm i

COPY . /app/

VOLUME [ "/app/node_modules" ]

USER node

EXPOSE 8010

CMD [ "npm", "run", "start:dev" ]
