import { Component } from "react"
import "./styles.css"

class Settings extends Component{
	reset_factory(){
		//myApi.reset_database()
		window.location.assign('#/new_report')
	}
	render(){
		return (
			<div id="settings">
				<div className="container-fluid">
					<div className="row mt-2">
						<h1 className="text-primary">settings</h1>
					</div>
				</div>
				<hr/>
				<div className="row mb-2 mx-1">
					<div className="col-6">
						<button className="btn btn-info" id="reset_factory" onClick={this.reset_factory}>reset factory</button>
					</div>
				</div>
				
			</div>
	
		)
	}
}

export default Settings