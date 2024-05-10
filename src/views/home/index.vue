<template>
  <el-container>
    <el-header>
      <div class="sys-title">jianshu</div>
      <div class="header-right">
        <span>首页</span>
        <span>头像</span>
        <span>admin</span>
        <span>退出</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu 
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border: 0;"
        router>
          <el-submenu index="/admin/user">
            <template #title>
              <i class="el-icon-s-custom"></i>
              <span>个人中心</span>
            </template>
            <el-menu-item index="/admin/user/personal">个人资料</el-menu-item>
            <el-menu-item index="/admin/user/password">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="/admin/article">
            <template #title>
              <i class="el-icon-reading"></i>
              <span>文章管理</span>
            </template>
            <el-menu-item index="/admin/article/add">发布文章</el-menu-item>
            <el-menu-item index="/admin/article">文章列表</el-menu-item>
          </el-submenu>
          <el-menu-item  index="/admin/comment">
            <template #title>
              <i class="el-icon-chat-line-square"></i>
              <span>评论管理</span>
            </template>
          </el-menu-item>
          <el-menu-item  index="/admin/fans">
            <template #title>
              <i class="el-icon-thumb"></i>
              <span>粉丝管理</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

}
</script>

<style lang="less">
.el-container {
  height: 100%;
  .el-header {
    background-color: #545c64;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-link {
      color: #ccc;
      margin: 0 10px;
      &:hover {
        color: #fff;
      }
    }
  }
  .el-aside {
    background-color: #545c64;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(225, 208, 75, 0.2);
      background: rgba(225, 208, 75, 0.8);
    }
  }
}
</style>