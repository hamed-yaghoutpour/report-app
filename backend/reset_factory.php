<meta charset="utf-8">
<?php
include_once("../common/main.php");
//it delete all rows from all tables:
$sql = "
	select table_name from information_schema.tables
	where table_schema = 'report_app'
";
$results = mysqli_query($conn,$sql);

while($row = mysqli_fetch_array($results)){
	$sql = "
		delete from $row[0]
	";
	mysqli_query($conn,$sql);
};



?>