<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <h2 class="py-5">我的購物車</h2>
      <div class="row no-gutters">
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
                    {{ cartList.final_total | MathRound}} 元
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
                  <button class="btn btn-outline-secondary" type="button" @keyup.enter="addCoupon()" @click="addCoupon()">
                  套用優惠碼
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row no-gutters justify-content-center py-4">
        <ValidationObserver class="col-md-8 col-12" v-slot="{ invalid }">
          <form @submit.prevent="order">
            <ValidationProvider rules="required" v-slot="{ errors , classes }">
              <div class="form-group">
                <label>收件人姓名</label>
                <input type="text" class="form-control" :class="classes" name="姓名"
                v-model="form.user.name" placeholder="輸入姓名">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors , classes }">
              <div class="form-group">
                <label>收件人電話</label>
                <input type="tel" name="聯絡電話" :class="classes" class="form-control" 
                v-model="form.user.tel" placeholder="請輸入電話">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors , classes }">
              <div class="form-group">
                <label>地址</label>
                <input type="text" class="form-control" :class="classes" name="地址"
                v-model="form.user.address">
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider rules="required" v-slot="{ errors , classes }">
              <div class="form-group">
                <label>留言</label>
                <textarea name="" v-model="form.message" id="內容" class="form-control"
                :class="classes" cols="30" rows="10"></textarea>
                <span class="text-danger">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <div class="text-right">
              <button class="btn btn-content" :disabled="invalid">送出訂單</button>
            </div>
          </form>
        </ValidationObserver>
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
      vm.isLoading = true;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
			this.$http.get(api).then((response) => {
        vm.cartList = response.data.data;
        vm.isLoading = false;
			})
    },
    addCoupon(){
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`;
			this.$http.post(api,{data: vm.couponCode}).then((response) => {
        if(response.data.success){
          vm.isLoading = false;
          vm.message = response.data.message;
          vm.getCartList();
        }else{
          vm.isLoading = false;
          alert(response.data.message);
          vm.getCartList();
        }
			})
    },
    delCart(id){
      const vm = this;
      vm.isLoading = true;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`;
      this.$http.delete(api).then((response) => {
        vm.isLoading = false;
        vm.getCartList();
			})
    },
    order(){
      const vm = this;
      vm.isLoading = true;
      const order = vm.form
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      this.$http.post(api,{data:order}).then((response) => {
        if(response.data.success){
          vm.isLoading = false;
          vm.$router.push(`checkout/${response.data.orderId}`);
        } 
			})
    }
  },
  created() {
    this.getCartList();
  },
};
</script>