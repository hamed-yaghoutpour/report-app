<?php
include_once("../common/main.php");
$mysql_service_id = (int)$_GET["mysql_service_id"];

$sql = "
	delete from service_records
	where id = $mysql_service_id
";
mysqli_query($conn,$sql);

?>