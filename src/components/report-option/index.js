import "./styles.css"
function ReportOption(props){
	/* props: report_code, title , info */
	return (
		<div className="row report-option"onClick={window.location.replace('#/result/'+props.report_code)}>
			<div className="col-3 d-flex align-items-center justify-content-center">
				<h6 className="bg-warning rounded p-1">#${props.report_code}</h6>
			</div>
			<div className="col-7 d-flex flex-column" style="overflow:hidden;">
				<a>
					<h4 className="text-info">${props.title}</h4>
				</a>
				<h6 className="text-secondary">${props.info}</h6>
			</div>
			<div className="col-2 d-flex align-items-center">
			<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="white" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
			</svg>
					</div>
		</div>
	)
    
	
}