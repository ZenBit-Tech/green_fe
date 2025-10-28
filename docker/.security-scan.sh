#!/bin/bash

set -e

echo "🔍 Running security scan for frontend Docker image..."

IMAGE_NAME="zenbit-frontend"
IMAGE_TAG="latest"

if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed"
    exit 1
fi

echo "📦 Building image for scanning..."
docker build -t $IMAGE_NAME:$IMAGE_TAG -f Dockerfile .

echo "🔎 Scanning for vulnerabilities with Trivy..."
if command -v trivy &> /dev/null; then
    trivy image --severity HIGH,CRITICAL $IMAGE_NAME:$IMAGE_TAG
else
    echo "⚠️  Trivy not installed. Install: https://aquasecurity.github.io/trivy/"
fi

echo "📊 Checking image size..."
docker images $IMAGE_NAME:$IMAGE_TAG --format "Size: {{.Size}}"

echo "✅ Security scan completed"