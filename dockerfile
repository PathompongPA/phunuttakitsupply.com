FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci 

COPY . .

ARG NEXT_PUBLIC_URL_HOST
ENV NEXT_PUBLIC_URL_HOST=$NEXT_PUBLIC_URL_HOST

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]