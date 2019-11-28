<template>
	<div class="home">
		
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
	name: "home",
	components: {
		HelloWorld
	},
	mounted() {
		this.getCode()
	},
	methods: {
		async getCode(){
			let params = {
				phone:'13560152027'
			}
			this.request.post(this.urls.getImgCode,params,false).then((res)=>{
				console.log(res)
			})
		
		}
	},
};
</script>
