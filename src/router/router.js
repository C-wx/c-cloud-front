/*
 * @Desc:
 * @Author: cbuc
 * @Date: 2021-08-08 20:43:58
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/file',
      name: 'File',
      component: () =>
        import(/* webpackChunkName: "file" */ '@/views/file/file.vue'),
      meta: {
        requireAuth: true, //  当前路由是否需要登录才可进入
        title: 'C-cloud',
        breadCrumbName: '全部文件',
      },
    },
    {
      path: '*',
      name: 'Error_404',
      component: () =>
        import(/* webpackChunkName: "error_404" */ '@/views/ErrorPage/404.vue'),
      meta: { title: '404' },
    },
  ],
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
