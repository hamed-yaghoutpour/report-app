import { Component } from "react"
import "./styles.css"
import ReportOption from "../ReportOption"
//import api from '../../apiClass.js'
//var myApi = new api()
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
}) */


class Reports extends Component{
	constructor(props){
		super(props)
		this.state = {
			reports:[]
		}
	}
	static getDerivedStateFromProps(props,state){
		return {
			reports:[
				{
					report_code:1,
					title:'an open report ',
					info:'some info',
					is_open:true
					
				},
				{
					report_code:2,
					title:'an close report ',
					info:'some info',
					is_open:false
					
				},
				{
					report_code:3,
					title:'an open report ',
					info:'some info',
					is_open:true
					
				},

			]
		}
	}
	render(){
		return (
			<div className="container-fluid">
				<div className="row mt-2">
					<div className="col">
						<h1 className="bg-primary text-light r-title">all reports</h1>
					</div>
				</div>
				
				<hr className="bg-light"/>
				<div id="reports">
					{this.state.reports.map((report,index)=>{
						return (
							<ReportOption 
							key={index}
							report_code={report.report_code}
							info={report.info}
							title={report.title}
							/>
						)
					})}
				</div>
					
				<div className="row mt-5">
					<div className="col">
						<h1 className="bg-primary text-light r-title">open reports</h1>
					</div>
				</div>
				
				<hr className="bg-light"/>
				<div id="open_reports">
					{this.state.reports.map((report,index)=>{
						if(report.is_open === false) return null
						return (
							<ReportOption 
							key={index}
							report_code={report.report_code}
							info={report.info}
							title={report.title}
							/>
						)
					})}
				</div>
				
				<div className="row mt-5">
					<div className="col">
						<h1 className="bg-primary text-light r-title">closed reports</h1>
					</div>
				</div>				
				<hr className="bg-light"/>
				<div id="closed_reports">
					{this.state.reports.map((report,index)=>{
						if(report.is_open === true) return null
						return (
							<ReportOption 
							key={index}
							report_code={report.report_code}
							info={report.info}
							title={report.title}
							/>
						)
					})}
				</div>
			</div>
		)
	}
}
export default Reports