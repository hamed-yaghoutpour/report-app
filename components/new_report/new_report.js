Vue.component("new-report",{
	template:(`
<div id="new-report">
	<div class="container-fluid">
	
		<div class="row mt-2">
			<h1 class="text-primary">new report</h1>
		</div>
		<hr>
		<div class="row mb-1">
			<div class="col-8">
				<h4 class="text-info" id="driver_code">enter driver code: </h4>
			</div>
			<div class="col">
				<input type="number" class="form-control text-light bg-dark border-0" min="0">
			</div>
		</div>
		<hr>
		<div class="row mb-2">
			<div class="col-5">
				<h4 class="text-info">driver name: </h4>
			</div>
			<div class="col">
				<input class="form-control text-light bg-dark border-0" type="text">
			</div>
			
		</div>
		<hr>
		<div class="row mb-3">
			
			<h4 class="text-info">enter report text :</h4>
			
		</div>
		
		<div class="row d-flex justify-content-center">
			<div class="col-12">
				<textarea class="form-control text-light bg-dark border-0" id="report_text"></textarea>
			</div>
			
		</div>
		
		<div class="row mt-3 mb-3">
			<div class="col-8">
				<button class="btn btn-primary" v-on:click="add_new_report">save report</button>
			</div>
			<div class="col-4 d-flex justify-content-end">
				<button class="btn btn-outline-danger" v-on:click="discard">discard</button>
			</div>
		</div>
	</div>
</div>
	`),
	methods:{
		add_new_report:function(){
			let confirm_result = confirm("are you sure?");
			if(confirm_result== true){
				driver_code = Number($("#driver_code").val());
				driver_name = $("#driver_name").val();
				report_text = $("#report_text").val();
				let bool = api.new_report(driver_code,driver_name,report_text);
				if(bool){
					report_code = bool;
					window.location.assign("#/report/"+report_code)
				}else{
					alert("there is an error, please try again");
				}
			}
		},
		discard:function(){
			let confirm_result = confirm("are you sure?");
			if(confirm_result == true){
				console.log("discard func is working")
			}
		}
	}
})
