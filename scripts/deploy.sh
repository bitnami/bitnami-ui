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
  mkdir -p /home/bitnami/.ssh
  cp $SSH_KEY /home/bitnami/.ssh/id_rsa
  chown bitnami:bitnami /home/bitnami/.ssh/id_rsa
  chmod 600 /home/bitnami/.ssh/id_rsa
fi

# Compile the project. Now, we are deploying to staging server, so
# we compile the documentation with the distributed CSS files
npm run docs:build

# Copy the generated output to the server
if [ $? -eq 0 ]; then
  scp -r -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null $DEPLOY_SRC/* $DEPLOY_USER@$DEPLOY_URL:$DEPLOY_DEST
fi
