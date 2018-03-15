#!/bin/bash
set -e

# Install and publish
if git describe --exact-match >&/dev/null; then
  TAG=$(git describe --exact-match)
  echo "Deploying $TAG tag"

  # Build
  lerna bootstrap
  lerna run build

  # Prepare the folder
  BUCKET=$BUCKET yarn run cdn
else
  echo "No new tags. Skipping the publishing"
fi
