FROM node:alpine

WORKDIR node-app

COPY . .

RUN cd /node-app

RUN npm i

EXPOSE 5173

ENTRYPOINT ["npm","run","dev","--", "--host", "0.0.0.0"]
