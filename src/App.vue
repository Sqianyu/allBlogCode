<template>
  <div id="app-blog" >
    <el-button type="primary" class="kai-test" v-if="isTest" @click="changeHide">点这里进入js练习</el-button>
    <el-button type="primary" class="kai-test" v-if="!isTest" @click="changeShow">回去</el-button>
    <root v-if="isTest"/>
  </div>
</template>

<script>
import root from './components/root'
export default {
  components: {
    root
  },
  data(){
    return {
      isTest: true
    }
  },
  methods: {
    changeHide(){
      this.isTest = false
      sessionStorage.setItem("data", 0)
    },
    changeShow(){
      this.isTest = true
      sessionStorage.setItem("data", 1)
    }
  },
  mounted(){
    let isShow = sessionStorage.getItem("data");
    this.isTest = Number(isShow)  ? true : false;
  }
}
</script>

<style lang="less">
#app-blog {
  position: relative;
  color: #2c3e50;
  .kai-test{
    position: absolute;
    top: 8px;
    right: 10px;
  }
}
</style>
