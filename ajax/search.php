<?php
include_once("../common/main.php");
$search_key_word = $_GET["search_key_word"];
$sql = "
	select * from drivers where
	first_name like '%$search_key_word%'
	or last_name like '%$search_key_word%'
	or driver_code like '%$search_key_word%'
	or reports_count like '%$search_key_word%'
	or service_count like '%$search_key_word%'
	or mobile_phone_number like '%$search_key_word%'
	or home_phone_number like '%$search_key_word%'
	or extra_info like '%$search_key_word%'
	or CONCAT(CONCAT(first_name,' '),last_name) like '%$search_key_word%'
";
$results = mysqli_query($conn,$sql);
while($row = mysqli_fetch_assoc($results)){
	$driver_code = $row['driver_code'];
	$driver_name = $row["first_name"]." ".$row["last_name"];
	echo "
		<div class='driver'>
			<div class='driver_code'>$driver_code</div>
			<div class='driver_name'>$driver_name</div>
		</div>
	";
};

//add search in reports also
?>