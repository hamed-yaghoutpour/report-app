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

api.new_report= function(driver_code,driver_name,report_text){
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
	return new Promise(res=>{
		//success => return reports as array
		// failure => return false
		$.ajax({
			url:"./backend/get_reports.php",
			success:function(data){	
				console.log(data)
				if(!validate_json(data)) return ; //for prevent json parse error
				res(JSON.parse(data))
			}
		})
	})
	
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
api.toggle_report_status= function(report_code){
	let return_value = false;
	$.ajax({
		url:"./backend/toggle_report_status.php",
		async:false,
		data:{
			report_code
		},
		success:function(data){
			console.log(data)
			if(!validate_json(data)) return ; //for prevent json parse error
			let state = JSON.parse(data)["state"];
			if(state == true) return_value = true;
		}
	})
	return return_value;
}
api.toggle_language = function(){
	let return_value = false;
	$.ajax({
		url:"./backend/toggle_language.php",
		async:false,
		success:function(data){
			if(data == "ok"){
				return_value = true;
			}
		}
	})
	return return_value;
}
api.get_language = function(){
	let retur_value = false;
	$.ajax({
		url:"./backend/get_language.php",
		async:false,
		success:function(data){
		
			return_value = data;
		
		}
	})
	return return_value;
}