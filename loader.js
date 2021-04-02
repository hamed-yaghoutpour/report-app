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
	"./components/buttons_container/buttons-panel.js",
	"components/pages_container/pages_container.js",
	"components/settings/settings.js",
	"components/driver_page/driver_page.js",
	"components/login/login.js",
	"components/new_driver/new_driver.js",
	"components/select_driver/select_driver.js",
	"components/edit_driver_info/edit_driver_info.js",
	"components/common/report/vue_report_component.js",
	"components/export_data/export_data.js",
	"app.js",
	// "C:/xampp/htdocs/my projects/report-app-master/archive/bootstrap-5.0.0-beta2-dist/js/bootstrap.bundle.js"
]
let css_files = [
	//"C:/xampp/htdocs/my projects/report-app-master/archive/bootstrap-5.0.0-beta2-dist/css/bootstrap.rtl.css",
	"./archive/common.css",
	"components/buttons_container/buttons-panel.css",
	"components/pages_container/pages_container.css",
	"components/settings/settings.css",
	"components/login/login.css",
	"components/new_driver/new_driver.css",
	"components/select_driver/select_driver.css",
	"components/edit_driver_info/edit_driver_info.css",
	"components/common/report/vue_report_component.css",
	"components/driver_page/driver_page.css",
	"C:/xampp/htdocs/my projects/report-app-master/components/container-like-github/container-like-github.css"
	
	
]
load_css(css_files)
load_js(js_files)



