<template>
  <div>
		<loading :active.sync="isLoading"></loading>
    <div class="my-5 row justify-content-center">
			<form class="col-md-6" @submit.prevent="payOrder">
				<table class="table">
					<thead>
						<th>品名</th>
						<th>數量</th>
						<th>單價</th>
					</thead>
					<tbody>
						<tr v-for="(item) in orderList.products" :key="item.id">
							<td class="align-middle">{{ item.product.tilte }}</td>
							<td class="align-middle">{{ item.qty }} {{ item.product.unit }}</td>
							<td class="align-middle text-right">{{ item.product.price }}</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td colspan="2" class="text-right">總計</td>
							<td class="text-right">{{ orderList.total }}</td>
						</tr>
					</tfoot>
				</table>

				<table class="table">
					<tbody>
						<tr>
							<th width="100">Email</th>
							<td>{{ orderList.user.email }}</td>
						</tr>
						<tr>
							<th>姓名</th>
							<td>{{ orderList.user.name }}</td>
						</tr>
						<tr>
							<th>收件人電話</th>
							<td>{{ orderList.user.tel }}</td>
						</tr>
						<tr>
							<th>收件人地址</th>
							<td>{{ orderList.user.address }}</td>
						</tr>
						<tr>
							<th>付款狀態</th>
							<td>
								<span v-if="orderList.is_paid === false">尚未付款</span>
								<span v-else class="text-success">付款完成</span>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="text-right">
					<button class="btn btn-danger" @click="payOrder()">確認付款去</button>
				</div>
			</form>
		</div>
		<Footer/>
  </div>
</template>

<script>
import Footer from '../components/footer';

export default {
	components:{
    Footer,
  },
  data() {
		return {
			isLoading:false,
			orderId:'',
			orderList:{
				user:{}
			},
		}
	},
	methods: {
		getOrder(){
			const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${vm.orderId}`;
			vm.isLoading = true;
			this.$http.get(api).then((response) => {
				vm.isLoading = false;
				vm.orderList = response.data.order;
				console.log(vm.orderList);
			});
		},
		payOrder(){
			const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${vm.orderId}`;
			vm.isLoading = true;
			this.$http.post(api).then((response) => {
				vm.isLoading = false;
				vm.$router.push('/');
				vm.getOrder();
				console.log(response.data);
			});
		}
	},
	created() {
		this.orderId = this.$route.params.orderId;
		console.log(this.orderId);
		this.getOrder();
	},
}
</script>