<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>report app v1!</title>
<link rel="icon" type="image/jpg" href="../common/logo-final-2.jpg">
<link rel="stylesheet" href="../common/common.css">
<link rel="stylesheet" href="new_report.css">
<script src="../common/jquery-3.5.1.js"></script>
</head>
<body>
<?php 
include_once("../templates/header.php");
include_once("../common/main.php");

$driver_code = (int)$_GET["driver_code"];
$report_text = (string)$_GET["report_text"];
?>
<h1 class="title">متن گزارش خود را وارد کنید: </h1>
<textarea class="input"></textarea>
<button class="submit">ثبت گزارش</button>
<script>
$(document).ready(function(){
	$(".submit").click(function(){
		var report_text = $(".input").val();
		$.ajax({
			url:"../ajax/new_report.php",
			data:{
				report_text:report_text,
				driver_code:<?php echo "$driver_code" ?>
			},
			success:function(){
				window.location.assign("../driver_page/driver_page.php?driver_code=<?php echo $driver_code ?>");
			}
		});
	});
});
</script>
</body>
</html>
