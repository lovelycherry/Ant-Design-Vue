import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/AdminPage/Admin'
import PersonalFile from '@/components/PersonalCenter/PersonalFile'
import HelloWorld from '@/components/HelloWorld'
import ProjectList from '@/components/ProjectList'
import Option2 from '@/components/Option2'
import LifeCenter from '@/components/Community/LifeCenter'
import LearnCenter from '@/components/Community/LearnCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/ProjectList',
          component: ProjectList,
          meta: {
            title: '项目列表',
            breadcrumb:[
              {
                name:'/项目列表'
              }
            ]
          },
        },
        {
          path: '/Option2',
          component: Option2,
          meta: {
            title: '问题中心',
            breadcrumb:[
              {
                name:'/问题中心'
              }
            ]
          },
        },
        {
          path: '/PersonalCenter/PersonalFile',
          name: 'PersonalFile',
          component: PersonalFile,
          meta: {
            title: '个人资料',
            breadcrumb:[
              {
                name:'/个人中心/个人资料'
              }
            ]
          },
        },
        {
          path: '/Community/LifeCenter',
          name: 'LifeCenter',
          component: LifeCenter,
          meta: {
            title: '生活中心',
            breadcrumb:[
              {
                name:'/社区/生活中心'
              }
            ]
          },
        },
        {
          path: '/Community/LearnCenter',
          name: 'LearnCenter',
          component: LearnCenter,
          meta: {
            title: '学习中心',
            breadcrumb:[
              {
                name:'/社区/学习中心'
              }
            ]
          },
        }
      ]
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
