#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:eggs530/test530.git &&
git branch -M main &&
git push -u origin main -f &&
cd-
