<template>
    <div>
			<loading :active.sync="isLoading"></loading>
			<table class="table mt-5">
				<thead>
					<tr>
						<th width="120">購買時間</th>
						<!-- <th width="250">E-mail</th> -->
						<th>購買款項</th>
						<th width="140">應付金額</th>
						<th width="100">是否付款</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item) in productList" :key="item.id">
						<td>
							{{item.create_at | date}}
						</td>
						<!-- <td>
							{{item.user.email}} 
						</td> -->
						<td>
							<ul class="list-unstyled" v-for="(product,i) in item.products" :key="i">
								<li>
									{{ product.product.tilte }}
								</li>
							</ul>
						</td>
						<td class="text-right">
							{{ item.total }}
						</td>
						<td>
							<span v-if="item.is_paid === true" class="text-success">已付款</span>
							<span v-else>尚未啟用</span>
						</td>
					</tr>
				</tbody>
			</table>
    </div>
</template>

<script>
export default {
	data(){
		return{
			isLoading:false,
			productList:{},
			productContent:{},
		}
	},
	methods: {
		getList(){
			const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders`;
			vm.isLoading = true;
			this.$http.get(api).then((response) => {
				vm.productList = response.data.orders;
				vm.productContent = response.data.orders;
				vm.isLoading = false;
				console.log(vm.productContent);
			})
		}
	},
	created() {
		this.getList();
	},
}
</script>