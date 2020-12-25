// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    listData : [
      {
        index: 0,
        title: "拜登当选美国第46任总统",
        avatar: "https://inews.gtimg.com/newsapp_bt/0/12743549560/1000",
        src: "https://inews.gtimg.com/newsapp_bt/0/12743549560/1000",
        description:
          "小约瑟夫·罗比内特·拜登(Joseph Robinette Biden Jr.)周六当选美国第46任总统，他承诺恢复正常的政治，以国家团结的精神来应对严重的公共卫生和经济危机。",
        content:
          "拜登的胜选等于数百万选民对特朗普的正式否定，他们被特朗普制造不和的行为和混乱的政府搞得疲惫不堪。由女性、有色人种、老年和年轻选民，以及一小部分对特朗普不满的共和党人组成的不大可能的联盟，让拜登赢得了胜利。特朗普是逾25年来的第一位竞选连任失败的现任总统。",
        actions: [
          { type: "star-o", text: 156, num: 0 },
          { type: "like-o", text: 156, num: 1 },
          { type: "message", text: 2, num: 2 },
        ],
      },
      {
        index: 1,
        title: "马拉多纳去世",
        avatar:
          "https://p7.itc.cn/q_70/images03/20201127/b77b59ca6fdb4505a7c34241f42dbf28.jpeg",
        src:
          "https://p7.itc.cn/q_70/images03/20201127/b77b59ca6fdb4505a7c34241f42dbf28.jpeg",
        description: "马拉多纳的离去，让所有热爱足球的人无比悲痛",
        content:
          "阿根廷传奇球星迭戈·马拉多纳当地时间11月25日突发心梗去世，享年60岁。从阿根廷国内到世界各地，从拉美足坛、国际体坛到整个国际社会，人们纷纷挥别、悼念这位足球世界标志性人物。迭戈，永远的传奇。",
        actions: [
          { type: "star-o", text: 156, num: 0 },
          { type: "like-o", text: 156, num: 1 },
          { type: "message", text: 2, num: 2 },
        ],
      },
      {
        index: 2,
        title: "马拉多纳去世",
        avatar:
          "https://p7.itc.cn/q_70/images03/20201127/b77b59ca6fdb4505a7c34241f42dbf28.jpeg",
        src:
          "https://p7.itc.cn/q_70/images03/20201127/b77b59ca6fdb4505a7c34241f42dbf28.jpeg",
        description: "马拉多纳的离去，让所有热爱足球的人无比悲痛",
        content:
          "阿根廷传奇球星迭戈·马拉多纳当地时间11月25日突发心梗去世，享年60岁。从阿根廷国内到世界各地，从拉美足坛、国际体坛到整个国际社会，人们纷纷挥别、悼念这位足球世界标志性人物。迭戈，永远的传奇。",
        actions: [
          { type: "star-o", text: 156, num: 0 },
          { type: "like-o", text: 156, num: 1 },
          { type: "message", text: 2, num: 2 },
        ],
      },
      {
        index: 3,
        title: "马拉多纳去世",
        avatar:
          "https://p7.itc.cn/q_70/images03/20201127/b77b59ca6fdb4505a7c34241f42dbf28.jpeg",
        src:
          "https://p7.itc.cn/q_70/images03/20201127/b77b59ca6fdb4505a7c34241f42dbf28.jpeg",
        description: "马拉多纳的离去，让所有热爱足球的人无比悲痛",
        content:
          "阿根廷传奇球星迭戈·马拉多纳当地时间11月25日突发心梗去世，享年60岁。从阿根廷国内到世界各地，从拉美足坛、国际体坛到整个国际社会，人们纷纷挥别、悼念这位足球世界标志性人物。迭戈，永远的传奇。",
        actions: [
          { type: "star-o", text: 156, num: 0 },
          { type: "like-o", text: 156, num: 1 },
          { type: "message", text: 2, num: 2 },
        ],
      },
    ],
    commentData : [
      [
        {
          ID: "小苹果1",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果2",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果3",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果4",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
      ],
      [
        {
          ID: "小苹果5",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果6",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果7",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果8",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
      ],
      [
        {
          ID: "小苹果9",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果10",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果11",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果12",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
      ],
      [
        {
          ID: "小苹果13",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果14",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果15",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
        {
          ID: "小苹果16",
          comment:
            "支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持支持",
        },
      ],
    ]
  },
  mutations: {
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: store
})
