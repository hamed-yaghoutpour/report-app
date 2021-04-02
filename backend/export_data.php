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
	