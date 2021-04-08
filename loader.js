function load_css_file(path){
	return new Promise((resolve,reject)=>{
		let element = document.createElement("link")
		element.rel = "stylesheet"
		element.href = path
		element.onload = function(){
			resolve();
		}
		document.getElementsByTagName("head")[0].appendChild(element);
	})
}
async function load_css_files(paths){
	//with this you can make sure files will execute in order
	for(let i = 0;i<paths.length;i++){
		await load_css_file(paths[i]);
	}
	return true;
}
function load_js_file(path){
	return new Promise((resolve,reject)=>{
		let element = document.createElement("script")
		element.src = path
		element.onload = function(){
			resolve()
		}
		document.getElementsByTagName("head")[0].appendChild(element);
	})
}
async function load_js_files(paths){
	//with this you can make sure files will execute in order
	for(let i = 0;i<paths.length;i++){
		await load_js_file(paths[i]);
	}
	return true;
}


let js_files = [
	"strings.js",
	"backend/api.js",
	"./archive/jquery-3.5.1.js",
	"./archive/vue.js",
	"./archive/vue-router.js",
	"./archive/vuex.js",
	"components/nav-bar/nav-bar.js",
	"components/settings/settings.js",
	"components/new_report/new_report.js",
	"components/reports/reports.js",
	"components/result/component.js",
	
	"./archive/bootstrap-5.0.0-beta2-dist/js/bootstrap.bundle.js",
	"./archive/common.js",
	"app.js"
]


let css_files = [
	"./archive/bootstrap-5.0.0-beta2-dist/css/bootstrap.rtl.css",
	"./archive/common.css",

	"components/nav-bar/nav-bar.css",
	"components/settings/settings.css",
	"components/new_report/new_report.css",
	"components/reports/reports.css",
	"components/result/component.css"
	
	
]
let load_css_files_fn = load_css_files(css_files)
let load_js_files_fn = load_js_files(js_files)



