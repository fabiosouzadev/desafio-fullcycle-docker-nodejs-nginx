FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY views  views/
COPY index.js ./
COPY public  public/
RUN npm install

EXPOSE 3000

CMD ["node","index.js"]
