function validate_json(data){
	//for prevent json parse error
    let return_value;
    try{
        JSON.parse(data)
        return_value = true;
    }catch(err){
        return_value = false;
    }
    return return_value;
}

let api = {}

api.new_report=function(driver_code,driver_name,report_text){
	// seccess => return added report id 
	// failure => return false 
	let return_value = false;
	$.ajax({
		url:"./backend/new_report.php",
		async:false,
		data:{
			driver_code,
			driver_name,
			report_text
		},
		success:function(data){
			console.log(data)
			if(!validate_json(data)) return ; //for prevent json parse error
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
		url:"./backend/get_reports.php",
		async:false,
		success:function(data){	
			console.log(data)
			if(!validate_json(data)) return ; //for prevent json parse error
			return_value = JSON.parse(data)
		}
	})
	return return_value;
}
api.get_report=function(report_code){
// return report data on success
// return false on faliure
	let return_value = false;
	$.ajax({
		url:"./backend/get_report.php",
		async:false,
		data:{
			report_code
		},
		success:function(report_data){
			console.log(report_data)
			if(!validate_json(report_data)) return ; //for prevent json parse error
			return_value = JSON.parse(report_data)
		}
	})
	return return_value;
}
api.reset_factory = function(success,failure){

	$.ajax({
		url:"./backend/reset_factory.php",
		success:function(data){
			console.log(data)
			if(!validate_json(data)) return ; //for prevent json parse error
			let state = JSON.parse(data).state;
			if(state == true){success()}
		}
	})
}
api.change_password = function(old_password,new_password,success,failure){
	
	$.ajax({
		url:"./backend/change_password.php",
		data:{
			old_password, //shorthand for old_password:old_password
			new_password
		},
		success:function(data){
			console.log(data)
			if(!validate_json(data)) return ; //for prevent json parse error
			let state = JSON.parse(data)["state"];
			if(state == true) success();
		}
	})
}