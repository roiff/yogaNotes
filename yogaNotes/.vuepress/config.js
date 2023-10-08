module.exports ={
  //这里面路径最开始的/是指向.vuepress/public/的
  base:'/yogaNotes',//部署站点的基础路径,默认/
  lang: 'zh-CN',
  title: '晓晓的笔记',
  // description: '这是我的第一个 VuePress 站点',//站点描述，它会被每个页面的 Frontmatter 中的 description 字段覆盖
  // head: [['link', { rel: 'icon', href: '/images/logo.PNG' }]],//站点头部的icon
  plugins: ['autobar'],
  themeConfig: {
    nav:[
        { text: '首页', link: '/' },
    ],
    sidebar: 'auto'
},
}
