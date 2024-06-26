#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd "E:/Java/Java-Learning-Resource/VuePress-markdown-master/docs/.vuepress/dist"

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

if [ ! -d .git ]; then
  git init
fi

git add -A
git commit -m 'deploy'

# 将静态文件推送到 master 分支
git push -f git@github.com:Simonf2000/Java-Resource.git master:gh-pages

cd -
