<template>
  <div class="blog-home">
    <navigation/>
    <div class="blog-layout">
      11
    </div>
  </div>
</template>

<script>
import '../assets/style/all.css';
import navigation from './header/navigation'
export default {
  name: 'root',
  components: {
    navigation
  },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="less">
.blog-home {
  .blog-layout {
    width: 100%;
    height: 888px;
    background: #eee;
  }
}

</style>

