import "./styles.css"

/* myApi.parsed_database().reports.forEach(i =>{
    renderReportOption({
        report_code:i.id,
        title:i.driver_name,
        info:"info",
        targetEl:document.getElementById('reports')
    })
})

myApi.open_reports().forEach(i =>{
    renderReportOption({
        report_code:i.id,
        title:i.driver_name,
        info:"info",
        targetEl:document.getElementById('open_reports')
    })
})
myApi.closed_reports().forEach(i =>{
    renderReportOption({
        report_code:i.id,
        title:i.driver_name,
        info:"info",
        targetEl:document.getElementById('closed_reports')
    })
})
 */
function Reports(props){
	
    return (
			<div className="container-fluid">
				<div className="row mt-2">
					<div className="col">
						<h1 className="bg-primary text-light r-title">all reports</h1>
					</div>
				</div>
				
				<hr className="bg-light"/>
				<div id="reports">
				
				</div>
					
				<div className="row mt-5">
					<div className="col">
						<h1 className="bg-primary text-light r-title">open reports</h1>
					</div>
				</div>
				
				<hr className="bg-light"/>
				<div id="open_reports">

				</div>
				
				<div className="row mt-5">
					<div className="col">
						<h1 className="bg-primary text-light r-title">closed reports</h1>
					</div>
				</div>				
				<hr className="bg-light"/>
				<div id="closed_reports">

				</div>
				
			</div>
		

    )
}

export default Reports