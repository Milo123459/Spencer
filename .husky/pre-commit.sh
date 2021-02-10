#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo '$ pre-commit' 
echo '$ yarn analyze'
yarn analyze 
echo '$ git add .'
git add . 
echo '$ yarn lint-staged'
yarn lint-staged