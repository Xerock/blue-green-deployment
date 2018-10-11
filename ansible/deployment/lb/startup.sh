#!/bin/sh
/etc/init.d/ssh start &
haproxy -f /usr/local/etc/haproxy/haproxy.cfg -D -p /var/run/haproxy.pid &
tail -f /dev/null