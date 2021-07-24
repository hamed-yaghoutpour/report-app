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
		<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
</svg>
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