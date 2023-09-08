FROM node

WORKDIR /developer/nodejs/node-bind-mount-project

COPY . .

RUN npm ci

ENV PORT 3000

CMD ["npm","start"]

# docker build -t app-bind-mount-node
# docker run -it --init -p 3001:3000 -v %cd%:/developer/nodejs/node-bind-mount-project app-bind-mount-node