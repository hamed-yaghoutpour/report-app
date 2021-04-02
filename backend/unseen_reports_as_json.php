<?php
include("db.php");
include("db_config.php");

function unseen_reports_as_json($db,$driver_code){
	$sql = "
		select from reports where (driver_code = $driver_code and check_status = 'false')
	"
	$results = mysql_query($db->connection,$sql);
	$json = json_encode(mysqli_fetch_assoc($results));
	return $json;
}
$driver_code = (int)$_REQUEST["driver_code"];
$db = new db($connection_mode);
echo unseen_reports_as_json($db->connection,$driver_code)