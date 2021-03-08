<?php
include_once("../common/main.php");
$driver_code = (int)$_GET["driver_code"];
$first_name = $_GET["first_name"];
$last_name = $_GET["last_name"];
$address = $_GET["address"];
$home_phone_number = $_GET["home_phone_number"];
$mobile_phone_number = $_GET["mobile_phone_number"];
$extra_info = $_GET["extra_info"];
$sql = "
update drivers
set first_name = '$first_name'
where driver_code = $driver_code;

update drivers
set last_name = '$last_name'
where driver_code = $driver_code;

update drivers
set address = '$address'
where driver_code = $driver_code;

update drivers
set home_phone_number = '$home_phone_number'
where driver_code = $driver_code;

update drivers
set mobile_phone_number = '$mobile_phone_number'
where driver_code = $driver_code;

update drivers
set extra_info = '$extra_info'
where driver_code = $driver_code;
";

mysqli_multi_query($conn,$sql);
?>