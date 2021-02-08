<template>
    <div>
			<ul class="nav justify-content-end">
				<li class="nav-item">
					<a class="nav-link text-nav" href="#" @click.prevent="userlogout()">登出</a>
				</li>
			</ul>
			<div class="row no-gutters justify-content-center">
				<div class="col-8 col-md-4 pt-5">
					<form class="needs-validation" @submit.prevent="userLogin" novalidate>
						<div class="text-center mb-4">
							<h1 class="h3 mb-3 font-weight-normal">登入</h1>
							<p>歡迎登入</p>
						</div>
						<div class="form-label-group">
							<label for="">帳號</label>
							<input type="text" class="form-control" v-model="user.username" required>
							<div class="invalid-feedback">
								未填寫
							</div>
						</div>
						<div class="form-label-group">
							<label for="">密碼</label>
							<input type="password" class="form-control" v-model="user.password" required>
							<div class="invalid-feedback">
								未填寫
							</div>
						</div>
						<button class="btn btn-lg btn-content btn-block mt-3" type="submit">Sign in</button>
					</form>
				</div>
			</div>
    </div>
</template>

<script>
export default {
	data(){
		return{
			user:{
				username:'',
				password:''
			}
		}
	},
	methods: {
		userLogin(){
			const api = `${process.env.VUE_APP_API_PATH}/admin/signin`;
			const vm = this;
			this.$http.post(api,vm.user).then((response) => {
				if(response.data.success){
					const token = response.data.token;
					const expired = response.data.expired;
					document.cookie = `hexToken_1=${token}; expires=${ new Date(expired)};`;
					console.log(response.data);
					vm.$router.push('/admin');
				}else{
					console.log(response.data);
					alert('帳號或密碼錯誤');
				}
			})
		},
		userlogout(){
			const api = `${process.env.VUE_APP_API_PATH}/logout`;
			const vm = this;
			this.$http.post(api).then((response) => {
				if(response.data.success){
					console.log(response.data);
					vm.$router.push('/');
					alert('您已登出');
				}else{
					console.log(response.data);
				}
			})
		}
	},
}
</script>