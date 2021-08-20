import "./styles.css"
function ReportOption(props){
	/* props: id, title , info */
	return (
		<div className="row report-option" style={{direction:'rtl'}} onClick={() => window.location.replace('#/result/'+props.id)}>
			<div className="col-3 d-flex align-items-center justify-content-center">
				<h6 className="bg-warning rounded p-1">#{props.id}</h6>
			</div>
			<div className="col-7 d-flex flex-column" style={{overflow:"hidden"}}>
				<h4 className="text-info">{props.title}</h4>
				<h6 className="text-secondary">{props.info}</h6>
			</div>
			<div className="col-2 d-flex align-items-center svg-container">
				<svg width="1em" id="arrow-icon" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="white" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
				</svg>
			</div>
		</div> 
	)
    
	
} 
export default ReportOption