FROM docker.elastic.co/logstash/logstash:7.15.1
RUN rm -f /usr/share/logstash/pipeline/logstash.conf

ADD pipeline/ /usr/share/logstash/pipeline/
ADD config/ /usr/share/logstash/config/
ADD config/ /usr/share/logstash/load/
