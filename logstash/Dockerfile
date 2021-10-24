FROM docker.elastic.co/logstash/logstash:7.14.2
RUN rm -f /usr/share/logstash/pipeline/logstash.conf

ADD pipeline/ /usr/share/logstash/pipeline/
ADD config/ /usr/share/logstash/config/
ADD load/ /usr/share/logstash/load/
