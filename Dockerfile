FROM node:14-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
COPY ./package-lock.json /app/
RUN npm ci
COPY . /app
RUN set GITHUB_ACCESS_TOKEN=${GITHUB_ACCESS_TOKEN} && npm run build


FROM node:14-alpine as production
ENV NODE_ENV production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
