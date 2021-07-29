import { Component } from "react"
import "./styles.css"
import ReportOption from "../ReportOption"
var api = require('../../browser_api')


class Reports extends Component{
	constructor(props){
		super(props)
		this.state = {
			reports:[]
		}
		api.get_reports()
		.then(reports=>{
			console.log(reports)
			this.setState({
				reports:reports.map(value => {
					return {
						id:value.id,
						title:value.driver_name,
						info:"some info",
						is_open:value.is_open
					}	
				})
			})
		})
		
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
							id={report.id}
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
							id={report.id}
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
							id={report.id}
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