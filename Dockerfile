FROM node:18

WORKDIR /frontend

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .
RUN npm run build

#CMD ["npx", "-y", "http-server", "-p", "8000", "/frontend/build"] 
