let api = {
	new_report:function(driver_code,driver_name,report_text){
		// it return report code for success and false for failure
		let return_value = false;
		$.ajax({
			url:"new_report.php",
			async:false,
			data:{
				driver_code, // short for driver_code:driver_code
				driver_name,
				report_text
			},
			success:function(json){
				let data = JSON.parse(json)
				
				if(data.state == true){
					return_value = data.report_code
				}
			}
		})
		return return_value;
	},
	get_reports:function(){
		let return_value = false;
		$.ajax({
			url:"get_reports.php",
			async:false,
			success:function(data){
				return_value = JSON.parse(data)
			}
		})
		return return_value;
	},
	get_report:function(report_id){
		let return_value;
		$.ajax({
			url:"get_report.php",
			async:false,
			data:{
				report_id
			},
			success:function(data){
				return_value = JSON.parse(data)
			}
		})
		return return_value;
	}
}
