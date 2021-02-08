<template>
  <div>
    <div class="jumbotron jumbotron-fluid bg-dark">
      <div class="container text-white">
        <h1 class="article pb-2 my-5 title_border">Photography portfolio</h1>
        <p></p>
        <p class="lead">若有合作需求請洽 james840525@gmail.com</p>
      </div>
    </div>
    <div class="container">
      <!-- <ul class="list-unstyled d-flex">
        <li><a href="">人像</a></li>
        <li><a href="#business">商業</a></li>
        <li><a href="">食品</a></li>
      </ul> -->
      <h3 class="pt-5 portfolio_border">人像攝影</h3>
      <div class="row">
        <div class="col-md-4 px-1 py-2" v-for="(item) in img_person_List" :key="item.id">
          <img class="img-fluid" :src="item.img">
        </div>
      </div>
       <h3 class="pt-5 portfolio_border" id="business">商業攝影</h3>
      <div class="row">
        <div class="col-md-4 px-1 py-2" v-for="(item) in img_business_List" :key="item.id">
          <img class="img-fluid" :src="item.img">
        </div>
      </div>
       <h3 class="pt-5 portfolio_border">食品攝影</h3>
      <div class="row">
        <div class="col-md-4 px-1 py-2" v-for="(item) in img_food_List" :key="item.id">
          <img class="img-fluid" :src="item.img">
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style>
  .portfolio_border{
    border-bottom: 1.5px solid #7e6b5a;
  }
</style>

<script>
import Footer from '../components/footer';

export default {
  components:{
    Footer,
  },
  data(){
    return{
      img_person_List:[
        {img:require('../assets/img/portfolio/person-1.jpg')},
        {img:require('../assets/img/portfolio/person-2.jpg')},
        {img:require('../assets/img/portfolio/person-3.jpg')},
        {img:require('../assets/img/portfolio/person-4.jpg')},
        {img:require('../assets/img/portfolio/person-5.jpg')},
        {img:require('../assets/img/portfolio/person-6.jpg')}
      ],
      img_business_List:[
        {img:require('../assets/img/carousel2.jpg')},
        {img:require('../assets/img/carousel2.jpg')},
        {img:require('../assets/img/carousel2.jpg')},
        {img:require('../assets/img/carousel2.jpg')},
        {img:require('../assets/img/carousel2.jpg')}
      ],
      img_food_List:[
        {img:require('../assets/img/portfolio/food-1.jpg')},
        {img:require('../assets/img/portfolio/food-2.jpg')},
        {img:require('../assets/img/portfolio/food-3.jpg')},
        {img:require('../assets/img/portfolio/food-4.jpg')},
        {img:require('../assets/img/portfolio/food-5.jpg')}
      ]
    }
  }
}
</script>