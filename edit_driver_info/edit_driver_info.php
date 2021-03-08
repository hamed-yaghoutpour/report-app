<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>report app v1!</title>
<link rel="icon" type="image/jpg" href="../common/logo-final-2.jpg">
<link rel="stylesheet" href="../common/common.css">
<link rel="stylesheet" href="edit_driver_info.css">
<script src="../common/jquery-3.5.1.js"></script>
<link href="../common/bootstrap-4.5.3-dist/css/bootstrap.css" rel="stylesheet">
</head>
<body>
<?php 

include_once("../templates/header.php");
include_once("../common/main.php");
$driver_code = (int)$_GET["driver_code"];
include_once("edit_driver_info_js.php");
$sql = "
	select * from drivers where driver_code = $driver_code
";
$results = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($results);
?>
<div class="container-fluid">
<div class="row" style="width:100%;position:relative;height:100px;"></div>
<div class="row" style="direction:rtl;">
	<div class="col-1">
	</div>
	<div class="col-4">
		<h1 class="main_title">ویرایش اطلاعات راننده</h1>
	</div>
	
</div>
<div class="row justify-content-center">
	<div class="col-10">
		<table class="table table-striped table-info">
		<tr>
			<th>-</th>
			<th>مقدار قدیمی</th>
			<th>مقدار جدید</th>
		</tr>
		<tr>
			<th>شماره راننده</th>
			<td><?php echo $driver_code ?></td>
		</tr>
		<tr>
			<th>نام</th>
			<td><?php echo $row['first_name'] ?></td>
			<td><input id="first_name_input"></td>
		</tr>
		<tr>
			<th>نام خانوادگی</th>
			<td><?php echo $row['last_name'] ?></td>
			<td><input id="last_name_input"></td>
		</tr>
		<tr>
			<th>آدرس</th>
			<td><?php echo$row['address'] ?></td>
			<td><input id="address_input"></td>
		</tr>
		<tr>
			<th>شماره تلفن همراه</th>
			<td><?php $row['mobile_phone_number'] ?></td>
			<td><input id="mobile_phone_number_input"></td>
		</tr>
		<tr>
			<th>شماره تلفن ثابت</th>
			<td><?php echo $row['home_phone_number'] ?></td>
			<td><input id="home_phone_number_input"></td>
		</tr>
		<tr>
			<th>توضیحات بیشتر درباره راننده</th>
			<td><?php echo $row['extra_info'] ?></td>
			<td><input id="extra_info_input"></td>
		</tr>
		</table>
	
	</div>
	
</div>
<div class="row justify-content-center">
	<div class="col-10">
		<button class="submit btn btn-primary">ثبت نهایی اطلاعات</button>
	</div>
	
</div>
<div class="row">
	<div class="col-12" style="height:150px">
	</div>
</div>
</div>
</body>
</html>
