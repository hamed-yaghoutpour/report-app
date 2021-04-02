// Vue.component("settings-option",{
	// template:(`
// <div class="settings-option">
	// <div class="my_row">
		// <img src="archive/bootstrap_edited_icons/grer-white.svg">
		// <h3 class="title">change password</h3>
	// </div>
	
	// <h5 class="info">you can easily change your password</h5>
// </div>
	// `)
// })
Vue.component("settings",{
	template:(`
<div id="settings">
	<div class="container-fluid">
		<div class="row mt-2">
			<h1 class="text-primary">settings</h1>
		</div>
	</div>
	<hr>
	<div class="row mb-2 mx-1">
		<div class="col-4">
			<button class="btn btn-info">change password</button>
		</div>
		
	</div>
	
	<div class="row mb-2 mx-1">
		<div class="col-4">
			<button class="btn btn-info">something else</button>
		</div>
		
	</div>
	
	<div class="row mb-2 mx-1">
		<div class="col-4">
			<button class="btn btn-info">change language</button>
		</div>
		
	</div>
	
	
</div>
	`)
})