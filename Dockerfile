FROM node:14
ENV NODE_ENV=production
WORKDIR /M1
COPY . .
RUN npm install --production -silent
RUN chown -R node /M1
EXPOSE 3000
USER node
CMD ["npm", "start"]