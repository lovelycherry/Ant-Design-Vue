<template>
  <div class="admin">
    <div class="header">XX企业员工系统</div>
    <div class="login">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            记住密码
          </a-checkbox>
          <a class="login-form-forgot" href=""> 忘记密码 </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            登录
          </a-button>
          <a href=""> 注册账户 </a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          //向后台发送请求，如果存在就登录
          this.$router.push("/PersonalCenter/PersonalFile");
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.admin {
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    height: 44px;
    width: 100%;
    margin-top: 100px;
    font-weight: bolder;
    font-size: 22px;
    clear: both;
    text-align: center;
  }
  .login {
    width: 28%;
    #components-form-demo-normal-login .login-form {
      max-width: 300px;
    }
    #components-form-demo-normal-login .ant-checkbox-wrapper-checked,
    .ant-checkbox-wrapper {
      float: left;
    }
    #components-form-demo-normal-login .login-form-forgot {
      float: right;
    }
    #components-form-demo-normal-login .login-form-button {
      width: 100%;
    }
  }
}
</style>