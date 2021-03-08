<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>report app v1!</title>
<!-- always import these files in their order -->
<link rel="icon" type="image/jpg" href="../common/logo-final-2.jpg">
<link rel="stylesheet" href="../common/common.css">
<link rel="stylesheet" href="driver_page.css">
<script src="../common/jquery-3.5.1.js"></script>
<script src="driver_page.js"></script>
<script src="../common/vue.js"></script>
<script src="vue_components.js"></script>
<link rel="stylesheet" href="vue_components.css">
</head>
<body>
<?php
include_once("../templates/header.php");
include_once("../common/main.php");
$driver_code = (int)$_GET["driver_code"];
class db{
	public $driver_code;
	public function __construct($driver_code){
		$this->driver_code = $driver_code;
	}
	public function user_info(){
		global $conn;
		$sql = "
			select * from drivers where driver_code = $this->driver_code
		";
		$results = mysqli_query($conn,$sql);
		return mysqli_fetch_assoc($results);
	}
	public function user_reports(){ //it returns an array of rows of reports table:
		global $conn;
		$sql = "
			select * from reports where driver_code = $this->driver_code
			";
		$results = mysqli_query($conn,$sql);
		 
		$reports = [];
		while ($report = mysqli_fetch_assoc($results)){
			array_push($reports,$report);
		};
		return $reports;
	}
	public function user_services(){ //it returns an array of rows of services table:
		global $conn;
		$sql = "
			select * from service_records where driver_code = $this->driver_code
			";
		$results = mysqli_query($conn,$sql);
		$services = [];
		while ($row = mysqli_fetch_assoc($results)){
			array_push($services,$row);
		};
		return $services;
	}
};
$db = new db($driver_code);
$user_info = $db->user_info();
?>
<div id="vue_container">	
			
	<div id="driver_image"></div>
	<h1 id="driver_code">
		#<?php echo $user_info["driver_code"] ?>
	</h1>
	<b id="driver_full_name">
		<?php echo $user_info["first_name"]." ".$user_info["last_name"] ?>
	</b>
	<div class="ex_info_container_1">
		<h4>
			شماره تلفن همراه:  <span><?php echo $user_info["mobile_phone_number"] ?></span>
		</h4>
		
		<h4>
			شماره تلفن منزل: <span><?php echo $user_info["home_phone_number"] ?></span>
		</h4>
		
		<h4>
			آدرس: <span><?php echo $user_info["address"] ?></span>		
		</h4>
		
		<h4>
			اطلاعات بیشتر درباره این راننده: <span><?php echo $user_info["extra_info"] ?></span>
		</h4>
		
		<h4>
			تعداد گزارش ها: <span><?php echo count($db->user_reports()) ?></span>
		</h4>
	</div>

	
	<button class="edit_driver_info">
		<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pen-fill" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
		</svg>
	</button>
	<b id="reports_title">
		گزارش ها
	</b>
	<button class="add_new_report_button">
		<h3>+</h3>
	</button>
	<div id="seperator_1"></div>
	<div id="reports_container">
		<!-- add reports to container -->
		<?php

			$counter = 1;
			foreach($db->user_reports() as $i){
			$report = $i;
			$report_text = $report["report_text"];
			$report_id = $report["id"];
			$seen_status = $report["seen_status"];
		?>
		<report
		v-bind:report_id=<?php echo "'$report_id'" ?>
		v-bind:check_status=<?php echo "'$seen_status'" ?>
		date="coming-soon"
		v-bind:counter=<?php print("'$counter'") ?>
		report_text=<?php echo "'$report_text'" ?>
		></report>
		<?php
		$counter++;
		};
		?>
		<!-- //end of add reports to container -->
	</div>
	
	<b id="title_2">سرویس ها</b>
	<button class="plus">+</button>
	<div id="seperator_2"></div>
	<div class="services">

	</div>
</div>
<script>
function update_service_records(){
		$.ajax({
			url:"../ajax/service_records.php",
			data:{
				driver_code: <?php echo (int)$driver_code; ?>,
			},
			method:"GET",
			success:function(data){
				$(".services").html(data);
			}
		});
		
	};

$(document).ready(function(){
	$(document).on('click','h4.delete',function(){
	var mysql_service_id = Number($(this).parent().find(".id").html());
	if(confirm("آیا از حذف این سطر اطمینان دارید؟")){
		$.ajax({
				url:"../ajax/remove_service.php",
				data:{
					driver_code: <?php echo $driver_code ?>,
					mysql_service_id: mysql_service_id
				},
				method:"GET",
				success:function(){
					update_service_records();
				}
			});
		};	
	});
	update_service_records();
	$(".add_new_report_button").click(function(){
		window.location.assign("../new_report/new_report.php?driver_code="+"<?php echo $driver_code; ?>");
	});
	
	$(".plus").click(function(){
		$.ajax({
			url:"../ajax/add_service.php",
			method:"GET",
			data:{
				driver_code: <?php echo $driver_code ?>
			},
			success:function(){
				update_service_records();
			}
		});
	});
	$(".edit_driver_info").click(function(){
		window.location.assign("../edit_driver_info/edit_driver_info.php?driver_code=<?php echo $driver_code ?>");
	});
});
</script>
</body>
</html>
