npm run docs:build

# 进入生成的文件夹
cd yogaNotes/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:roiff/yogaNotes.git master:gh-pages
