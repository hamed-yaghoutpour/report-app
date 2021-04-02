Vue.component("settings",{
	template:(`
<div id="settings">
	<div class="container-fluid">
		<div class="row mt-2">
			<h1 class="text-primary">settings</h1>
		</div>
	</div>
	<hr>
	<div class="row mb-2 mx-1">
		<div class="col-6">
			<button class="btn btn-info" v-on:click="change_password()">change password</button>
		</div>
		
	</div>
	
	<div class="row mb-2 mx-1">
		<div class="col-6">
			<button class="btn btn-info" v-on:click="change_language()">change language</button>
		</div>
		
	</div>
	
	<div class="row mb-2 mx-1">
		<div class="col-6">
			<button class="btn btn-info" v-on:click="reset_factory()">reset factory</button>
		</div>
		
	</div>
	
	
</div>
	`),
	methods:{
		reset_factory:function(){
			let confirm_result = confirm("danger! are you sure you want to delete all your data and start app again ?")
			if(confirm_result == true){
				if(api.reset_factory()){
					alert("done successfuly and app will restart soon")
					window.location.assign("#/")
				}else{
					alert("there was an error, try again")
				}
			}
		},
		change_language:function(){
			
		},
		change_password:function(){
			let old_password = prompt("what is your password right now?")
			if(!old_password) return // for ux reasons
			let new_password = prompt("enter your new password")
			if(change_password(old_password,new_password) == true) {
				alert("done succesfuly")
			}else{
				alert("your old password was incorect or an error has happend, try again")
			}
		}
	}
})