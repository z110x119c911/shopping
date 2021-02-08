<template>
  <div>
		<loading :active.sync="isLoading"></loading>
    <div class="text-right">
      <button class="btn btn-content mt-4" @click="addModal()">建立新的優惠券</button>
    </div>
    
    <table class="table mt-4">
      <thead>
      	<tr>
					<th>名稱</th>
					<th width="120">折扣百分比</th>
					<th width="160">到期日</th>
					<th width="160">是否啟用</th>
					<th width="100">編輯</th>
    		</tr>
      </thead>
			<tbody>
				<tr v-for="(item) in coupon" :key="item.id">
					<td>
						{{ item.title }}
					</td>
					<td>
						{{ item.percent }}
					</td>
					<td>
						{{ item.due_date | date }}
					</td>
					<td>
						<span class="text-success" v-if="item.is_enabled === 1">啟用</span>
						<span v-else>未啟用</span>
					</td>
					<td>
						<div class="btn-group" role="group">
							<button class="btn btn-outline-content btn-sm w-100 p-1" @click="editModal(item)">編輯</button>
							<button class="btn btn-outline-content btn-sm w-100 p-1" @click="deleModal(item)">刪除</button>
						</div>
					</td>
				</tr>
			</tbody>
    </table>


		<!-- 新增優惠券 -->
		<div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content border-0">
					<div class="modal-header bg-content text-white">
						<h5 class="modal-title" id="exampleModalLabel">
						<span>新增優惠券</span>
						</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="">標題</label>
							<input type="text" class="form-control" v-model="tempProduct.title">
						</div>
						<div class="form-group">
							<label for="">優惠碼</label>
							<input type="text" class="form-control" v-model="tempProduct.code">
						</div>
						<div class="form-group">
							<label for="due_date">到期日</label>
							<input type="date" id="due_date" class="form-control" v-model="due_date">
						</div>
						<div class="form-group">
							<label for="">折扣百分比</label>
							<input type="text" class="form-control" v-model="tempProduct.percent">
						</div>
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="customCheck1" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0">
							<label class="custom-control-label" for="customCheck1">是否啟用</label>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
						<button type="button" class="btn btn-content" @click="addCoupon()">新增優惠券</button>
					</div>
				</div>
			</div>
		</div>
		<!-- 編輯優惠券 -->
		<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content border-0">
					<div class="modal-header bg-dark text-white">
						<h5 class="modal-title" id="exampleModalLabel">
						<span>編輯優惠券</span>
						</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label for="">標題</label>
							<input type="text" class="form-control" v-model="tempProduct.title">
						</div>
						<div class="form-group">
							<label for="">優惠碼</label>
							<input type="text" class="form-control" v-model="tempProduct.code">
						</div>
						<div class="form-group">
							<label for="">到期日</label>
							<input type="date" class="form-control" v-model="due_date">
						</div>
						<div class="form-group">
							<label for="">折扣百分比</label>
							<input type="text" class="form-control" v-model="tempProduct.percent">
						</div>
						<div class="custom-control custom-checkbox">
							<input type="checkbox" class="custom-control-input" id="customCheck2" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0">
							<label class="custom-control-label" for="customCheck2">是否啟用</label>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
						<button type="button" class="btn btn-primary" @click="editCoupon()">更新優惠券</button>
					</div>
				</div>
			</div>
		</div>
    <!-- 刪除優惠券 -->
		<div class="modal fade" id="deleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content border-0">
					<div class="modal-header bg-danger text-white">
						<h5 class="modal-title" id="exampleModalLabel">
						<span>刪除產品</span>
						</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 優惠券(刪除後將無法恢復)。
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
						<button type="button" class="btn btn-danger" @click="delCoupon()">確認刪除</button>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
			coupon:[],
			tempProduct:{},
			due_date:'',
    }
	},
	watch:{
		due_date(){
			const vm = this;
			let timestamp = Math.floor(new Date(vm.due_date) / 1000);
			vm.tempProduct.due_date = timestamp;
		}
	},
	methods: {
		addModal(){
			const vm = this;
			vm.tempProduct = {};
			vm.due_date = '';
			$('#addModal').modal('show');
		},
		editModal(item){
			const vm = this;
			vm.tempProduct = Object.assign({},item);
			let NewDate = vm.tempProduct.due_date;
			let date = new Date(NewDate * 1000).toISOString().split('T');
			vm.due_date = date[0];
			$('#editModal').modal('show');
			
		},
		deleModal(item){
			const vm = this;
			vm.tempProduct = Object.assign({},item);
			$('#deleModal').modal('show');
		},
		getCoupon(){
			const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons`;
			vm.isLoading = true;
			this.$http.get(api).then((response) => {
				vm.isLoading = false;
				vm.coupon = response.data.coupons;
				console.log(response.data);
			})
		},
		addCoupon(){
			const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
			vm.isLoading = true;
			this.$http.post(api,{data:vm.tempProduct}).then((response) => {
				if(response.data.success){
					console.log(response.data);
					vm.isLoading = false;
					vm.getCoupon();
					$('#addModal').modal('hide');
				}else{
					alert(response.data.message);
					vm.isLoading = false;
					vm.getCoupon();
					$('#addModal').modal('hide');
				}
			})
		},
		editCoupon(){
			const vm = this;
			const id = vm.tempProduct.id
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`;
			vm.isLoading = true;
			this.$http.put(api,{data:vm.tempProduct}).then((response) => {
				if(response.data.success){
					console.log(response.data);
					vm.isLoading = false;
					vm.getCoupon();
					$('#editModal').modal('hide');
				}else{
					alert(response.data.message);
					vm.isLoading = false;
					vm.getCoupon();
					$('#editModal').modal('hide');
				}
			})
		},
		delCoupon(){
			const vm = this;
			vm.isLoading = true;
			const id = vm.tempProduct.id;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`;
			this.$http.delete(api).then((response) => {
				if(response.data.success){
					console.log(response.data);
					vm.isLoading = false;
					vm.getCoupon();
					$('#deleModal').modal('hide');
				}else{
					alert(response.data.message);
					vm.isLoading = false;
					vm.getCoupon();
					$('#deleModal').modal('hide');
				}
			})
		}
	},
	created() {
		this.getCoupon();
	},
}
</script>