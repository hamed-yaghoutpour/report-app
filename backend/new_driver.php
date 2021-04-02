<?php
include("db.php");
include("db_config.php");

function new_driver(
	$db,
	$first_name,
	$last_name,
	$driver_code,
	$mobile_phone_number,
	$home_phone_number,
	$address,
	$extra_info
){
	$sql = "
		insert into drivers (first_name,last_name,driver_code,mobile_phone_number,home_phone_number,address,extra_info)
		values ('$first_name','$last_name',$driver_code,'$mobile_phone_number','$home_phone_number','$address','$extra_info');
	";
	mysqli_query($db->connection,$sql);
};
$driver_code = (int)$_REQUEST["input_1"];
$first_name = $_REQUEST["input_2"];
$last_name = $_REQUEST["input_3"];
$address = $_REQUEST["input_4"];
$mobile_number = (int)$_REQUEST["input_5"];
$home_number = (int)$_REQUEST["input_6"];
$info = $_REQUEST["input_7"];


$db = new db($connection_mode);
new_driver($db,$first_name,$last_name,$driver_code,$mobile_number,$home_number,$address,$info);