## To Run
1. npm install -g gulp@3.9.1
2. npm run build
3. npm run start

* npm run test

### Kill Docker
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)

### Start App
npm run docker

### Compile code changes and create docker for api
./build.sh

### Insert seed data
npm run seed

### heroku
https://remassis-login.herokuapp.com/

### mongo Connection
http://localhost:1234/app/connection_list

### messeging
1. textmagic-rest-client
2. nexmo

