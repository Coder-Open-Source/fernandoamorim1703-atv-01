FROM node:18

WORKDIR /fernandodocker

COPY . .

# RUN npm i && npm i -g @nest/cli

RUN npm i

RUN cd /fernandodocker

EXPOSE 3000

CMD [ "npm", "run", "start" ]