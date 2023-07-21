FROM node:18-alpine

WORKDIR /shillelaghsrus

COPY public/ /shillelaghsrus/public
COPY src/ /shillelaghsrus/src
COPY package.json /shillelaghsrus/

RUN npm install

CMD ["npm", "start"]
