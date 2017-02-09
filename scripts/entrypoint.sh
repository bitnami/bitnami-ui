#!/bin/bash
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Now, we just launch the command
exec "$@"
