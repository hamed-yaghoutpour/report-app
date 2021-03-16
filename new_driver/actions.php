<?php
include_once("../common/main.php");
	
$driver_code = (int)$_REQUEST["input_1"];
$first_name = $_REQUEST["input_2"];
$last_name = $_REQUEST["input_3"];
$address = $_REQUEST["input_4"];
$mobile_number = (int)$_REQUEST["input_5"];
$home_number = (int)$_REQUEST["input_6"];
$info = $_REQUEST["input_7"];
new_driver($first_name,$last_name,$driver_code,$mobile_number,$home_number,$address,$info);