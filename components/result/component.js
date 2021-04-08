Vue.component("report",{
	template:
	`
<div id="result">
	<div class="row">
		<h1 class="text-primary mt-2">** {{strings.your_report_saved}} **</h1>
		
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">{{strings.report_id}}:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{report_code()}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">{{strings.driver_name}}:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{driver_name}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">{{strings.driver_code}}:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{driver_code}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
			<h5 class="text-info">{{strings.report_text}}:</h5>
		</div>
		<div class="col">
			<h5 class="text-warning">{{report_text}}</h5>
		</div>
	</div>
	<hr>
	<div class="row">
		<div class="col-6">
		<h5 class="text-info">{{strings.status}}:</h5>
		</div>
		<div class="col">
		
		<h5 class="text-secondary" v-if="is_open">{{strings.not_checked}}</h5>
		<h5 class="text-success" v-else>{{strings.checked}}</h5>
		</div>
		<div class="col">
		<button class="btn btn-dark" v-on:click="toggle_report_status">{{strings.toggle}}</button>
		</div>
	</div>
	
	<div class="row ml-1 mb-3 mt-2">
		<div class="col-4  ml-1">
			<button class="btn btn-info" v-on:click="go_back">{{strings.go_back}}</button>
		
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
		},
		strings(){
			return{
				your_report_saved:this.$store.state.strings.your_report_saved,
				report_id:this.$store.state.strings.report_id,
				driver_name:this.$store.state.strings.driver_name,
				driver_code:this.$store.state.strings.driver_code,
				report_text:this.$store.state.strings.report_text,
				status:this.$store.state.strings.status,
				checked:this.$store.state.strings.checked,
				not_checked:this.$store.state.strings.not_checked,
				toggle:this.$store.state.strings.toggle,
				go_back:this.$store.state.strings.go_back,
			}
		}
	}
		
		
	
})