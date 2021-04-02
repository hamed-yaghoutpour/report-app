<?php 
include("db.php");
include("db_config.php");


function reports_count($db,$driver_code){
	$sql = "
		select * from reports where driver_code = $driver_code
	";
	$results = mysqli_query($db->connection,$sql);
	$counter = mysqli_num_rows($results);
	return $counter;
};

$driver_code = (int)$_REQUEST["driver_code"];
$db = new db($connection_mode);
echo reports_count($db,$driver_code);