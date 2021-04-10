Vue.component("reports-option",{
props:["report_code","title","info"],
template:
`
<div class="row">
	<div class="col-3 d-flex align-items-center justify-content-center">
		<h6 class="bg-warning rounded p-1">#{{report_code}}</h6>
	</div>
	<div class="col-7 d-flex flex-column" style="overflow:hidden;">
		<a v-bind:href="report_page_url">
			<h4 class="text-info">{{title}}</h4>
		</a>
		<h6 class="text-secondary">{{info}}</h6>
	</div>
	<div class="col-2 d-flex align-items-center">
	
	</div>
</div>
`,
data:function(){
	return {
		report_page_url:"#/report/"+Number(this.report_code)
	}
}
})


Vue.component("reports",{
	template:(`
<div id="reports">
	<div class="container-fluid">
		<div class="row mt-2">
			<div class="col">
				<h1 class="text-primary">{{strings.all_reports}}</h1>
			</div>
		</div>
		
		<hr>
		
		<reports-option v-for="report in reports" v-bind:title="report.driver_name" v-bind:info="report.report_text" v-bind:report_code="report.id"></reports-option>
		
		<div class="row mt-5">
			<div class="col">
				<h1 class="text-primary">{{strings.open_reports}}</h1>
			</div>
		</div>
		
		<hr>
		
		<reports-option v-for="report in open_reports" v-bind:title="report.driver_name" v-bind:info="report.report_text" v-bind:report_code="report.id"></reports-option>
		
		<div class="row mt-5">
			<div class="col">
				<h1 class="text-primary">{{strings.closed_reports}}</h1>
			</div>
		</div>
		
		<hr>
		
		<reports-option v-for="report in closed_reports" v-bind:title="report.driver_name" v-bind:info="report.report_text" v-bind:report_code="report.id"></reports-option>
		
		
	</div>

	
</div>
	`),
	computed:{
		reports(){
			return this.$store.state.reports
		},
		open_reports(){
			return this.$store.getters.open_reports
		},
		closed_reports(){
			return this.$store.getters.closed_reports
		},
		strings(){
			return this.$store.state.strings
		}
	}
	
})