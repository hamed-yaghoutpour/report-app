import "./styles.css"
import api from  '../../apiClass.js'
import { Component } from "react"

class NewReport extends Component{
	constructor(props){
		super(props)
	}
	
	discard(){
		document.getElementById('driver_code').value = ""
		document.getElementById('driver_name').value = ""
		document.getElementById('report_text').value = ""
	}
	add_new_report(){
		var driver_code = Number(document.getElementById('driver_code').value)
		var driver_name = document.getElementById('driver_name').value
		var report_text = document.getElementById('report_text').value

		//myApi.new_report(driver_code,driver_name,report_text)
		//alert('done !')
		alert(driver_code)
		alert(driver_name)
		alert(report_text)
	}
	render(){
		return (
			<div id="new-report">
				<div className="container-fluid">
					<div className="row mt-2">
						<h1 className="text-primary">new_report</h1>
					</div>
					<hr/>
					<div className="row mb-1">
						<div className="col-8">
							<h4 className="text-info">enter driver code: </h4>
						</div>
						<div className="col">
							<input type="number" className="form-control text-light bg-dark border-0" min="0" id="driver_code"/>
						</div>
					</div>
					<hr/>
					<div className="row mb-2">
						<div className="col-5">
							<h4 className="text-info">driver name: </h4>
						</div>
						<div className="col">
							<input className="form-control text-light bg-dark border-0" type="text" id="driver_name"/>
						</div>
						
					</div>
					<hr/>
					<div className="row mb-3">
						
						<h4 className="text-info">enter report text:</h4>
						
					</div>
					
					<div className="row d-flex justify-content-center">
						<div className="col-12">
							<textarea className="form-control text-light bg-dark border-0" id="report_text"></textarea>
						</div>
						
					</div>
					
					<div className="row mt-3 mb-3">
						<div className="col-8 d-grid">
							<button className="btn btn-primary" id="add_new_report" onClick={this.add_new_report}>save report</button>
						</div>
						<div className="col-4 d-flex justify-content-end">
							<button className="btn btn-outline-danger" id="discard" onClick={this.discard}>discard</button>
						</div>
					</div>
				</div>
			</div>
				
		)
	}
}

export default NewReport;