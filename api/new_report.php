<?php
include("db.php");

function new_report($db,$driver_code,$driver_name,$report_text){
	global $db;
	global $db_name;
	global $table_name;
	$return_value = [];
	$sql = "
		insert into $table_name (driver_code,driver_name,report_text) values ($driver_code,'$driver_name','$report_text')
	";
	if($db->query($sql)){
		$return_value["state"] = true;
		
		$sql = "
			select * from $table_name order by id desc limit 1
		";
		$results = $db->query($sql);
		$last_row_id = mysqli_fetch_assoc($results)["id"];
		$return_value["report_code"] = $last_row_id;
		return json_encode($return_value);
	}else{
		$return_value["state"] = false;
		$return_value["report_code"] = "$db->error()";
		return json_encode($return_value);
	};
}

// requests =>
if(
isset($_REQUEST["driver_code"])
){
	$driver_code = (int)$_REQUEST["driver_code"];
	$driver_name = $_REQUEST["driver_name"];
	$report_text = $_REQUEST["report_text"];
	
	echo new_report($db,$driver_code,$driver_name,$report_text);

}