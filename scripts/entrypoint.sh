#!/bin/bash
set -e

# Install dependencies
echo "Installing dependencies..."
yarn

echo "Bootstraping the project with lerna"
./node_modules/.bin/lerna bootstrap

# Now, we just launch the command
exec "$@"
