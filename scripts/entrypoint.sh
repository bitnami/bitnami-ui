#!/bin/bash
set -e

# Install dependencies
echo "Installing dependencies..."
yarn

echo "Bootstraping the project with lerna"
lerna bootstrap --npm-client=yarn

# Now, we just launch the command
exec "$@"
