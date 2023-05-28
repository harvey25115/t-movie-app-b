FROM node:latest

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
RUN npm run build
ENV NODE_ENV prod
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]