let api = {}

api.new_report=function(driver_code,driver_name,report_text){
	// seccess => return added report id 
	// failure => return false 
	let return_value = false;
	$.ajax({
		url:"new_report.php",
		async:false,
		data:{
			driver_code, // short for driver_code:driver_code
			driver_name,
			report_text
		},
		success:function(data){
			if(JSON.parse(data)["state"] == true){
				return_value = JSON.parse(data)["report_code"];
			}
			
		}
	})
	return return_value;
}
api.get_reports=function(){
	//success => return reports as array
	// failure => return false
	let return_value = false;
	$.ajax({
		url:"get_reports.php",
		async:false,
		success:function(data){
			if(JSON.parse(data)["state"] == true){
				return_value = JSON.parse(data)
			}
			
		}
	})
	return return_value;
}
api.get_report=function(report_id){
// return report data on success
// return false on faliure
	let return_value = false;
	$.ajax({
		url:"get_report.php",
		async:false,
		data:{
			report_id
		},
		success:function(data){
			if(JSON.parse(data)["state"] == true ) {
				return_value = JSON.parse(data)["report_data"]
			}
			
		}
	})
	return return_value;
}
api.reset_factory = function(){
// return true on success
// return false on faliure
	let return_value = false;
	$.ajax({
		url:"change_password.php",
		success:function(data){
			let state = JSON.parse(data)["state"];
			if(state == true) return_value = true;
		}
	})
	return return_value;
}
api.change_password = function(old_password,new_password){
	// return true on success
	// return false on faliure
	let return_value = false;
	$.ajax({
		url:"change_password.php",
		data:{
			old_password, //shorthand for old_password:old_password
			new_password
		},
		success:function(data){
			let state = JSON.parse(data)["state"];
			if(state == true) return_value = true;
		}
	})
	return return_value;
}