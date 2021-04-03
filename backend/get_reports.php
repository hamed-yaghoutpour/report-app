<?php
include("db.php");

function get_reports($db){
	global $table_name;
	$return_value = [];
	$sql = "select * from $table_name";
	$results = $db->query($sql);
	while($row = mysqli_fetch_assoc($results)){
		$return_value[] = $row;
	};
	return json_encode($return_value);
}

// requests =>
echo get_reports($db);