//全局需要使用的一些仓库数据，比如说菜单配置，用户信息
export default {
  namespaced: 'global',
  state: {
    menus: [
      { id: 1, icon: 'user', name: '用户界面', href: '/' },
      { id: 2, icon: 'video-camera', name: '个人页面', href: '/users/center' },
      { id: 3, icon: 'upload', name: '基本信息', href: '/users/manages' },
    ],
  },
};
