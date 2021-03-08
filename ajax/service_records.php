<meta charset="utf-8">

<?php
	include_once("../common/main.php");
	$driver_code = (int)$_GET["driver_code"];
	class db{
		public $driver_code;
		public function __construct($driver_code){
			$this->driver_code = $driver_code;
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
	$counter = 1;
	foreach($db->user_services() as $value){
		$time = $value['time'];
		$id = $value['id'];
		echo "
			<div class='service'>
				<h1 class='counter'>$counter</h1>
				<h1 class='time'>$time</h1>
				<h4 class='delete'>حذف این سطر</h4>
				<div class='id' style='display:none'>$id</div>
			</div>
		";
		$counter++;
		
	};
?>