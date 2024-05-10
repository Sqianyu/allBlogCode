import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Web',
    component: () => import('@/views/web')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/home'),
    children: [
      {
        path: '/admin/user/personal',
        name: 'UserPersonal',
        component: () => import('@/views/user/personal.vue'),
        meta: {
          title: '个人资料'
        }
      },{
        path: '/admin/user/password',
        name: 'UserPassword',
        component: () => import('@/views/user/password.vue'),
        meta: {
          title: '修改密码'
        }
      },{
        path: '/admin/article',
        name: 'AdminArticle',
        component: () => import('@/views/article'),
        meta: {
          title: '文章列表'
        }
      },{
        path: '/admin/article/add',
        name: 'ArticleAdd',
        component: () => import('@/views/article/add.vue'),
        meta: {
          title: '发布文章'
        }
      },{
        path: '/admin/article/update',
        name: 'ArticleUpdate',
        component: () => import('@/views/article/update.vue'),
        meta: {
          title: '修改文章'
        }
      },
      {
        path: '/admin/comment',
        name: 'Comment',
        component: () => import('@/views/comment')
      },
      {
        path: '/admin/fans',
        name: 'Fans',
        component: () => import('@/views/fans')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
