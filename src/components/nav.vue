<template>
    <div>
			<nav class="navbar navbar-expand-lg nav_sec bg-content sticky-top w-100 p-0" style="position:fixed">
				<div class="container">
					<router-link to="/" class="navbar-brand d-flex align-items-center text-white"><img :src="logo" width="140" alt=""></router-link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="text-white"><i class="fas fa-bars"></i></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto">
								<li class="nav-item active">
									<router-link to="/" class="link hvr-shutter-out-horizontal">首頁</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/portfolio" class="link hvr-shutter-out-horizontal">作品集</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/shop" class="link hvr-shutter-out-horizontal">商品專區</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/cus_cart" class="link hvr-shutter-out-horizontal">購物車</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/" class="link hvr-shutter-out-horizontal">聯絡我們</router-link>
								</li>
								<li class="nav-item">
									<router-link to="/login" class="link hvr-shutter-out-horizontal">Login</router-link>
								</li>
						</ul>
					</div>
				</div>
			</nav>
    </div>
</template>

<script>
export default {
	data(){
		return{
			logo:require('../assets/img/logo.png')
		}
	},
	methods:{
		scrollToContact(){
			
		}
	},
}
</script>