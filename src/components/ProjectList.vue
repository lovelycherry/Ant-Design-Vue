<template>
  <div class="ProjectList">
    <!-- 查询 -->
    <div class="searchBox">
      <a-form
        :form="form"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSubmit"
      >
        <div class="seachForm">
          <div style="width: 80%; display: flex">
            <a-form-item class="seachFormItem" label="规则编号">
              <a-input v-decorator="['ruleNumber']" placeholder="请输入" />
            </a-form-item>
            <a-form-item class="seachFormItem" label="状态">
              <a-select v-decorator="['state']" placeholder="请选择">
                <a-select-option value="运行中"> 运行中 </a-select-option>
                <a-select-option value="异常"> 异常 </a-select-option>
              </a-select>
            </a-form-item>
          </div>
          <div style="display: flex">
            <a-form-item
              class="seachFormButton"
              :wrapper-col="{ span: 12, offset: 5 }"
            >
              <a-button type="primary" html-type="submit"> 查询 </a-button>
            </a-form-item>
            <a-form-item
              class="seachFormResetButton"
              :wrapper-col="{ span: 12, offset: 5 }"
            >
              <a-button type="primary" @click="reset"> 重置 </a-button>
            </a-form-item>
          </div>
        </div>
        <div class="seachForm1">
          <a-form-item class="seachFormItem" label="时间区间">
            <a-input v-decorator="['updateTime']" placeholder="请输入" />
          </a-form-item>
        </div>
      </a-form>
    </div>
    <!-- 新增/删除 -->
    <div class="topButton">
      <a-button type="primary" @click="showModal" class="addButton">
        +新增
      </a-button>
      <a-button
        type="primary"
        @click="deleteAll(selectedRowKeys)"
        class="deleteButton"
      >
        -删除
      </a-button>
    </div>
    <span style="margin-left: 8px; display: flex">
      <template>
        {{ `已选 ${selectedRowKeys.length} 项` }}
      </template>
    </span>
    <!-- 新增弹出框 -->
    <a-modal v-model="visible" title="添加" @ok="handleOk">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-form-item label="规则编号">
          <a-input
            v-decorator="[
              'ruleNumber',
              {
                rules: [{ required: true, message: 'Please input your note!' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="状态">
          <a-input
            v-decorator="[
              'state',
              {
                rules: [
                  { required: true, message: 'Please input your state!' },
                ],
              },
            ]"
          />
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- 中间三列 -->
    <a-table
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :columns="columns"
      :data-source="data"
      bordered
    >
      <template
        v-for="col in ['ruleNumber', 'state', 'updateTime']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="(e) => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <!-- 操作 -->
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="() => save(record.key)">Save</a>
            <a-popconfirm
              title="Sure to cancel?"
              @confirm="() => cancel(record.key)"
            >
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)"
              >Edit</a
            >
          </span>
          <a-popconfirm
            v-if="data.length"
            title="Sure to delete?"
            @confirm="() => onDelete(record.key)"
          >
            <a href="javascript:;">Delete</a>
          </a-popconfirm>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "规则编号",
    dataIndex: "ruleNumber",
    width: "25%",
    scopedSlots: { customRender: "ruleNumber" },
  },
  {
    title: "状态",
    dataIndex: "state",
    width: "15%",
    scopedSlots: { customRender: "state" },
  },
  {
    title: "更新时间",
    dataIndex: "updateTime",
    width: "40%",
    scopedSlots: { customRender: "updateTime" },
  },
  {
    title: "操作",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" },
  },
];
const data = [];
const state = ["运行中", "异常"];
const updateTime = ["2020/10/10 上午8:00:00", "2020/10/8 上午8:00:00"];
let localData = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i.toString(),
    ruleNumber: `abc ${i}`,
    state: state[i % 2],
    updateTime: updateTime[i % 2],
  });
}
export default {
  data() {
    this.cacheData = data.map((item) => ({ ...item }));
    return {
      data,
      columns,
      editingKey: "",
      selectedRowKeys: [],
      visible: false,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
    };
  },
  created() {
    // `this` 指向 vm 实例

    this.data = JSON.parse(localStorage.getItem(localData));

    console.log("created");
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    //查询
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("查询得到: ", values);
          let data = [...this.data];
          if (values.ruleNumber) {
            data = data.filter((item) =>
              item.ruleNumber.includes(values.ruleNumber)
            );
          }
          if (values.state) {
            data = data.filter((item) => item.state.includes(values.state));
          }
          if (values.updateTime) {
            data = data.filter((item) =>
              item.updateTime.includes(values.updateTime)
            );
          }
          this.data = data;
        }
      });
    },
    //重置
    reset() {
      this.form.resetFields();
    },
    // 新增
    handleOk(e) {
      console.log(e);
      this.visible = false;
      e.preventDefault();
      const addItem = {};
      let date = new Date();
      this.form.validateFields((err, values) => {
        if (!err) {
          addItem.ruleNumber = values.ruleNumber;
          addItem.state = values.state;
          addItem.updateTime = date.toLocaleString();
          addItem.key = this.data.length.toString();
          this.data.push(addItem);
          localStorage.setItem(localData, JSON.stringify(this.data));
        }
      });
    },
    //删除
    onDelete(key) {
      const data = [...this.data];
      this.data = data.filter((item) => item.key !== key);
      localStorage.setItem(localData, JSON.stringify(this.data));
    },
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
    deleteAll(selectedRowKeys) {
      let data = [...this.data];
      for (let i = 0; i < selectedRowKeys.length; ++i) {
        data = data.filter((item) => item.key !== selectedRowKeys[i]);
      }
      this.data = data;
      this.selectedRowKeys = [];
      console.log(this.data);
      localStorage.setItem(localData, JSON.stringify(this.data));
    },
    //编辑
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.filter((item) => key === item.key)[0];
      const targetCache = newCacheData.filter((item) => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        localStorage.setItem(localData, JSON.stringify(this.data));
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = "";
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      this.editingKey = "";
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter((item) => key === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    },
  },
};
</script>
<style scoped lang="less">
.ProjectList {
  background-color: #fff;
  padding: 10px;
}
.editable-row-operations a {
  margin-right: 8px;
}
.topButton {
  display: flex;
  margin-bottom: 10px;
}
.addButton {
  margin-right: 10px;
}
.seachForm,
.seachForm1 {
  display: flex;
}
.seachForm1 {
  width: 80%;
}
.seachFormItem {
  width: 50%;
}
.seachFormButton {
  margin-right: 30px;
}
</style>