#!/bin/bash
echo Pulling from github...
git pull
echo Building...
npm run build
echo restarting Pm2
pm2 restart front
