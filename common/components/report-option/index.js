function renderReportOption(obj){
    t = 
    `
    <div class="row report-option" report_code="${obj.report_code}">
		<div class="col-3 d-flex align-items-center justify-content-center">
			<h6 class="bg-warning rounded p-1">#${obj.report_code}</h6>
		</div>
		<div class="col-7 d-flex flex-column" style="overflow:hidden;">
			<a>
				<h4 class="text-info">${obj.title}</h4>
			</a>
			<h6 class="text-secondary">${obj.info}</h6>
		</div>
		<div class="col-2 d-flex align-items-center">
		
		</div>
	</div>
    `
    obj.targetEl.innerHTML += t;
	report_options = document.getElementsByClassName('report-option')
		
	for(let i= 0;i<report_options.length;i++){
		report_options[i].onclick = function(){
			localStorage.setItem('report_code',report_options[i].getAttribute('report_code'))
			window.location.replace('../result/index.html')
		}

	}
	
}