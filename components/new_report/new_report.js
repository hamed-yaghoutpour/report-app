Vue.component("new-report",{
	template:(`
<div id="new-report">
	<div class="container-fluid">
	
		<div class="row mt-2">
			<h1 class="text-primary">{{strings.new_report}}</h1>
		</div>
		<hr>
		<div class="row mb-1">
			<div class="col-8">
				<h4 class="text-info">{{strings.enter_driver_code}}: </h4>
			</div>
			<div class="col">
				<input type="number" class="form-control text-light bg-dark border-0" min="0" id="driver_code">
			</div>
		</div>
		<hr>
		<div class="row mb-2">
			<div class="col-5">
				<h4 class="text-info">{{strings.driver_name}}: </h4>
			</div>
			<div class="col">
				<input class="form-control text-light bg-dark border-0" type="text" id="driver_name">
			</div>
			
		</div>
		<hr>
		<div class="row mb-3">
			
			<h4 class="text-info">{{strings.enter_report_text}}:</h4>
			
		</div>
		
		<div class="row d-flex justify-content-center">
			<div class="col-12">
				<textarea class="form-control text-light bg-dark border-0" id="report_text"></textarea>
			</div>
			
		</div>
		
		<div class="row mt-3 mb-3">
			<div class="col-8 d-grid">
				<button class="btn btn-primary" v-on:click="add_new_report">{{strings.save_report}}</button>
			</div>
			<div class="col-4 d-flex justify-content-end">
				<button class="btn btn-outline-danger" v-on:click="discard">{{strings.discard}}</button>
			</div>
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
		add_new_report:function(){
			let confirm_result = confirm(this.strings.are_you_sure);
			if(confirm_result== true){
				let driver_code = Number($("#driver_code").val());
				let driver_name = $("#driver_name").val();
				let report_text = $("#report_text").val();
				let bool = api.new_report(driver_code,driver_name,report_text);
				if(bool){
					report_code = bool;
					this.$store.dispatch("update_reports").then(()=>{
						window.location.assign("#/report/"+report_code)
					})
					
				}else{
					alert(this.strings.try_again);
				}
			}
		},
		discard:function(){
			let confirm_result = confirm(this.strings.are_you_sure);
			if(confirm_result == true){
				$("#driver_code").val('');
				$("#driver_name").val('');
				$("#report_text").val('');
			}
		}
	}
})
