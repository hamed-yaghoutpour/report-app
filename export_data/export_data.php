<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>report app v1!</title>
<link rel="icon" type="image/jpg" href="../common/logo-final-2.jpg">
<link rel="stylesheet" href="../common/common.css">
<link rel="stylesheet" href="export_data.css">
<script src="../common/jquery-3.5.1.js"></script>
<script src="export_data.js"></script>
</head>
<body>
<?php include_once("../templates/header.php") ?>

<div id="page_7" style="height:100%;width:100%;">
<div class="relative_container">

	<div class="chart">
		
		<div class="child_1"><p>بخش گزارش ها</p></div>
		<div class="box_1">
			<button class="chart_button page_7_button_1"><b>مشاهده گزارش ها بر اساس تعداد گزارش ها (نزولی)</b></button>
			<button class="chart_button page_7_button_10"><b>مشاهده همه گزارش ها بر اساس تعداد گزارش ها(سعودی)</b></button>
			<button class="chart_button page_7_button_11"><b>نمایش بی گزارش ها</b></button>
			<button class="chart_button page_7_button_12"><b>نمایش گزارش دار ها</b></button>
			
			
		</div>
		<div class="child_2"><p>بخش سرویس ها</p></div>
		<div class="box_2">
			<button class="chart_button page_7_button_2"><b>نمایش راننده ها به ترتیب نزولی تعداد سرویس ها</b></button>
			<button class="chart_button page_7_button_13"><b>نمایش راننده ها به ترتیب سعودی تعداد سرویس ها</b></button>
		</div>
		<div class="child_3"><p>موارد دیگر</p></div>
		<div class="box_3">
			<button class="chart_button page_7_button_3"><b>مشاهده همه شماره موبایل ها</b></button>
			<button class="chart_button page_7_button_4"><b>مشاهده همه شماره منزل ها</b></button>
			<button class="chart_button page_7_button_5"><b>مشاهده همه آدرس ها</b></button>
			<button class="chart_button page_7_button_6"><b>مشاهده همه توضیحات بیشتر رانندگان</b></button>
			<button class="chart_button page_7_button_6"><b>مشاهده لیست نام و نام خانوادگی و کد راننده ها</b></button>

		</div>
	</div>
	<h1 class="search_box_title">جستجوی عمیق بین همه اطلاعات همه راننده ها  و همه گزارش ها</h1>
	<input class="search_box">
	
	
	
	<div id="export_container">
	
	<?php
		include_once("../common/main.php");
		function by_service_count_desc(){
			global $conn;
			$sql = "
			select * from drivers order by service_count desc
			";
			$results = mysqli_query($conn,$sql);
			while($row = mysqli_fetch_assoc($results)){
				$full_name = $row['first_name']." ".$row["last_name"];
				$service_count = $row["service_count"];
				echo "
					<div class='data'>
					$full_name با $service_count تا سرویس
					</div>
				";
			
			};
		};
		function by_service_count_asc(){
			global $conn;
			$sql = "
			select * from drivers order by service_count asc
			";
			$results = mysqli_query($conn,$sql);
			while($row = mysqli_fetch_assoc($results)){
				$full_name = $row['first_name']." ".$row["last_name"];
				$service_count = $row["service_count"];
				echo "
					<div class='data'>
					$full_name با $service_count تا سرویس
					</div>
				";
			
			};
		};
		function without_any_reports(){
			global $conn;
			$sql = "
			select * from drivers
			";
			$results =mysqli_query($conn,$sql);
			
			while(
			$row = mysqli_fetch_assoc($results)
			){
				if(reports_count($row["driver_code"])==0){
					$full_name = $row['first_name']." ".$row["last_name"];
					$service_count = $row["service_count"];
					echo "
						<div class='data'>
						$full_name
						</div>
					";
				};
				
			
			};
		};
		function not_without_any_reports(){
			global $conn;
			$sql = "
			select * from drivers
			";
			$results = mysqli_query($conn,$sql);
			while(
			$row = mysqli_fetch_assoc($results)
			){
				if(reports_count($row["driver_code"])!=0){
					$full_name = $row['first_name']." ".$row["last_name"];
					$service_count = $row["service_count"];
					echo "
						<div class='data'>
						$full_name
						</div>
					";
				};
				
			
			};
		};
		function by_report_count_asc(){
			global $conn;
			$sql = "
			select * from drivers order by reports_count asc
			";
			$results = mysqli_query($conn,$sql);
			while($row = mysqli_fetch_assoc($results)){
					$full_name = $row['first_name']." ".$row["last_name"];
					$reports_count = $row["reports_count"];
					echo "
						<div class='data'>
						$full_name با $reports_count تا گزارش
						</div>
					";
				
			
			};
		};
		function by_report_count_desc(){
			global $conn;
			$sql = "
			select * from drivers order by reports_count desc
			";
			$results = mysqli_query($conn,$sql);
			
			while($row = mysqli_fetch_assoc($results)){
					$full_name = $row['first_name']." ".$row["last_name"];
					$reports_count = $row["reports_count"];
					echo "
						<div class='data'>
						$full_name با $reports_count تا گزارش
						</div>
					";
				
			
			};
		};
		if(
			isset($_GET["by_service_count_asc"])
		){
			by_service_count_asc();
		};
		if(
			isset($_GET["by_service_count_desc"])
		){
			by_service_count_desc();
		};
		if(
			isset($_GET["without_any_reports"])
		){
			without_any_reports();
		};
		if(
			isset($_GET["not_without_any_reports"])
		){
			not_without_any_reports();
		};
		if(
			isset($_GET["by_report_count_asc"])
		){
			by_report_count_asc();
		};
		if(
			isset($_GET["by_report_count_desc"])
		){
			by_report_count_desc();
		};
		
	?>

	</div>
	
</div>
</div>
</body>
</html>
