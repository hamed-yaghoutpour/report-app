<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>report app v1!</title>
<link rel="icon" type="image/jpg" href="../common/logo-final-2.jpg">
<link rel="stylesheet" href="../common/common.css">
<link rel="stylesheet" href="inbox.css">
<script src="../common/jquery-3.5.1.js"></script>
<script src="inbox.js"></script>
</head>
<body>
<?php include_once("../templates/header.php") ?>
<h1 class="main_title">صندوق ورودی</h1>
<div class="container">
<?php
include_once("../common/main.php");
$sql = "
	select * from reports where not (seen_status = 'true')
";
$results = mysqli_query($conn,$sql);
while($row = mysqli_fetch_assoc($results)){
	?>
	<div class="new_unread_report">
			<h1 class="title">گزارش رسیدگی نشده (راننده شماره <span><?php echo $row["driver_code"] ?></span>)</h1>
			<p class="report_message"><?php echo $row["report_text"] ?></p>
			<button class="open_driver_page">صفحه راننده</button>
			<div class="driver_code" style="display:none;"><?php echo $row["driver_code"] ?></div>
	</div>
	<?php
};
?>
</div>
</body>
</html>
