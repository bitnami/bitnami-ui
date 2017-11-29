#!/bin/bash
set -e

SSH_KEY=/app/deploy.key
# Deploy vars
DEPLOY_SRC=/app/docs/dist
DEPLOY_DEST=/tank/data/bitnami-ui
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
DEPLOY_USER=deploy
DEPLOY_URL=bitnami-ui-dev.nami

# This script will deploy the Bitnami UI project to bitnami-ui-dev.nami

## Configure ssh key for deployment
if  [ -f $SSH_KEY ]; then
  mkdir -p /root/.ssh
  cp $SSH_KEY /root/.ssh/id_rsa
  chown root:root /root/.ssh/id_rsa
  chmod 600 /root/.ssh/id_rsa
fi

# Compile the project. Now, we are deploying to staging server, so
# we compile the documentation with the distributed CSS files
npm run dist

# Copy the generated output to the server
if [ $? -eq 0 ]; then
  scp -r -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null $DEPLOY_SRC/* $DEPLOY_USER@$DEPLOY_URL:$DEPLOY_DEST
  # Publish the version in a specific folder too
  ssh -o StrictHostKeyChecking=no $DEPLOY_USER@$DEPLOY_URL "mkdir -p $DEPLOY_DEST/$PACKAGE_VERSION"
  scp -r -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null $DEPLOY_SRC/* $DEPLOY_USER@$DEPLOY_URL:$DEPLOY_DEST/$PACKAGE_VERSION
fi
