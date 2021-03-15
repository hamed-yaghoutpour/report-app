<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>report app v1!</title>
<link rel="icon" type="image/jpg" href="../common/logo-final-2.jpg">
<link rel="stylesheet" href="../common/common.css">
<link rel="stylesheet" href="new_driver.css">
<script src="../common/jquery-3.5.1.js"></script>
<script src="new_driver.js"></script>
</head>
<body>
<?php include_once("../templates/header.php") ?>
<?php
if(
	isset($_GET["input_1"])
){
	echo "there is";
	include_once("../common/main.php");
	
	$driver_code = (int)$_GET["input_1"];
	$first_name = $_GET["input_2"];
	$last_name = $_GET["input_3"];
	$address = $_GET["input_4"];
	$mobile_number = (int)$_GET["input_5"];
	$home_number = (int)$_GET["input_6"];
	$info = $_GET["input_7"];
	new_driver($first_name,$last_name,$driver_code,$mobile_number,$home_number,$address,$info);
	echo "
		<script>
		window.location.assign('../home/home.php');
		</script>
	";
};



?>



	<h1 style="position:relative;margin:20px;color:darkblue;">ثبت راننده جدید</h1>
	<h2 style="color:blue;margin-top:5px;">:اطلاعات راننده جدید را وارد کنید</h2>
	<input type="text" name="input_1" class="t1" placeholder="شماره راننده">
	<input type="text" name="input_2" class="t1" placeholder="نام راننده">
	<input type="text" name="input_3" class="t1" placeholder="نام خانوادگی">
	<input type="text" name="input_4" class="t1" placeholder="آدرس">
	<input type="text" name="input_5" class="t1" placeholder="شماره تلفن همراه">
	<input type="text" name="input_6" class="t1" placeholder="شماره منزل">
	<input type="text" name="input_7" class="t1" style="height:100px;" placeholder="توضیحات اضافه درباره این راننده">

	<button type="submit" id="submit"><h3 class="no_margin no_padding">ثبت اطلاعات</h3></button>




</body>
</html>
