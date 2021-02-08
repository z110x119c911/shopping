<template>
  <div>
    <Header/>

    <About/>

    <Product/>

    <Banner/>

    <Contact/>

    <Footer/>
  </div>
</template>

<style scoped>

</style>


<script>
import Header from '../components/header.vue';
import About from '../components/about.vue';
import Banner from '../components/banner.vue';
import Product from '../components/product.vue';
import Footer from '../components/footer.vue';
import Contact from '../components/contact.vue';

export default {
  components:{
    Header,
    About,
    Banner,
    Product,
    Footer,
    Contact
  },
  name: 'index',
  data () {
    return {

    }
  },
}
</script>
