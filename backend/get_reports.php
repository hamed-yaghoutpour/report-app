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
	//convert is_open column from string to boolean =>
	foreach ($return_value as $key => $value) {
		$return_value[$key]["is_open"] = $return_value[$key]["is_open"] == "true" ? true:false;
	}
	//return json_encode($return_value);
	return json_encode($return_value);
};

// requests =>
echo get_reports($db);
