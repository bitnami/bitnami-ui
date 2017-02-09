#!/bin/bash
set -e

SSH_KEY=/app/deploy.key
# Deploy vars
DEPLOY_SRC=/app/docs/dist
DEPLOY_DEST=/tank/data/bitnami-ui
DEPLOY_USER=deploy
DEPLOY_URL=bitnami-ui-dev.nami

# This script will deploy the Bitnami UI project to bitnami-ui-dev.nami

## Configure ssh key for deployment
if  [ -f $SSH_KEY ]; then
  mkdir -p /home/root/.ssh
  cp $SSH_KEY /home/root/.ssh/id_rsa
  chown root:root /home/root/.ssh/id_rsa
  chmod 600 /home/root/.ssh/id_rsa
fi

# Compile the project. Now, we are deploying to staging server, so
# we compile the documentation with the distributed CSS files
npm run docs:build

# Copy the generated output to the server
if [ $? -eq 0 ]; then
  scp -v -r -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null $DEPLOY_SRC/* $DEPLOY_USER@$DEPLOY_URL:$DEPLOY_DEST
fi
