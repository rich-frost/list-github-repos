FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
ARG gh_token
ENV gh_token=$gh_token
RUN set GITHUB_ACCESS_TOKEN=$gh_token && npm run build

FROM nginx:1.19-alpine AS server
COPY --from=builder ./app/dist /usr/share/nginx/html
