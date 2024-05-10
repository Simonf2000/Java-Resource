module.exports = {
    title: '静态markdown渲染框架',
    description: "markdown集合",
    dest: "./dist",
    port: 8884,
    base:"/doc/",
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      nav: [ // 导航栏配置
        {
          text: '简介',
          link: '/'
        },
        {
          text: '例子一',
          link: '/guide/eg1/'
        },
        {
          text: '例子二',
          link: '/guide/eg2/'
        },
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, //展示 标签深度
      displayAllHeaders: true, //左侧导航显示实时高亮
      activeHeaderLinks: true, //嵌套的标题链接和 URL 中的 Hash 值会实时更新
      lastUpdated: 'Last Updated',
    }
  };