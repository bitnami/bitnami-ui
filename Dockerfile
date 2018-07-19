FROM bitnami/node:9-debian-8-master
LABEL maintainer="Bitnami <webdev@bitnami.com>"

# Dependencies
RUN install_packages gnupg
RUN install_packages openssh-client apt-transport-https libpng-dev

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    install_packages yarn

WORKDIR /app
COPY ./package.json /app/package.json

# Install
RUN yarn global add lerna && yarn install

# Documentation port
EXPOSE 8080

# By default, generate the Docs and serve them
CMD ["yarn", "run", "docs"]
