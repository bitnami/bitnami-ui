#!/bin/bash
set -e

# Install dependencies
echo "Installing dependencies..."
yarn

# Bootstrap
echo "Bootstraping the project with lerna"
lerna bootstrap --npm-client=yarn

# Build main projects. We need to do it because we're using root user on the docker image
# It causes the prepublish script to fail due to https://docs.npmjs.com/misc/scripts#user
lerna run build --scope @bitnami/hex-core
lerna run build --scope @bitnami/hex
lerna run build --scope @bitnami/hex-js

# Now, we just launch the command
exec "$@"
