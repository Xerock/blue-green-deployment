FROM williamyeh/ansible:ubuntu16.04

RUN pip install docker[tls]==3.1.4
RUN pip install docker-compose==1.20.1

COPY hosts /etc/ansible/
COPY id_rsa /root/.ssh/
COPY id_rsa.pub /root/.ssh/
WORKDIR /root

RUN chmod 600 /root/.ssh/id_rsa
RUN echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config

CMD [ "tail", "-f", "/dev/null"]
