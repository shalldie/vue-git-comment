#!/bin/bash

# 项目目录
BASE_PATH=$(cd `dirname $0`; pwd)
BASE_PATH=$(cd `dirname $BASE_PATH`; pwd)

# 定位到 root
cd $BASE_PATH

# 删除旧的产出
rm -rf dist

# 构建
npm run vue-build

rm dist/demo.html

echo "... build done ..."
