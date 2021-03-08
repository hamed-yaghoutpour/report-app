<?php
include_once("../common/main.php");
$driver_code = (int)$_GET["driver_code"];
$report_text = (string)$_GET["report_text"];
new_report($driver_code,$report_text);
?>