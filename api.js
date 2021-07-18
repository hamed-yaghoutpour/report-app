const fs = require('fs')
class api{
	constructor(database_path){
		this.database_path = database_path
		this.prepare_database()

	}
	prepare_database(){
		if(fs.existsSync(this.database_path)){
			//no need for preparing database file =>
			return true
		}
		tmp = {reports:[]}
		fs.writeFileSync(this.database_path,JSON.stringify(tmp))
	}
	write_text_to_database(text){
		fs.writeFileSync(this.database_path,text)
	}
	parsed_database(){
		return JSON.parse(fs.readFileSync(this.database_path,'utf8'))
	}
	new_report(driver_code,driver_name,report_text){
		if(this.parsed_database().reports.length == 0){var id = 1}else{var id = this.parsed_database().reports.length}
		new_report = {driver_code,driver_name,report_text,id,is_open:true}
		this.write_text_to_database(JSON.stringify(this.parsed_database().reports.push(new_report)))
	}
	get_reports(){
		return this.parsed_database().reports
	}
	get_open_reports(){
		return this.get_reports().filter(report =>{return report.is_open})
	}
	get_closed_reports(){
		return this.get_reports().filter(report =>{return !report.is_open})
	}
	toggle_report_status(){
		parsed_database = this.parsed_database()
		this.filter
	}
}
class api_test{
	all_tests_are_passed(){
		var tests = [
			this.prepare_database(),
			write_text_to_database(),
			parsed_database(),
			new_report(),
			get_reports(),
			get_open_reports(),
			get_closed_reports(),
			toggle_report_status()
		]
		var tests_count = tests.length
		var passed_tests_count = 0
		tests.forEach(test=>{
			passed_tests_count ++
		})
		if(tests_count == parsed_tests_count){
			return true
		}else{
			return false
		}
	}
	prepare_database(){
		api = new api('tests.txt')
		file_contents = fs.readFileSync('tests.txt','utf8')
		file_parsed_contents = JSON.parse(file_contents)
		if(tpyeof file_parsed_contents.reports != "undefined"){
			return true
		}else{
			return false
		}
	}
	write_text_to_database(){
		api = new api('t.txt')
		api.write_text_to_database('hamed')
		if(fs.readFileSync('t.txt','utf8') == 'hamed'){
			return true
		}else{
			return false
		}
	}
	parsed_database(){
		api = new api('x.txt')
		fs.writeFileSync('x.txt',JSON.stringify({name:'hamed'}))
		parsed_data = api.parsed_database()
		if(parsed_data.name == "hamed"){
			return true
		}else{
			return false
		}
		
	}
	new_report(){
			
	}
	get_reports(){
		
	}
	get_open_reports(){
	
	}
	get_closed_reports(){
		
	}
	toggle_report_status(){
		
	}
}
