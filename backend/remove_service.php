<?php
include_once("db.php");
include_once("db_config.php");
function remove_serivce($db,$mysql_service_id){
	$sql = "
		delete from service_records
		where id = $mysql_service_id
	";
	mysqli_query($db->connection,$sql);
}
$mysql_service_id = (int)$_REQUEST["mysql_service_id"];
$db = new db($connection_mode);
remove_serivce($db->connection,$mysql_service_id);
