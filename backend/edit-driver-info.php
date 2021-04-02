<?php
include_once("../common/main.php");
$driver_code = (int)$_GET["driver_code"];
include_once("edit_driver_info_js.php");
$sql = "
	select * from drivers where driver_code = $driver_code
";
$results = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($results);