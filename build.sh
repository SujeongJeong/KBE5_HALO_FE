#!/bin/sh
npm run build
mkdir -p output
cp -R dist/* output/