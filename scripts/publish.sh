#!/bin/bash
set -e

# Install and publish
if git describe --exact-match >&/dev/null; then
  TAG=$(git describe --exact-match)
  echo "Deploying $TAG tag"
  # npm install
  # npm run publish
else
  echo "No new tags. Skipping the publishing"
fi
