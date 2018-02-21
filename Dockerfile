FROM bitnami/node:9
LABEL maintainer="Bitnami <webdev@bitnami.com>"

# Dependencies
RUN install_packages openssh-client apt-transport-https vim

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    install_packages yarn

WORKDIR /app

# Documentation port
EXPOSE 8080

# By default, generate the Docs and serve them
CMD ["yarn", "run", "docs"]
