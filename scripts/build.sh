#!/bin/bash

# 项目目录
BASE_PATH=$(cd `dirname $0`; pwd)
BASE_PATH=$(cd `dirname $BASE_PATH`; pwd)

# 定位到 root
cd $BASE_PATH

# 删除旧的产出
rm -rf dist
rm -rf temp

# 构建
npm run vue-build

mv dist temp

mkdir dist

cp temp/VueGitComment.umd.js dist/vue-git-comment.js
cp temp/VueGitComment.umd.min.js dist/vue-git-comment.min.js
cp temp/VueGitComment.css dist/vue-git-comment.css

rm -rf temp

echo "... build done ..."
