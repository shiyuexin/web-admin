<template>
  <div class="login-page">
    <el-button @click="Login">登录</el-button>
  </div>
</template>

<script>
import axs from "../axios.service";
export default {
  components:{},
  data(){
    return{}
  },
  methods:{
    Login(){
     this.$router.push({ name: 'demo' })
    }
  },
  mounted(){
    axs.request(axs.baseUrl.GetTimestamp.url, null, axs.baseUrl.GetTimestamp.method).then(res => {
        if (res.status == 200 && res.data) { 
          console.log(res.data);
        } else {
            this.adProductionLineArr = [];
        }
    }).catch( () => {

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .login-page{
    p{
      color:@bg;
    }
  }
</style>
