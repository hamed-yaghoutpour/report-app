<?php
include_once("../common/main.php");
$driver_code = (int)$_GET["driver_code"];
$sql ="
	insert into service_records
	(driver_code) values ('$driver_code')
";
mysqli_query($conn,$sql);

?>