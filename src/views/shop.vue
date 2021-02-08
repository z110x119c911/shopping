<template>
  <div>
    <div class="jumbotron jumbotron-fluid bg-dark">
      <div class="container text-white">
        <h1 class="article pb-2 my-5 title_border">Photography Product</h1>
        <p></p>
        <p class="lead">若有合作需求請洽 james840525@gmail.com</p>
      </div>
    </div>
    <div class="row py-5 no-gutters justify-content-center">
      <div class="col-md-10">
        <div class="row no-gutters">
          <div class="col-md-4 px-2 pt-4" v-for="(item) in products" :key="item.id">
            <div class="card h-100">
              <img :src="item.imageUrl" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ item.tilte }}</h5>
                <p class="card-text">{{ item.content }}</p>
                <del>${{ item.origin_price }}</del>
                <span class="h4"> ${{ item.price }}</span>
                <div class="text-right">
                  <button class="btn btn-content" @click="openModal(item)">詳細資訊</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="openModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ tempProducts.tilte }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {{ tempProducts.description }}
          </div>
          <div class="modal-footer">
            <button type="button" @click="orderProduct(tempProducts.id)" class="btn btn-content" data-dismiss="modal">我要購買</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Footer from '../components/footer';
import $ from 'jquery';
export default {
  components:{
    Footer,
  },
  data() {
    return {
      products:[],
      tempProducts:[],
    }
  },
  methods: {
    getProduct(){
      const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`;
			this.$http.get(api).then((response) => {
        vm.products = response.data.products;
			})
    },
    openModal(item){
      this.tempProducts = item;
      $('#openModal').modal('show');
    },
    orderProduct(id,qty=1){
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      }
			vm.isLoading = true;
			this.$http.post(api,{data:cart}).then((response) => {
				vm.isLoading = false;
			})
    }
  },
  created() {
    this.getProduct();
  },
}
</script>