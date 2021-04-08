Vue.component("nav-bar",{
	template:(`
<div id="nav-bar" class="bg-info">

	<div class="option" v-on:click="go_to_new_report">
		<img src="./archive/bootstrap-icons/gear-white.svg">
		<b class="title">{{strings.new_report}}</b>
	</div>
	
	<div class="option" v-on:click="go_to_reports">
		<img src="./archive/bootstrap-icons/gear-white.svg">
		<b class="title">{{strings.reports}}</b>
	</div>
	
	<div class="option" v-on:click="go_to_settings">
		<img src="./archive/bootstrap-icons/gear-white.svg">
		<b class="title">{{strings.settings}}</b>
	</div>
	
</div>
	`),
	computed:{
		strings:function(){
			return{
				new_report:this.$store.state.strings.new_report,
				reports:this.$store.state.strings.reports,
				settings:this.$store.state.strings.settings,
				
				
				
			}
		}
	},
	methods:{
		go_to_new_report:function(){
			window.location.assign("#/new_report")
		},
		go_to_reports:function(){
			window.location.assign("#/reports")
		},
		go_to_settings:function(){
			window.location.assign("#/settings")
		},
		
	}
})