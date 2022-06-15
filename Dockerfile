FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./

# 이전 cache 삭제
# RUN npm cache verify 

# RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm run build

CMD ["node",".output/server/index.mjs"]

 
# CMD ["npm", "run", "dev"]