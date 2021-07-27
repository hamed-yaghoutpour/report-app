import { Component } from "react";

class Result extends Component{
	constructor(props){
		super(props)

		//var loading_message = "loading ..."
		/* this.state = {
			id:loading_message,
			driver_code:loading_message,
			driver_name:loading_message,
			is_open:true,
			report_text:loading_message,
			report_code:loading_message
		} */
		this.state = {
			id:1,
			driver_code:12,
			driver_name:'hamed',
			is_open:true,
			report_text:'hamed is here and will stay here',
			report_code:123
		}
	}
	/* static getDerivedStateFromProps(props,state){
		//get data from api by using props.report_code
		return {}
		return {
			id:1,
			driver_code:12,
			driver_name:'hamed',
			is_open:true,
			report_text:'hamed is here and will stay here',
			report_code:123
		}
	} */
	toggle_report_status_button_onclick = () =>{
		/* make call to api, then change state on success */
		this.setState({is_open:!this.state.is_open})
		
	}
	render(){
		return (
			<div id="result">
				<div className="row">
					<h1 className="text-primary mt-2" >your report saved !</h1>
				</div>
				<hr/>
				<div className="row">
					<div className="col-6">
						<h5 className="text-info">report id:</h5>
					</div>
					<div className="col">
						<h5 className="text-warning" id="report_code" >{this.state.report_code}</h5>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-6">
						<h5 className="text-info">driver name:</h5>
					</div>
					<div className="col">
						<h5 className="text-warning" id='driver_name'>{this.state.driver_name}</h5>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-6">
						<h5 className="text-info" >driver code:</h5>
					</div>
					<div className="col">
						<h5 className="text-warning" id="driver_code">{this.state.driver_code}</h5>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-6">
						<h5 className="text-info">report text:</h5>
					</div>
					<div className="col">
						<h5 className="text-warning" id="report_text">{this.state.report_text}</h5>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-4">
					<h5 className="text-info">status:</h5>
					</div>
					<div className="col">
					
					<h5 className="text-warning" id="status_text">{this.state.is_open? "report is open":"report is closed"}</h5>
					
					</div>
					<div className="col">
					<button className="btn btn-dark btn-sm" id="toggle_button" onClick={this.toggle_report_status_button_onclick}>toggle</button>
					</div>
				</div>
				
				<div className="row ml-1 mb-3 mt-4">
					<div className="col-4  ml-1">
						<button className="btn btn-info"><a href="../reports/index.html">go back</a></button>
					
					</div>
				</div>	
			</div>
	
		)
	}
}

window.onload = function(){
  /*   var report_to_show = myApi.parsed_database().reports[Number(localStorage.getItem('report_code')) -1 ]
    els = {
        report_code:document.getElementById('report_code'),
        driver_name:document.getElementById('driver_name'),
        driver_code:document.getElementById('driver_code'),
        report_text:document.getElementById('report_text'),
        status_text:document.getElementById('status_text'),
        

    }
    els.report_code.innerHTML = report_to_show.id
    els.driver_name.innerHTML = report_to_show.driver_name
    els.driver_code.innerHTML = report_to_show.driver_code
    els.report_text.innerHTML = report_to_show.report_text
    if(report_to_show.is_open){
        els.status_text.innerHTML = "not checked"
    }else{
        els.status_text.innerHTML = "checked"
    }
    document.getElementById("toggle_button").onclick = function(){
        myApi.toggle_report_status(Number(localStorage.getItem('report_code')))
        report_to_show = report_to_show = myApi.parsed_database().reports[Number(localStorage.getItem('report_code')) -1]
        
        els = {
            report_code:document.getElementById('report_code'),
            driver_name:document.getElementById('driver_name'),
            driver_code:document.getElementById('driver_code'),
            report_text:document.getElementById('report_text'),
            status_text:document.getElementById('status_text'),
            
    
        }
        if(report_to_show.is_open){
            els.status_text.innerHTML = "not checked"
        }else{
            els.status_text.innerHTML = "checked"
        }
    } */
}
export default Result