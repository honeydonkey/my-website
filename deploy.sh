#!/bin/bash

# Cybersecurity Portfolio Deployment Script for Vercel
# This script helps deploy the portfolio to Vercel with the correct settings

echo "🚀 Starting deployment process for Cybersecurity Portfolio..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI is not installed. Installing now..."
    npm install -g vercel
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Vercel CLI. Please install it manually with 'npm install -g vercel'"
        exit 1
    fi
    echo "✅ Vercel CLI installed successfully"
fi

# Ensure the public directory exists and contains all necessary files
echo "📁 Checking public directory..."
if [ ! -d "public" ]; then
    echo "📁 Creating public directory..."
    mkdir -p public
fi

# Copy all necessary files to the public directory
echo "📋 Copying files to public directory..."
cp -r index.html 404.html public/

# Check if projects directory exists and copy it
if [ -d "projects" ]; then
    echo "📋 Copying projects directory..."
    cp -r projects public/
fi

# Check if resume directory exists and copy it
if [ -d "resume" ]; then
    echo "📋 Copying resume directory..."
    cp -r resume public/
fi

echo "✅ All files copied to public directory"

# Ask if the user wants to deploy now
read -p "🔄 Do you want to deploy to Vercel now? (y/n): " deploy_now

if [ "$deploy_now" = "y" ] || [ "$deploy_now" = "Y" ]; then
    echo "🚀 Deploying to Vercel..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployment successful!"
        echo "🌐 Your portfolio is now live on Vercel"
    else
        echo "❌ Deployment failed. Please check the error messages above."
        echo "💡 Make sure you're logged in to Vercel and have the correct permissions."
    fi
else
    echo "⏸️ Deployment skipped. You can deploy manually with 'vercel --prod'"
    echo "💡 When deploying manually, make sure to set the output directory to 'public'"
fi

echo "🎉 Deployment process completed!"
