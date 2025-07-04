FROM node:18-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node

# Declare an argument for the web server
ENV EXAMPLE=2

RUN npm install
COPY --chown=node:node . .
EXPOSE 5555
CMD [ "node", "app.js" ]

