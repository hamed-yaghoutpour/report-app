function load_css(paths){
	//with this you can make sure files will execute in order
	let element = document.createElement("link")
	element.rel = "stylesheet"
	element.href = paths[0]
	element.onload = function(){
		paths.splice(0,1)
		if(paths.length != 0){
			load_css(paths)
		}
		
	}
	document.getElementsByTagName("head")[0].appendChild(element);
}
function load_js(paths){
	//with this you can make sure files will execute in order
	let element = document.createElement("script")
	element.src = paths[0]
	element.onload = function(){
		paths.splice(0,1)
		if(paths.length != 0){
			load_js(paths)
		}
	}
	document.getElementsByTagName("head")[0].appendChild(element);
}


let js_files = [
	"./archive/jquery-3.5.1.js",
	"./archive/vue.js",
	"./archive/vue-router.js",
	"components/common/report/vue_report_component.js",
	"components/nav-bar/nav-bar.js",
	"components/settings/settings.js",
	"components/new_report/new_report.js",
	"components/reports/reports.js",
	"components/result/component.js",
	
	"C:/xampp/htdocs/my projects/report-app-master/archive/bootstrap-5.0.0-beta2-dist/js/bootstrap.bundle.js",
	"backend/api.js",
	"app.js"
]


let css_files = [
	"C:/xampp/htdocs/my projects/report-app-master/archive/bootstrap-5.0.0-beta2-dist/css/bootstrap.rtl.css",
	"./archive/common.css",
	"components/common/report/vue_report_component.css",
	"components/nav-bar/nav-bar.css",
	"components/settings/settings.css",
	"components/new_report/new_report.css",
	"components/reports/reports.css",
	"components/result/component.css"
	
	
]
load_css(css_files)
load_js(js_files)



