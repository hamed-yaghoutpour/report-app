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
			<button class="btn btn-info"><a href="#/reports">{{strings.go_back}}</a></button>
		
		</div>
	</div>	
</div>
	`,
	
	
	methods:{
		report_code:function(){
			return Number(this.$route.params.report_code)
		},
		toggle_report_status(){
			//success => reload to take effect
			if(api.toggle_report_status(this.report_code())){
				this.$store.dispatch("update_reports").then(()=>{{
					this.is_open = this.$store.state.reports[this.report_code()-1].is_open
				}})
				
			} 
		}

	},
	computed:{
		strings(){
			return this.$store.state.strings
		}
	},
	data(){
		return {
			driver_name:"loading ...",
			driver_code:"loading ...",
			is_open:"loading ...",
			report_text:"loading ...",
		}
	},
	created(){
		this.$store.dispatch("update_reports").then(()=>{
			this.driver_name = this.$store.state.reports[this.report_code()-1].driver_name
			this.driver_code = this.$store.state.reports[this.report_code()-1].driver_code
			this.is_open = this.$store.state.reports[this.report_code()-1].is_open
			this.report_text = this.$store.state.reports[this.report_code()-1].report_text
		})
	}
		
		
	
})