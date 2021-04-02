<?php
include("db.php");
include("db_config.php");

function new_report($db,$driver_code,$report_text){
	$sql = "
		insert into reports (driver_code,report_text,seen_status) 
		values ($driver_code,'$report_text','false');
	";
	mysqli_query($db->connection,$sql);
	$sql = "
		update drivers
		set reports_count = reports_count+1
		where driver_code = $driver_code
	";
	mysqli_query($db->connection,$sql);
};
$db = new db($connection_mode);
$driver_code = (int)$_REQUEST["driver_code"];
$report_text = (int)$_REQUEST["report_text"];

new_report($db,$driver_code,$report_text);
