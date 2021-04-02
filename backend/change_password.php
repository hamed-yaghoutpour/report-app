<?php
include("db.php");
include("db_config.php");
function change_password($db,$new_password){
	$sql = "
		update $db->db_name set key_value = '$new_password' where key_name = 'password'
	"
	mysqli_query($db->connection,$sql);
}
$db = new db($connection_mode);
$new_password = $_REQUEST["new_password"];
change_password($db,$new_password);