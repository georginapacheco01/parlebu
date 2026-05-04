FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build user-service

CMD ["node", "dist/apps/user-service/main.js"]