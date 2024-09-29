FROM node:22-alpine

WORKDIR /usr/api

COPY --chown=node:node package*.json ./

RUN npm ci --silent && npm cache clean --force

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm","run","prod" ]
