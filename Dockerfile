FROM node:14.18.1
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN chown -R node .
EXPOSE 3000
CMD ["node", "index.js"]
