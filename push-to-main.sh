#!/bin/bash

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

# Push current branch to remote
echo "Pushing $CURRENT_BRANCH to remote..."
git push origin "$CURRENT_BRANCH"

# Switch to main branch
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes from main..."
git pull origin main

echo "Done! Now on main branch with latest changes."