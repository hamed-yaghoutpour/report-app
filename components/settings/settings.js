Vue.component("settings",{
	template:(`
<div id="settings">
	<div class="container-fluid">
		<div class="row mt-2">
			<h1 class="text-primary">{{strings.settings}}</h1>
		</div>
	</div>
	<hr>
	<div class="row mb-2 mx-1">
		<div class="col-6">
			<button class="btn btn-info" v-on:click="change_password()">{{strings.change_password}}</button>
		</div>
		
	</div>
	
	<div class="row mb-2 mx-1">
		<div class="col-6">
			<button class="btn btn-info" v-on:click="change_language()">{{strings.change_language}}</button>
		</div>
		
	</div>
	
	<div class="row mb-2 mx-1">
		<div class="col-6">
			<button class="btn btn-info" v-on:click="reset_factory()">{{strings.reset_factory}}</button>
		</div>
		
	</div>
	
	
</div>
	`),
	computed:{
		strings:function(){
			return this.$store.state.strings
		}
	},
	methods:{
		reset_factory:function(){
			let confirm_result = confirm(this.strings.reset_factory_confirm_message)
			if(confirm_result == true){
				
				api.reset_factory().then(state =>{
					if(state){
						alert(this.strings.reset_factory_success)
						window.location.assign("#/")
					}else{
						alert(this.strings.try_again)
					}
				})
				
					
			}
		},
		change_language:function(){
			let confirm_result = confirm(this.strings.are_you_sure);
			if(confirm_result === true){
				if(api.toggle_language()){
					window.location.reload()
				}
			}
		},
		change_password:function(){
			let old_password = prompt(this.strings.what_is_your_old_password)
			if(!old_password) return // for ux reasons
			let new_password = prompt(this.strings.what_is_your_new_password)
			api.change_password(old_password,new_password,function(){
				alert(this.strings.success)
			},function(){
				alert(this.strings.try_again)
			})
			
		}
	}
})