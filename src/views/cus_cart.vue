<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <h2 class="py-5">我的購物車</h2>
      <div class="row">
        <div class="col-12">
          <table class="table">
            <thead>
              <th>品名</th>
              <th>數量</th>
              <th colspan="2" class="text-right">單價</th>
            </thead>
            <tbody>
              <tr v-for="(item) in cartList.carts" :key="item.id">
                <td class="align-middle">
                  <button type="button" class="btn btn-outline-danger btn-sm">
                    <i class="far fa-trash-alt" @click="delCart(item.id)"></i>
                  </button>
                </td>
                <td class="align-middle">{{ item.product.tilte }}</td>
                <td class="align-middle">{{ item.qty }} {{item.product.unit}}</td>
                <td class="align-middle text-right">{{ item.total }} 元</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ cartList.total }} 元  </td>
              </tr>
              <tr v-if="cartList.final_total !== cartList.total">
                <td colspan="3" class="text-right text-success">折扣價 :
                  <span style="color:black">{{ message }}</span> </td>
                <td class="text-right text-success">
                    {{ cartList.final_total }} 元
                </td>
            </tr>
            </tfoot>
          </table>
        </div>

        <div class="col-12 py-5">
          <div class="row no-gutters justify-content-center">
            <div class="col-md-4 col-12">
              <p>有優惠券嗎？</p>
              <div class="input-group mb-3 input-group-sm">
                <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="couponCode.code">
                <div class="input-group-append h-100">
                  <button class="btn btn-outline-secondary" type="button" @click="addCoupon()">
                  套用優惠碼
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <form class="needs-validation" @submit.prevent="order" novalidate>
            <div class="form-row mx-0 justify-content-center">
              <div class="col-md-8 col-12 mb-3">
                <label for="">收件人姓名</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.user.name"
                  required
                />
                <div class="invalid-feedback">格式錯誤</div>
              </div>

              <div class="col-md-8 col-12 mb-3">
                <label for="">收件人電話</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.user.tel"
                  required
                />
                <div class="invalid-feedback">格式錯誤</div>
              </div>

              <div class="col-md-8 col-12 mb-3">
                <label for="">收件人信箱</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="form.user.email"
                  required
                />
                <div class="invalid-feedback">格式錯誤</div>
              </div>

              <div class="col-md-8 col-12 mb-3">
                <label for="">收件人地址</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.user.address"
                  required
                />
                <div class="invalid-feedback">格式錯誤</div>
              </div>

              <div class="col-md-8 col-12 mb-3">
                <label for="comment">留言</label>
                <textarea name="" id="comment" class="form-control" v-model="form.message" cols="30" rows="10"></textarea>
                <div class="invalid-feedback">格式錯誤</div>
              </div>

              <div class="col-md-8 col-12 mb-3 text-right">
                <button class="btn btn-content">送出訂單</button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer';
import Sidebar from "../components/cus_cart_sidebar";


export default {
  components: {
    Sidebar,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      cartList:{},
      couponCode:{
        code:'',
      },
      message:'',
      form:{
        user:{
          name:'',
          email:'',
          tel:'',
          address:'',
        },
        message:'',
      },
    }
  },
  methods: {
    getCartList(){
      const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
			this.$http.get(api).then((response) => {
        vm.cartList = response.data.data;
        console.log(response.data);
			})
    },
    addCoupon(){
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
			this.$http.post(api,{data: vm.couponCode}).then((response) => {
        console.log(response.data);
        vm.message = response.data.message;
        vm.getCartList();
			})
    },
    delCart(id){
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      this.$http.delete(api).then((response) => {
        console.log(response.data);
        vm.getCartList();
			})
    },
    order(){
      const vm = this;
      const order = vm.form
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      this.$http.post(api,{data:order}).then((response) => {
        if(response.data.success){
            vm.$router.push(`checkout/${response.data.orderId}`);
            console.log(response.data);
        } 
			})
    }
  },
  created() {
    this.getCartList();
  },
};
</script>