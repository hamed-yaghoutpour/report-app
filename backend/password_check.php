<?php
include("db.php");
include("db_config.php");

function password_check($db,$password){
	$sql = "
		select * from main where key_name='password'
	";
	$results = mysqli_query($db->connection,$sql);
	$row = mysqli_fetch_assoc($results);
	if ($password == $row["key_value"]){
		echo "yes";
	}else{
		echo "no";
	};
};
$db = new db($connection_mode);
password_check($db,$_REQUEST["password"])
//add support for multi users
