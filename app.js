let components = {
	settings:{
		template:"<settings-page></settings-page>"
	},
	drivers:{
		template:`<select-driver-page></select-driver-page>`
	},
	edit_driver_info:{
		template:"<edit-driver-info-page></edit-driver-info-page>"
	},
	new_driver:{
		template:"<new-driver-page></new-driver-page>"
	},
	driver_page:{
		template:"<driver-page></driver-page>"
	},
	export_data:{
		template:"<export-data-page></export-data-page>"
	}
	
}


let routes = [
	{
		path:"/settings",
		component:components.settings
	},
	{
		path:"/drivers",
		component:components.drivers
	},
	{
		path:"/driver_info",
		component:components.edit_driver_info
	},
	{
		path:"/new_driver",
		component:components.new_driver
	},
	{
		path:"/driver_page/:driver_code",
		component:components.driver_page
	},
	{
		path:"/export_data",
		component:components.export_data
	
	}
	
]
let router = new VueRouter({
	routes:routes
})
const app = new Vue({
	el:"#vue_container",
	router:router
})