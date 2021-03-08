Vue.component('driver',{
	props:[
	'driver_code',
	'driver_name'
	],
	props:{
		driver_code:{
			type:Number
		},
		driver_name:{
			type:String
		}
	},
	template:
	`
	<div class='driver'>
		<div class='driver_code'>{{driver_code}}</div>
		<div class='driver_name'>{{driver_name}}</div>
		<button class='open_driver_page_button' v-on:click="open_driver_page">صفحه راننده</button>
	</div>
	`,
	methods:{
		open_driver_page : function(){
			window.location.assign("../driver_page/driver_page.php?driver_code="+this.driver_code);
		}
	}
});
$(document).ready(function(){
	const app = new Vue({
		el:"#container"
	});
});
