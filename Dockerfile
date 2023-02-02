FROM node:16

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
COPY tsconfig.json ./
COPY src /app/src

RUN npm install
RUN npm i typescript -g
RUN npm i nodemon -g
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "watch"]
