FROM node:8.11.3
WORKDIR /usr/local/src
COPY . /usr/local/src
RUN npm install

CMD ["npm", "start"]
EXPOSE 8000
