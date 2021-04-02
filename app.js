let routes = [
	
	{
		path:"/reports",
		component:{
			template:"<reports></reports>"
		}
	},
	{
		path:"/new_report",
		component:{
			template:"<new-report></new-report>"
		}
	},
	{
		path:"/settings",
		component:{
			template:"<settings></settings>"
		}
	},
	{
		path:"/report/:report_code",
		component:{
			template:"<report></report>"
		}
	},
	{
		path:"/login",
		component:{
			template:"<login></login>"
		}
	}
]
let router = new VueRouter({
	routes:routes
})
const app = new Vue({
	el:"#app",
	router:router
})