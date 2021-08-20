import { Component } from "react"
import "../../common/lib/bootstrap.min.css"
import "./styles.css"
import ReportOption from "../ReportOption"
var api = require('../../browser_api')


class Reports extends Component{
	constructor(props){
		super(props)
		this.state = {
			reports_to_show:[],
			reports_category:"all_reports"
		}
		api.get_reports()
		.then(reports=>{
			this.setState({
				reports_to_show:reports.map(value => {
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
	next_category = () =>{
	
		if(this.state.reports_category === "all_reports"){
			api.get_reports()
			.then(reports=>{
				reports = reports.filter(report=>{
					return report.is_open
				})
				this.setState({
					reports_to_show:reports.map(value => {
						
						return {
							id:value.id,
							title:value.driver_name,
							info:"some info",
							is_open:value.is_open
						}	
					})
				})
				this.setState({
					reports_category:'open_reports'
				})
			})
		}
		if(this.state.reports_category === "open_reports"){
			api.get_reports()
			.then(reports=>{
				reports = reports.filter(report=>{
					return !report.is_open
				})
				this.setState({
					
					reports_to_show:reports.map(value => {
						
						return {
							id:value.id,
							title:value.driver_name,
							info:"some info",
							is_open:value.is_open
						}	
					})
				})
				this.setState({
					reports_category:'closed_reports'
				})
			})	
		}
		if(this.state.reports_category === "closed_reports"){
			api.get_reports()
			.then(reports=>{
				this.setState({
					reports_to_show:reports.map(value => {
						return {
							id:value.id,
							title:value.driver_name,
							info:"some info",
							is_open:value.is_open
						}	
					})
				})
			})
			this.setState({
				reports_category:'all_reports'
			})
		}
		
	
	}
	reports_category_in_persian = ()=>{
		if(this.state.reports_category=== "all_reports"){
			return "همه گزارش ها"
		}else if(this.state.reports_category=== "open_reports"){
			return "رسیدگی نشده ها"
		}else if(this.state.reports_category=== "closed_reports"){
			return "رسیدگی شده ها"
		}
	}
	render(){
		return (
			<div className="container-fluid">
				<div className="row dir-rtl">
					<div className="col-9">
						<h3 className="r-title">{this.reports_category_in_persian()}</h3>
					</div>
					<div title="دسته بندی بعدی"  className="align-items-center col-3 d-flex justify-content-center" id="sort-icon-container">
						
						<svg onClick={this.next_category} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
							<path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
						</svg>
					
					</div>
				</div>
				
				<hr className="bg-light mt-2"/>
				<div id="reports">
					{this.state.reports_to_show.map((report,index)=>{
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
