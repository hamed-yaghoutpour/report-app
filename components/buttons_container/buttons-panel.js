function hide_all_pages(){
	for(i in app.is_visible){
		app.is_visible[i] = false;
	}
}

// --------------------------------------------


Vue.component("buttons-panel",{
	template:
		(`
<div class="buttons-panel">

	<div>
		<img src="./archive/bootstrap_edited_icons/gear-white.svg">
		<h2><router-link to="/settings">settings</router-link></h2>
	</div>
	
	<div>
		<img src="./archive/bootstrap_edited_icons/pen-white.svg">
		<h2><router-link to="/new_driver">new driver</router-link></h2>
	</div>
	
	<div>
		<img src="./archive/bootstrap_edited_icons/pen-white.svg">
		<h2><router-link to="/edit_driver_info">edit driver info</router-link></h2>
	</div>
	
	<div>
		<img src="./archive/bootstrap_edited_icons/pen-white.svg">
		<h2><router-link to="/drivers">drivers</router-link></h2>
	</div>
	
	<div>
		<img src="./archive/bootstrap_edited_icons/pen-white.svg">
		<h2><router-link to="/driver_page">driver page</router-link></h2>
	</div>
	
	
	<div>
		<img src="./archive/bootstrap_edited_icons/pen-white.svg">
		<h2><router-link to="/export_data">export data</router-link></h2>
	</div>
	
</div>
		`)
})
