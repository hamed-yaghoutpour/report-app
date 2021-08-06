import { Component } from "react";
import "../../common/common.css"
var api = require('../../browser_api')


class Result extends Component{
	constructor(props){
		super(props)
		var loading_message = "loading ..."
		this.state = {
			driver_code:loading_message,
			driver_name:loading_message,
			is_open:true,
			report_text:loading_message,
			report_code:Number(this.props.report_code)
		}
		
		
	
	}
	componentDidMount(){
		api.get_reports().then(reports=>{
			reports.forEach(report=>{
				if(report.id === Number(this.props.report_code)){
					this.setState({
						report_code:report.id,
						driver_code:report.driver_code,
						driver_name:report.driver_name,
						is_open:report.is_open,
						report_text:report.report_text,
					})
				}
			})
		})
	}
	go_back_button_handler(){
		window.location.assign('#/reports')
	}
	toggle_report_status_button_onclick = () =>{
		api.toggle_report_status(Number(this.props.report_code))
		.then(bool=>{
			if(!bool) return 
			this.setState({is_open:!this.state.is_open})
		})
	}
	render(){
		return (
			<div id="result" className="container-fluid">
				<div className="row dir-rtl">
					<h1 className="text-light mt-2" >با موفقیت ثبت شد !</h1>
				</div>
				<hr/>
				<div className="row dir-rtl">
					<div className="col-6">
						<h5 className="text-info">کد گزارش :</h5>
					</div>
					<div className="col">
						<h5 className="text-warning" id="report_code" >{this.state.report_code}</h5>
					</div>
				</div>
				<hr/>
				<div className="row dir-rtl">
					<div className="col-6">
						<h5 className="text-info">نام راننده :</h5>
					</div>
					<div className="col">
						<h5 className="text-warning" id='driver_name'>{this.state.driver_name}</h5>
					</div>
				</div>
				<hr/>
				<div className="row dir-rtl">
					<div className="col-6">
						<h5 className="text-info" >کد راننده :</h5>
					</div>
					<div className="col">
						<h5 className="text-warning" id="driver_code">{this.state.driver_code}</h5>
					</div>
				</div>
				<hr/>
				<div className="row dir-rtl">
					<div className="col-6">
						<h5 className="text-info">متن گزارش :</h5>
					</div>
					<div className="col">
						<h5 className="text-warning" id="report_text">{this.state.report_text}</h5>
					</div>
				</div>
				<hr/>
				<div className="row dir-rtl">
					<div className="col-4">
					<h5 className="text-info">وضعیت گزارش :</h5>
					</div>
					<div className="col">
					
					<h5 className="text-warning" id="status_text">{this.state.is_open? "به گزارش رسیدگی نشده است":"قبلا به گزارش رسیدگی شده است"}</h5>
					
					</div>
					<div className="col">
					<button className="btn btn-dark btn-sm" id="toggle_button" onClick={this.toggle_report_status_button_onclick}>تغییر وضعیت</button>
					</div>
				</div>
				
				<div className="row ml-1 mb-3 mt-4">
					<div className="col  ml-1">
						<button className="btn btn-info w-100" onClick={this.go_back_button_handler}>بازگشت</button>
					
					</div>
				</div>	
			</div>
	
		)
	}
}
export default Result