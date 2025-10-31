#!/bin/bash

set -e

echo "🧪 Testing Docker image with different Node versions..."

NODE_VERSIONS=("20-alpine" "22-alpine")

for VERSION in "${NODE_VERSIONS[@]}"; do
    echo ""
    echo "🔨 Testing with Node $VERSION..."
    
    sed "s/FROM node:22-alpine/FROM node:$VERSION/" Dockerfile.dev > Dockerfile.test
    
    docker build \
        -t zenbit-frontend-test:$VERSION \
        -f Dockerfile.test .
    
    rm Dockerfile.test
    
    echo "✅ Node $VERSION build successful"
done

echo ""
echo "✨ All versions tested successfully!"