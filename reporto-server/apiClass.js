const fs = require('fs')

class api{
	/* default database file path
	which we work with */
	db_path = "./database.db"
	constructor () {
		this.prepare_for_first_run()
	}
	prepare_for_first_run(){
		if(!fs.existsSync(this.db_path)){
			var empty_file_structure = {
				reports:[]
			}
			fs.writeFileSync(this.db_path,JSON.stringify(empty_file_structure))
		}
	}
	parsed_database(){
		var file_content = fs.readFileSync(this.db_path,'utf8')
		console.log(__dirname +this.db_path)
		return JSON.parse(file_content)
	}
	write_text_to_database(text) {
		fs.writeFileSync(this.db_path,text)
	}
	new_report(driver_code,driver_name,report_text) {
		var new_report_id = 1
		if (this.parsed_database().reports.length !== 0) {
			new_report_id = this.parsed_database().reports.length + 1
		}
		var new_report = {
			driver_code,
			driver_name,
			report_text,
			is_open: true,
			id: new_report_id
		}
		var temp_cloned = this.parsed_database()
		temp_cloned.reports.push(new_report)
		this.write_text_to_database(JSON.stringify(temp_cloned))
	}
	open_reports(){
		return this.parsed_database().reports.filter(report=>{
			return report.is_open === true
		})
	}
	closed_reports(){
		return this.parsed_database().reports.filter(report=>{
			return report.is_open === false
		})
	}
	get_reports(){
		return this.parsed_database().reports
	}
	toggle_report_status(report_id){
		var cloned_database = this.parsed_database()
		
		//find index of report which we want to change status of
		var report_index = null;
		cloned_database.reports.forEach((report,index)=>{
			if(report.id === report_id){
				report_index = index
			}
		})
		cloned_database.reports[report_index].is_open = !cloned_database.reports[report_index].is_open
		this.write_text_to_database(JSON.stringify(cloned_database))
	}
	reset_database(){
		fs.unlink(this.db_path,()=>{
			
			this.prepare_for_first_run()
		})
	}
}

module.exports = {api:api}