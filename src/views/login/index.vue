<template>
  <div class="login">
    <el-card>
      <div class="login-title">登陆</div>
      <el-form>
        <el-form-item>
          <el-input placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="submit">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>