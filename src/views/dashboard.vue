<template>
	<div>
		<div class="row no-gutters d-none d-md-block">
			<div class="col-2 text-center bg-sidebar position-fixed h-100">
				<Sidebar/>
			</div>
		</div>
		<div class="py-3 d-block d-md-none bg-sidebar w-100">
			<Sidebar/>
		</div>
		<div class="row no-gutters justify-content-end">
			<div class="col-12 col-md-10 px-md-3 py-0">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from '../components/manage_sidebar';
export default {
	components:{
		Sidebar
	},
	created() {
		const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken_1\s*\=\s*([^;]*).*$)|^.*$/, '$1');
		this.$http.defaults.headers.common.Authorization = myCookie;
	},
}
</script>