Vue.component("result",{
	template:
	`
<div id="result">
	<div class="row">
		<h1 class="text-primary mt-2">** your report saved **</h1>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">report id:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{$route.params.report_code}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">driver name:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{this.report_data["driver_name"]}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">driver code:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{this.report_data["driver_code"]}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">report text:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{this.report_data["report_text"]}}</h5>
		</div>
	</div>
	<hr>
	<div class="row ml-1 mb-3">
		<div class="col-4 ml-1">
			<button class="btn btn-primary" v-on:click="open_report">open reoprt</button>
		</div>
		<div class="col-4">
			<button class="btn btn-info" v-on:click="go_back">go back</button>
		
		</div>
	</div>
	
</div>
	`,
	methods:{
		go_back:function(){
			window.location.assign("#/new_report");
		},
		open_report:function(){
			window.location.assign("#/report/"+Number(this.$route.params.report_code))
		},
		report_data:function(){
			return{
				report_code : Number(this.$route.params.report_code),
				driver_code : api.get_report(report_code)["driver_code"],
				driver_name : api.get_report(report_code)["driver_name"],
				report_text : api.get_report(report_code)["report_text"],
			}
			
		}
	}
})