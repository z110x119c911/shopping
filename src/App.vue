<template>
  <div id="app">
    <Nav/>
    <div class="pt-5">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import "/assets/scss/all";
@import "/assets/scss/nav";
@import "/assets/scss/header";

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>

<script>
import Nav from './components/nav'
export default {
  components:{
    Nav,
  },
  data(){
    return{

    }
  },
  created(){
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common['Authorization'] = myCookie;
  }
}
</script>