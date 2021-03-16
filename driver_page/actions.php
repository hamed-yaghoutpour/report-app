<?php

include_once("../common/main.php");

function user_info($driver_code){
	global $conn;
	$sql = "
		select * from drivers where driver_code = $driver_code
	";
	$results = mysqli_query($conn,$sql);
	return mysqli_fetch_assoc($results);
}
function user_reports($driver_code){ //it returns an array of rows of reports table:
	global $conn;
	$sql = "
		select * from reports where driver_code = $driver_code
		";
	$results = mysqli_query($conn,$sql);
		
	$reports = [];
	while ($report = mysqli_fetch_assoc($results)){
		$reports[] = $report;
	};
	return $reports;
}
function user_services($driver_code){ //it returns an array of rows of services table:
	global $conn;
	$sql = "
		select * from service_records where driver_code = $this->driver_code
		";
	$results = mysqli_query($conn,$sql);
	$services = [];
	while ($row = mysqli_fetch_assoc($results)){
		array_push($services,$row);
	};
	return $services;
}
function user_info_as_json($driver_code){
	$return_value = user_info($driver_code);
	$return_value['services_count'] = count(user_reports($driver_code));
	return json_encode($return_value);
}
function reports_as_json($driver_code){
	$return_value = [];
	foreach(user_reports($driver_code) as $report){
		$return_value[] = [
			"report_text" => $report["report_text"];
			"report_id" => $report["id"];
			"seen_status" => $report["seen_status"];
		];
	};
	return $return_value;
}
function user_services_as_json($driver_code){
	$return_value = [];
	$counter = 1;
	foreach(user_services($driver_code) as $service){
		$return_value[] = [
			"time" => $service["time"];
			"id" => $report["id"];
			"counter" => $counter;
		];
		$counter++;
	};
	return $return_value;
}


//answering requests : 

if(
	isset($_REQUEST["action"])
){
	$action = $_REQUEST["action"];
	$driver_code = (int)$_REQUEST["driver_code"];
	switch ($action) {
		case 'update_info':
			echo json_encode(
				user_info_as_json($driver_code)
			);
			break;
		case 'update_reports': 
			echo json_encode(
				reports_as_json($driver_code);
			);
			break;
		case 'update_services':
			echo json_encode(
				user_services_as_json($driver_code);
			)
			break
	}
}