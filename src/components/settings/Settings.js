import "./styles.css"
export function reset_factory(){
	//myApi.reset_database()
	window.location.replace('../new_report/index.html')
}

function Settings(props){

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
					<button className="btn btn-info" id="reset_factory" onClick={reset_factory}>reset factory</button>
				</div>
				
			</div>
			
			
		</div>


    )
}

export default Settings