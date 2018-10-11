FROM haproxy:latest

RUN apt update && apt install -y openssh-server software-properties-common python
COPY id_rsa.pub /root/.ssh/authorized_keys

COPY haproxy.cfg /usr/local/etc/haproxy/haproxy.cfg
COPY startup.sh startup.sh

RUN chmod +x startup.sh

CMD ["./startup.sh"]