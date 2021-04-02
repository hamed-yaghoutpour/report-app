Vue.component("nav-bar",{
	template:(`
<div id="nav-bar" class="bg-info">

	<div class="option" v-on:click="go_to_new_report">
		<img src="archive/bootstrap_edited_icons/gear-white.svg">
		<b class="title">new report</b>
	</div>
	
	<div class="option" v-on:click="go_to_reports">
		<img src="archive/bootstrap_edited_icons/gear-white.svg">
		<b class="title">reports</b>
	</div>
	
	<div class="option" v-on:click="go_to_settings">
		<img src="archive/bootstrap_edited_icons/gear-white.svg">
		<b class="title">settings</b>
	</div>
	
</div>
	`),
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