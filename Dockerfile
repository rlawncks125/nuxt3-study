FROM node:14-slim  as build-stage

WORKDIR /app

COPY package*.json ./

# 이전 cache 삭제
# RUN npm cache verify 

# RUN npm cache clean --force

RUN npm install

COPY . .

RUN npm run build
# RUN npm run generate

CMD ["node",".output/server/index.mjs"]
# CMD ["npm","run","httpS"]



# FROM node:14-slim as production-stage
# RUN mkdir /app

# COPY --from=build-stage /app/.output /app


# CMD ["node","app/server/index.mjs"]
