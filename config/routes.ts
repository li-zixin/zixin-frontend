export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {name: '登录', path: '/user/login', component: './User/Login'},
      {name: '注册', path: '/user/register', component: './User/Register'}
    ],
  },
  // {path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome'},
  {path: '/',redirect: '/add_chart'},
  {name:'智能分析',path: '/add_chart',icon: 'barChart',component: './AddChart'},
  {name:'智能分析(异步)',path: '/add_chart_async',icon: 'barChart',component: './AddChartAsync'},
  { name:'我的图表',path: '/my_chart', icon: 'pieChart', component: './MyChart' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {path: '/admin', redirect: '/admin/sub-page'},
      {path: '/admin/sub-page', name: '二级管理页', component: './Admin'},
    ],
  },
  {path: '/', redirect: '/welcome'},
  {path: '*', layout: false, component: './404'},
];
