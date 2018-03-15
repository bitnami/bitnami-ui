#!/bin/bash
set -e

publish() {
  echo "Deploying $1 tag"

  # Check if it's required
  CURRENT_TAG=$(git describe --exact-match)

  if [ "$1" -ne "$CURRENT_TAG" ]; then
    git checkout $1
  fi

  # Install
  yarn install

  # Build
  lerna bootstrap
  lerna run build
  # Run JS dev
  lerna run --scope @bitnami/hex-js build:dev

  # Prepare the folder
  BUCKET=$BUCKET yarn run cdn
}

# Install and publish
if git describe --exact-match >&/dev/null; then
  TAG=$(git describe --exact-match)
  publish $TAG
elif [[ -v DEPLOY_TAG ]]; then
  publish $DEPLOY_TAG
else
  echo "No new tags. Skipping the publishing"
fi
