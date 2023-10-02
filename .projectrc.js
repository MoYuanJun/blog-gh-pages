import React from 'react';

export default {
  logo: { 
    img: void 0,
    title: '测试标题',
  },
  footer: () => ('footer'), 
  header: () => ('header'), 
  useHashRouter: true, 
  menu: [
    {
      key: 'home',
      title: '首页',
      icon: 'AndroidOutlined',
      url: '/',
      routes: [
        {
          path: '/',
          element: <div>首页</div>,
        },
      ],
    },
  ],
};
// 