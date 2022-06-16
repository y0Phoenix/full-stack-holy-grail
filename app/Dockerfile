FROM node

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY index.js /app/

COPY public /app/public

EXPOSE 3000
CMD ["npm", "start"]
