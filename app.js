
const store = new Vuex.Store({
	state:{
		reports:[],
		strings:strings.english //short for strings:strings      **strings are in a file with same name in current directory **should require before this file
	},
	getters:{
		open_reports(state){
			return state.reports.filter((value)=>{
				return value.is_open == true
			 })
		},
		closed_reports(state){
			return state.reports.filter((value)=>{
				return value.is_open == false
			 })
		}

	},
	mutations:{
		update_reports(state,data){
			state.reports = data;
		},
		change_language(state,language){
			state.strings = strings[language]
			
			language == "persian" ? $("*").css("direction","rtl") : $("*").css("direction","ltr");
			
		}
	},
	actions:{
		async update_reports(context){
			let data = await api.get_reports();
			context.commit('update_reports',data)
		}
	}
})

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
	router:router,
	store,
	created(){
		this.$store.dispatch("update_reports")
		
		load_css_files_fn.then(()=>{
			this.$store.commit("change_language",api.get_language());
			// this.$store.commit("change_language","persian");
		})
	}
})