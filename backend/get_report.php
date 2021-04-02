<?php
include("db.php");
$report_code = (int)$_REQUEST["report_code"];

$sql = "select * from reports where id = $report_code";
$results = $db->query($sql);
$row = mysqli_fetch_assoc($results);
$return_value = [];
$return_value["report_code"] = $row["id"];
$return_value["driver_code"] = $row["driver_code"];
$return_value["report_text"] = $row["report_text"];
$return_value["driver_name"] = $row["driver_name"];

echo json_encode($return_value);