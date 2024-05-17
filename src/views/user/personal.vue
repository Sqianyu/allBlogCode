<template>
  <div>
    <img :src="imgPath" alt="" class="small-img">
    <el-upload
      action="http://localhost:3000/upload/img"
      name="myfile"
      :headers="uploadHeader"
      :show-file-list="false"
      :on-success="onSuccess">
      <el-button>上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  data(){
    return {
      uploadHeader: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiX2lkIjoiNjYzYTE4ZWUwY2VlNDQzZTA4NGE4ZjQ5IiwiaWF0IjoxNzE1NjU0NDk2LCJleHAiOjE3MTYyNTkyOTZ9.ZRr8txmkls6y_vedFYpTX9Xosussps9pBJfZMgS3zjw"
      },
      imgPath: ''
    }
  },
  methods: {
    onSuccess(res) {
      this.imgPath = 'http://localhost:3000/' + res.data.path.split('public/')[1]
    }
  }
}
</script>

<style scoped>
.small-img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}
</style>