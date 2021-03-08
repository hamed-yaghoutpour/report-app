<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>report app v1!</title>
<link rel="icon" type="image/jpg" href="../common/logo-final-2.jpg">
<link rel="stylesheet" href="../common/common.css">
<link rel="stylesheet" href="select_driver.css">
<script src="../common/jquery-3.5.1.js"></script>
<script src="../common/vue.js"></script>
<script src="select_driver.js"></script>
</head>
<body>
<?php include_once("../templates/header.php") ?>

<div style="width:100%;height:100%;background-color:aqua;position: fixed;"></div>

<div id="container">
<?php
include_once("../common/main.php");
$sql = "
	select * from drivers order by driver_code asc
";
$results = mysqli_query($conn,$sql);
while($row = mysqli_fetch_assoc($results)){
	$driver_name = $row["first_name"]." ".$row["last_name"];
	$driver_code = (int)$row["driver_code"];
	echo "
		<driver
		v-bind:driver_code='$driver_code'
		driver_name='$driver_name'
		></driver>
	";
};
?>


	
	

</div>
</body>
</html>
