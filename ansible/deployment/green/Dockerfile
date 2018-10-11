FROM node:latest

RUN apt update && apt install -y openssh-server
COPY id_rsa.pub /root/.ssh/authorized_keys

COPY code /code
WORKDIR /code

RUN npm install
RUN chmod +x wait-for-it.sh

EXPOSE 22 3001

CMD ["sh", "startup.sh"]

