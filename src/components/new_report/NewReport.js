import "./styles.css"
import "../../common/common.css"
import { Component } from "react"
var api = require('../../browser_api')

class NewReport extends Component{
	
	discard(){
		document.getElementById('driver_code').value = ""
		document.getElementById('driver_name').value = ""
		document.getElementById('report_text').value = ""
	}
	add_new_report(){
		var driver_code = Number(document.getElementById('driver_code').value)
		var driver_name = document.getElementById('driver_name').value
		var report_text = document.getElementById('report_text').value

		api.new_report(driver_code,driver_name,report_text)
		.then(was_ok=>{
			if(was_ok){
				console.log('done')
			}
		})
		
	}
	render(){
		return (
			<div id="new-report">
				<div className="container-fluid">
					<div className="row mt-2 dir-rtl">
						<h1 style={{color:'aqua'}}>ثبت گزارش جدید</h1>
					</div>
					<hr/>
					<div className="row mb-1 dir-rtl">
						<div className="col-8">
							<h4 style={{color:'white'}}>کد راننده مورد نظر :</h4>
						</div>
						<div className="col">
							<input type="number" className="form-control border-0" min="0" id="driver_code"/>
						</div>
					</div>
					<hr/>
					<div className="row mb-2 dir-rtl">
						<div className="col-6">
							<h4 style={{color:'white'}}>نام کامل راننده :</h4>
						</div>
						<div className="col">
							<input className="form-control border-0" type="text" id="driver_name"/>
						</div>
						
					</div>
					<hr/>
					<div className="row mb-3 dir-rtl">
						
						<h4 style={{color:'white'}}>متن گزارش را وارد کنید :</h4>
						
					</div>
					
					<div className="row d-flex justify-content-center">
						<div className="col-12">
							<textarea className="form-control  border-0 dir-rtl" id="report_text"></textarea>
						</div>
						
					</div>
					
					<div className="row mt-3 mb-3 px-3">
						<div className="col-8 g-0">
							<button className="btn btn-primary w-100" id="add_new_report" onClick={this.add_new_report}>ثبت نهایی گزارش</button>
						</div>
						<div className="col-4 g-0 justify-content-end">
							<button className="btn btn-outline-danger mx-2 w-100" id="discard" onClick={this.discard}>بی خیال</button>
						</div>
					</div>
				</div>
			</div>
				
		)
	}
}

export default NewReport;