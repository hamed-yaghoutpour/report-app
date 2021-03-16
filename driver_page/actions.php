<?php

include_once("../common/main.php");
$driver_code = (int)$_REQUEST["driver_code"];
class db{
	public $driver_code;
	public function __construct($driver_code){
		$this->driver_code = $driver_code;
	}
	public function user_info(){
		global $conn;
		$sql = "
			select * from drivers where driver_code = $this->driver_code
		";
		$results = mysqli_query($conn,$sql);
		return mysqli_fetch_assoc($results);
	}
	public function user_reports(){ //it returns an array of rows of reports table:
		global $conn;
		$sql = "
			select * from reports where driver_code = $this->driver_code
			";
		$results = mysqli_query($conn,$sql);
		 
		$reports = [];
		while ($report = mysqli_fetch_assoc($results)){
			array_push($reports,$report);
		};
		return $reports;
	}
	public function user_services(){ //it returns an array of rows of services table:
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
    public function user_info_as_json(){
        $return_value = [
            "dirver_code" => $user_info["driver_code"],
            "driver_full_name" => $user_info["first_name"]." ".$user_info["last_name"]و
            "mobile_phone_number" => $user_info["mobile_phone_number"],
            "home_phone_number" => $user_info["home_phone_number"],
            "address" => $user_info["address"],
            "extra_info" => $user_info["extra_info"],
            "services_count" => count($db->user_reports())
        ];
        echo json_encode($return_value);
    }
    public function reports_as_json(){
        $return_value = [];
        foreach($this->user_reports() as $report){
            $return_value[] = [
                "report_text" => $report["report_text"];
			    "report_id" => $report["id"];
			    "seen_status" => $report["seen_status"];
            ];
        };
        echo json_encode($return_value);
    }
};
$db = new db($driver_code);

