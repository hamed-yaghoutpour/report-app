Vue.component('com',{
	props:["name_t"],
	template:"<h1>{{name_t}}</h1>"
})
new Vue({
	el:"#app",
	data:{
		name:"hamed"
	}
})