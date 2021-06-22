function renderReportOption(report_code,title,info){
    t = 
    `
    <div class="row">
	<div class="col-3 d-flex align-items-center justify-content-center">
		<h6 class="bg-warning rounded p-1">#{{report_code}}</h6>
	</div>
	<div class="col-7 d-flex flex-column" style="overflow:hidden;">
		<a v-bind:href="report_page_url">
			<h4 class="text-info">{{title}}</h4>
		</a>
		<h6 class="text-secondary">{{info}}</h6>
	</div>
	<div class="col-2 d-flex align-items-center">
	
	</div>
</div>
    `
    document.write(t)

}