#!/bin/bash
git status
git add .
git add -A
echo Enter you commit message : 
read message
git commit -m $message
git push


