<?php
include_once("../common/main.php");
if(isset($_GET["password"])){
	if(password_check($_GET["password"])){
		js_redirect("../home/home.php");
	}else{
		js_alert("رمز عبور نادرست بود، دوباره امتحان کنید");
	};
	
};

?>





<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>report app - login</title>
<link rel="icon" type="image/jpg" href="../common/logo-final-2.jpg">
<link rel="stylesheet" href="../common/common.css">
<link rel="stylesheet" href="login.css">
<script src="../common/jquery-3.5.1.js"></script>
<script src="login.js"></script>
</head>
<body>


<div style="position:fixed;height:100%;width:100%;background-color:aqua;"></div>
<?php include_once("../templates/header.php") ?>
<script>
//for security:
$(document).ready(function(){
	$(".house_icon").off().click(function(){
		alert("شما هنوز وارد سیستم نشده اید");
	});
});
</script>
<div id="login_part">
	<div style="border-radius:90%;background-color:blue;height:100px;width:100px;margin:125px;margin-top:50px;margin-bottom:20px;"></div>
	<h1 style="margin-top:20px;color:darkblue;text-align:center;" class="fa">خوش آمدید</h1>
	<h5 style="margin-top:20px;color:darkblue;text-align:center;" class="fa">رمز پیشفرض شما "password" می باشد.</h5>
	<input type="text" style="width:180px;height:30px;margin-top:10px;margin-left:85px;margin-right:85px;padding:0px;text-align:center;" placeholder="نام کاربری" id="username_input">
	<input type="text" style="width:180px;height:30px;margin-top:10px;margin-left:85px;margin-right:85px;padding:0px;text-align:center;" placeholder="رمز عبور" id="login_input">
	<button style="width:184px;height:30px;margin-top:20px;margin-left:85px;margin-right:85px;border:2px solid blue;border-radius:3px;padding:0px;text-align:center;" id="login_button">login</button>
</div>


</body>
</html>
