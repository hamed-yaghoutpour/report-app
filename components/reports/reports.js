Vue.component("reports-option",{
props:["report_code","title","info"],
template:
`
<div class="row">
	<div class="col-3 d-flex align-items-center justify-content-center">
		<h6 class="bg-warning rounded p-1">#{{report_code}}</h6>
	</div>
	<div class="col-7 d-flex flex-column" style="overflow:hidden;">
		<h4 class="text-info">{{title}}</h4>
		<h6 class="text-secondary">{{info}}</h6>
	</div>
	<div class="col-2 d-flex align-items-center">
		<button class="btn btn-dark align-items-center justify-content-center d-flex"><img src="./archive/icons/arrow-right-short-white.svg" style="height:20px;" v-on:click="go_to_report"></button>
	</div>
</div>
`,
methods:{
	go_to_report:function(){
		window.location.assign("#/report/"+Number(this.report_code))
	}
}
})


Vue.component("reports",{
	template:(`
<div id="reports">
	<div class="container-fluid">
		<div class="row mt-2">
			<div class="col">
				<h1 class="text-primary">all reports</h1>
			</div>
		</div>
		
		<hr>
		
		<reports-option v-for="report in reports" v-bind:title="report.driver_name" info="info" v-bind:report_code="report.id"></reports-option>
		
		
	</div>

	
</div>
	`),
	computed:{
		reports(){
			return api.get_reports();
		}
		
	}
	
})