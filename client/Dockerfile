FROM node

RUN npm install -g npm@8.3.0

WORKDIR /app

COPY --chown=node:node package.json .

RUN npm i

COPY --chown=node:node . .

USER node

VOLUME [ "/app/node_modules" ]

EXPOSE 8011

CMD [ "npm", "run", "start" ]
