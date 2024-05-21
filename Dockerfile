FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build

ENTRYPOINT [ "pnpm", "run", "start" ]