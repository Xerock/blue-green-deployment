/etc/init.d/ssh start &
./wait-for-it.sh db:27017 -- node server.js