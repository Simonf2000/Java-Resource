module.exports = {
    title: '静态markdown渲染框架',
    description: "markdown集合",
    dest: 'E:/Java/Java-Learning-Resource/VuePress-markdown-master/docs/.vuepress/dist',
    port: 8884,
    base: '/Java-Resource/',
    markdown: {
      // ......
      extendMarkdown: md => {
        md.use(require("markdown-it-disable-url-encode"));
      }
    },  
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { 
            text: 'simonf 博客', 
            items: [
                { text: 'blog', link: 'https://simonf.cn/' }
            ]
        }
    ],
    sidebar: [
      {
          title: 'JavaSE',
          path: '/JavaSE/安装笔记',
          collapsable: false, // 不折叠
          children: [
              { title: "安装笔记", path: "/JavaSE/安装笔记.md" }
          ]
      },
      {
        title: "MySQL",
        path: '/MySQL/尚硅谷_柴林燕_MySQL8_可视化工具Navicat的使用',
        collapsable: false, // 不折叠
        children: [
          { title: "可视化工具Navicat的使用", path: "/MySQL/尚硅谷_柴林燕_MySQL8_可视化工具Navicat的使用.md" },
          { title: "MySQL8.0_安装和使用文档", path: "/MySQL/尚硅谷_柴林燕_MySQL8.0_安装和使用文档.md" }
        ],
      }
    ], // 侧边栏配置

    },
    theme: 'reco',
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
  };