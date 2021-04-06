Vue.component("report",{
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
			<h5 class="text-warning">{{report_code()}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">driver name:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{driver_name}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">driver code:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{driver_code}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">report text:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{report_text}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
		<h5 class="text-info">status:</h5>
		</div>
		<div class="col">
		
		<h5 class="text-secondary" v-if="is_open">not checked</h5>
		<h5 class="text-success" v-else>checked</h5>
		</div>
		<div class="col">
		<button class="btn btn-dark" v-on:click="toggle_report_status">toggle</button>
		</div>
	</div>
	
	<div class="row ml-1 mb-3 mt-2">
		<div class="col-4  ml-1">
			<button class="btn btn-info" v-on:click="go_back">go back</button>
		
		</div>
	</div>	
</div>
	`,
	
	
	methods:{
		go_back:function(){
			window.location.assign("#/new_report");
		},
		report_code:function(){
			return Number(this.$route.params.report_code)
		},
		toggle_report_status(){
			//success => reload to take effect
			if(api.toggle_report_status(this.report_code())){
				this.$store.dispatch("update_reports") ;
				//it will also update this page because we have used computed properties
			} 
		}

	},
	computed:{
		driver_name(){
			return this.$store.state.reports[this.report_code()-1].driver_name
		},
		driver_code(){
			return this.$store.state.reports[this.report_code()-1].driver_code
		},
		is_open(){
			return this.$store.state.reports[this.report_code()-1].is_open
		},
		report_text(){
			return this.$store.state.reports[this.report_code()-1].report_text
		}
	}
		
		
	
})