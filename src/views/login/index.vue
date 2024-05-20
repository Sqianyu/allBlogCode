<template>
  <div class="content">
    <div class="content-box">
      <vue-particles class="login-bg" color="#f4f4f4" :particleOpacity="0.7" :particlesNumber="100" shapeType="circle"
        :particleSize="4" linesColor="#f4f4f4" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4"
        :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" />
      <div class="content-login">
        <div class="content-login-info">
          <div class="content-title">登录</div>
          <el-form ref="loginForm">
            <el-form-item style="margin:25px 0px">
              <el-input v-model="username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="password" type="password" name="密码" label="密码" placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @keyup.enter.native="loginBtn" @click="loginBtn">登录</el-button>
            </el-form-item>
            <div class="content-bottom">
              <div @click="topassword">忘记密码？</div>
              <div @click="toregister">注册</div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loginData: []
    }
  },
  methods: {
    loginBtn() {
      this.$refs.loginForm.validate().then(() => {
        console.log(JSON.parse(localStorage.getItem('userinfo')))

        if (JSON.parse(localStorage.getItem('userinfo')) == null) {
          this.$toast.fail('还未注册！')
        } else {
          this.loginData = JSON.parse(localStorage.getItem('userinfo'))
          let lis = Array.prototype.slice.call(this.loginData);
          if (lis && lis.length > 0) {
            lis.forEach((item) => {
              if (this.username == item.name && this.password == item.password) {
                this.$toast.success('登录成功!')
                this.$router.push({ name: 'Home' })
              }
              if (this.username == item.name && this.password !== item.password) {
                this.$toast.fail('用户密码不对!')
              }
              if (this.username !== item.name && this.password == item.password) {
                this.$toast.fail('用户名字不对!')
              }
            })
          }
        }
      })
    },
    toregister() {
      this.$router.push({ name: 'register' })
    },
    topassword() {
      this.$toast.fail('功能暂未开放!')
    }
  }
}
</script>
<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/logo.png');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content-title {
  text-align: center;
  font-size: 25px;
  color: #fff
}

.content-login {
  position: fixed;
  top: calc(~"50% - 150px");
  left: calc(~"50% - 200px");
  width: 400px;
  height: 300px;
  background: rgba(223, 219, 219, 0.5);
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.8);
}

.content-login-info {
  width: 90%;
}

.content-bottom {
  display: flex;
  justify-content: space-between;
  color: blue;
  font-size: 14px
}

.content-bottom :hover {
  cursor: pointer;
}
</style>
