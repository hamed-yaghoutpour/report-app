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
			window.location.assign("#/driver_page/"+this.driver_code);
		}
	}
});
Vue.component("select-driver-page",{
	template:
	`
	<div id="select_driver_page">
		<div id="container">
			<driver
			v-for="driver in this.drivers"
			v-bind:driver_code="driver.driver_code"
			v-bind:driver_name="driver.driver_name"
			></driver>
		</div>
	</div>
	`,
	computed:{
		drivers:function(){
			return[
				{
					driver_name:"hamed",
					driver_code:22
				},
				{
					driver_name:"hamed",
					driver_code:22
				},
				{
					driver_name:"hamed",
					driver_code:22
				},
			]
		}
	}
})

