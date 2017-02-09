FROM bitnami/node:6.9.0-r0
MAINTAINER Bitnami <containers@bitnami.com>

RUN sudo apt-get update && sudo apt-get install -y openssh-client

USER bitnami
WORKDIR /app

# Documentation port
EXPOSE 8080

# Copy the package json
COPY package.json /app/
RUN sudo chown -R bitnami:bitnami /app && \
    npm install

# By default, generate the Docs and serve them
CMD ["npm docs:serve"]
