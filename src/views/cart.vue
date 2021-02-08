<template>
	<div>
		<loading :active.sync="isLoading"></loading>
		
		<div class="text-right">
			<button class="btn btn-primary mt-5" @click="openModal(true)">建立新的產品</button>
		</div>
		<table class="table mt-4">
			<thead>
				<tr>
					<th width="120">分類</th>
					<th>產品名稱</th>
					<th width="120">原價</th>
					<th width="120">售價</th>
					<th width="100">是否啟用</th>
					<th width="80">編輯</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item) in products" :key="item.id">
					<td> {{item.category}}</td>
					<td>{{item.tilte}}</td>
					<td class="text-right">
						{{ item.origin_price }}
					</td>
					<td class="text-right">
						{{ item.price}}
					</td>
					<td>
						<span v-if="item.is_enabled" class="text-success">啟用</span>
						<span v-else>未啟用</span>
					</td>
					<td>
						<div class="btn-group" role="group">
							<button class="btn btn-outline-content btn-sm w-100 p-1" @click="openModal(false,item)">編輯</button>
							<button class="btn btn-outline-content btn-sm w-100 p-1" @click="openDeleteModal(item)">刪除</button>
						</div>
					</td>
				</tr>
			</tbody>
		</table>

<!-- modal -->
		<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg" role="document">
				<div class="modal-content border-0">
					<div class="modal-header bg-dark text-white">
						<h5 class="modal-title" id="exampleModalLabel">
							<span>新增產品</span>
						</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
									<label for="image">輸入圖片網址</label>
									<input type="text" v-model="tempProduct.imageUrl" class="form-control" id="image"
										placeholder="請輸入圖片連結">
								</div>
								<div class="form-group">
									<label for="customFile">或 上傳圖片
										<i class="fas fa-spinner fa-spin" v-if="status.isFileLoading"></i>
									</label>
									<input type="file" @change="uploadFile" id="customFile" class="form-control"
										ref="files">
								</div>
								<img img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
									class="img-fluid" :src="tempProduct.imageUrl" alt="">
							</div>
							<div class="col-sm-8">
								<div class="form-group">
									<label for="title">標題</label>
									<input type="text" v-model="tempProduct.tilte" class="form-control" id="title"
										placeholder="請輸入標題">
								</div>

								<div class="form-row">
									<div class="form-group col-md-6">
										<label for="category">分類</label>
										<input type="text" v-model="tempProduct.category" class="form-control" id="category"
											placeholder="請輸入分類">
									</div>
									<div class="form-group col-md-6">
										<label for="price">單位</label>
										<input type="unit" v-model="tempProduct.unit" class="form-control" id="unit"
											placeholder="請輸入單位">
									</div>
								</div>

								<div class="form-row">
									<div class="form-group col-md-6">
									<label for="origin_price">原價</label>
										<input type="number" v-model="tempProduct.origin_price" class="form-control" id="origin_price"
											placeholder="請輸入原價">
									</div>
									<div class="form-group col-md-6">
										<label for="price">售價</label>
										<input type="number" v-model="tempProduct.price" class="form-control" id="price"
											placeholder="請輸入售價">
									</div>
								</div>
								<hr>

								<div class="form-group">
									<label for="description">產品描述</label>
									<textarea type="text" v-model="tempProduct.description" class="form-control" id="description"
										placeholder="請輸入產品描述"></textarea>
								</div>
								<div class="form-group">
									<label for="content">說明內容</label>
									<textarea type="text" v-model="tempProduct.content" class="form-control" id="content"
										placeholder="請輸入產品說明內容"></textarea>
								</div>
								<div class="form-group">
									<div class="form-check">
										<input class="form-check-input" type="checkbox"
											id="is_enabled" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0">
										<label class="form-check-label" for="is_enabled">
											是否啟用
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
						<button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
					</div>
				</div>
			</div>
		</div>
<!-- delete modal -->
		<div class="modal fade" id="delProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
						是否刪除<strong class="text-danger">{{ tempProduct.tilte }}</strong> 商品(刪除後將無法恢復)。
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
						<button type="button" class="btn btn-danger" @click="delModal()">確認刪除</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery';
export default {
	data(){
		return{
			isNew: true,
			products:[],
			tempProduct:{},
			isLoading: false,
			status:{
				isFileLoading: false,
			}
		}
	},
	methods: {
	//更新
		getProduct(){
			const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products`;
			vm.isLoading = true;
			this.$http.get(api).then((response) => {
				vm.isLoading = false;
				vm.products = response.data.products;
				console.log(response.data);
			})
		},
	//新增、編輯
		openModal(isNew,item){
			if(isNew){
				this.tempProduct = {};
				this.isNew = true;
			}else{
				this.tempProduct = Object.assign ({},item);
				this.isNew = false;
			}
			$('#productModal').modal('show');
		},
		editModal(){
			$('#productModal').modal('show');
		},
		updateProduct(){
			const vm = this;
			let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`;
			let httpMethod = 'post';
			if(!vm.isNew){
				api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
				httpMethod = 'put';
			}
			this.$http[httpMethod](api,{data: vm.tempProduct}).then((response) => {
			  if(response.data.success){
					console.log(response.data);
					$('#productModal').modal('hide');
					vm.getProduct();
				}else{
					console.log(response.data);
					$('#productModal').modal('hide');
					alert('新增失敗');
					vm.getProduct();
				}
			})
		},
	//刪除
		openDeleteModal(item){
			this.tempProduct = item;
			$('#delProductModal').modal('show');
		},
		delModal(){
			const vm = this;
			const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
			this.$http.delete(api).then((response) => {
				if(response.data.success){
					console.log(response.data);
					$('#delProductModal').modal('hide');
					vm.getProduct();
					alert('已刪除');
				}else{
					$('#delProductModal').modal('hide');
					vm.getProducts();
					alert('刪除失敗');
				}
			})
		},
	//上傳圖片
		uploadFile(){
			const File = this.$refs.files.files[0];
			const vm = this;
			const formData = new FormData();
			vm.status.isFileLoading = true;
			formData.append('file-to-upload',File);
			const url = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`;
			this.$http.post(url,formData,{
				header:{
					'Content-Type':'multipart/form-data'
				}
			}).then((response) =>{
				console.log(response.data);
				if(response.data.success){
					// vm.tempProduct.imageUrl = response.data.imageUrl;
					vm.status.isFileLoading = false;
					vm.$set(vm.tempProduct, 'imageUrl' , response.data.imageUrl);
				}
			})
		}
	},
	created() {
		this.getProduct()
	},
}
</script>