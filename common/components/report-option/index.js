function renderReportOption(obj){
    t = 
    `
    <div class="row">
	<div class="col-3 d-flex align-items-center justify-content-center">
		<h6 class="bg-warning rounded p-1">#${obj.report_code}</h6>
	</div>
	<div class="col-7 d-flex flex-column" style="overflow:hidden;">
		<a v-bind:href="report_page_url">
			<h4 class="text-info">${obj.title}</h4>
		</a>
		<h6 class="text-secondary">${obj.info}</h6>
	</div>
	<div class="col-2 d-flex align-items-center">
	
	</div>
</div>
    `
    obj.targetEl.innerHTML += t;

}