<?php

include_once("../common/main.php");
$report_id = (int)$_GET["report_id"];

if(isset($_GET["make_true"])){
	$sql = "
		update reports
		set seen_status = 'true'
		where id = $report_id
	";
	mysqli_query($conn,$sql);
};
if(isset($_GET["make_false"])){
	$sql = "
		update reports
		set seen_status = 'false'
		where id = $report_id
	";
	mysqli_query($conn,$sql);
};
	

?>