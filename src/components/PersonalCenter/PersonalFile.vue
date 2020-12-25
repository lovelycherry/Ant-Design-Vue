<template>
  <div class="PersonalFile">
    <a-row class="header">
      <a-col :xl="2" :lg="2" :md="24" :sm="24" :xs="24">
        <div class="headerIcon">
          <img src="../../assets/timg.jpg" />
        </div>
      </a-col>
      <a-col
        :xl="18"
        :lg="18"
        :md="24"
        :sm="24"
        :xs="24"
        style="margin-bottom: 10px"
      >
        <div class="headerInfor">
          <div class="headerWel">
            {{ personaldata.time }}，{{ personaldata.name }}，要不要吃点什么?
          </div>
          <div class="headerLev">
            {{ personaldata.job }}
          </div>
        </div>
      </a-col>
      <a-col
        :xl="2"
        :lg="2"
        :md="24"
        :sm="24"
        :xs="24"
        style="margin-left: 20px"
      >
        <div class="headerSignIn">
          <p style="margin-bottom: 0">今日是否签到</p>
          <img src="../../assets/right.jpg" />
        </div>
      </a-col>
    </a-row>
    <a-row class="content">
      <a-col
        :xl="16"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
        style="margin-bottom: 10px; padding-right: 20px"
      >
        <a-card
          title="进行中的项目"
          class="projectTab"
          style="margin-bottom: 10px"
        >
          <a-card-grid
            style="width: 33.33%; text-align: center"
            :key="i"
            v-for="(item, i) in projects"
          >
            <div>
              <div class="cardTit">
                <a-avatar size="small" icon="user" />
                <p style="margin-left: 20px; font-weight: 600">
                  {{ item.name }}
                </p>
              </div>
              <div class="cardCont" style="color: rgba(0, 0, 0, 0.45)">
                {{ item.content }}
              </div>
              <div class="cardFoot">
                <span>{{ item.group }}</span
                ><span>{{ item.updatetime }}</span>
              </div>
            </div>
          </a-card-grid>
        </a-card>
        <a-card title="动态" class="projectTab">
          <a-list item-layout="horizontal" :data-source="event">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta>
                <a slot="title" href="https://www.antdv.com/">{{
                  item.name
                }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
                <p slot="description" style="margin-left: 10px">
                  在<a>{{ item.team }}</a
                  >{{ item.do }}<a>{{ item.task }}</a>
                </p>
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </a-card>
      </a-col>
      <a-col
        :xl="8"
        :lg="24"
        :md="24"
        :sm="24"
        :xs="24"
        style="margin-bottom: 10px"
        class="timeTab"
      >
        <div
          :style="{
            borderRadius: '4px',
          }"
          style="background-color: #fff"
        >
          <a-calendar
            :fullscreen="false"
            @panelChange="onPanelChange"
            style="margin-bottom: 10px"
          />
        </div>
        <a-card title="团队" class="projectTab">
          <a-col :span="12" v-for="(item, index) in teams" :key="index"
            ><a-avatar :src="item.imgSrc" /><span>{{ item.name }}</span></a-col
          >
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script>
let date = new Date();
var projects = [
  {
    name: "Alipay",
    content: "那时候我只会想自己想要什么，从不想自己拥有什",
    group: "科学搬砖组",
    updatetime: "3小时前",
  },
  {
    name: "Alipay",
    content: "那时候我只会想自己想要什么，从不想自己拥有什",
    group: "科学搬砖组",
    updatetime: "3小时前",
  },
  {
    name: "Alipay",
    content: "那时候我只会想自己想要什么，从不想自己拥有什",
    group: "科学搬砖组",
    updatetime: "3小时前",
  },
  {
    name: "Alipay",
    content: "那时候我只会想自己想要什么，从不想自己拥有什",
    group: "科学搬砖组",
    updatetime: "3小时前",
  },
  {
    name: "Alipay",
    content: "那时候我只会想自己想要什么，从不想自己拥有什",
    group: "科学搬砖组",
    updatetime: "3小时前",
  },
  {
    name: "Alipay",
    content: "那时候我只会想自己想要什么，从不想自己拥有什",
    group: "科学搬砖组",
    updatetime: "3小时前",
  },
  {
    name: "Alipay",
    content: "那时候我只会想自己想要什么，从不想自己拥有什",
    group: "科学搬砖组",
    updatetime: "3小时前",
  },
  {
    name: "Alipay",
    content: "那时候我只会想自己想要什么，从不想自己拥有什",
    group: "科学搬砖组",
    updatetime: "3小时前",
  },
  {
    name: "Alipay",
    content: "那时候我只会想自己想要什么，从不想自己拥有什",
    group: "科学搬砖组",
    updatetime: "3小时前",
  },
];
var personaldata = {
  name: "jack",
  time: "",
  job: "前端工程师 | 蚂蚁金服-计算服务事业群-REACT平台",
};
var teams = [
  {
    name: "前端团队",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",
  },
  {
    name: "后端团队",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",
  },
  {
    name: "设计团队",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",
  },
  {
    name: "测试团队",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",
  },
  {
    name: "需求部门",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",
  },
  {
    name: "产品部门",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png",
  },
];
var event = [
  { name: "刘丽", team: "需求部门", do: "新建", task: "xxx需求" },
  { name: "张三", team: "后端团队", do: "新建", task: "xxx项目" },
  { name: "林晓", team: "前端团队", do: "发布", task: "xxx项目" },
  { name: "杨洋", team: "产品团队", do: "新建", task: "xxx产品原型图" },
];

localStorage.setItem(projects, JSON.stringify(projects));
localStorage.setItem(personaldata, JSON.stringify(personaldata));
localStorage.setItem(teams, JSON.stringify(teams));
localStorage.setItem(event, JSON.stringify(event));

export default {
  data() {
    return {
      projects,
      personaldata,
      teams,
      event,
    };
  },
  methods: {
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
  created() {
    //从本地取值

    this.projects = JSON.parse(localStorage.getItem(projects));
    this.personaldata = JSON.parse(localStorage.getItem(personaldata));
    this.teams = JSON.parse(localStorage.getItem(teams));
    this.event = JSON.parse(localStorage.getItem(event));
    //判断时间
    if (date.getHours() >= 0 && date.getHours() < 12) {
      this.personaldata.time = "上午好";
    } else if (date.getHours() >= 12 && date.getHours() < 18) {
      this.personaldata.time = "下午好";
    } else {
      this.personaldata.time = "晚上好";
    }
  },
};
</script>
<style scoped lang="less">
.header {
  margin-bottom: 20px;
  background-color: #fff;
  padding: 10px;
  .headerIcon {
    width: 72px;
    img {
      width: 72px;
      height: 72px;
      border-radius: 36px;
    }
  }
  .headerIcon,
  .headerInfor {
    float: left;
  }
  .headerInfor {
    margin-left: 20px;
  }
  .headerSignIn {
    img {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      margin: 0 auto;
    }
  }
  .headerWel {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.85);
    margin-bottom: 16px;
  }
  .headerLev {
    color: rgba(0, 0, 0, 0.45);
  }
}
.content {
  .cardTit {
    display: flex;
  }
  .cardFoot {
    display: flex;
    justify-content: space-between;
  }
  .projectTab .ant-col {
    margin-bottom: 8px;
    .ant-avatar {
      margin-right: 10px;
    }
  }
  .ant-list-item-meta-title,
  .ant-list-item-meta-description {
    display: inline-block;
  }
}
</style>