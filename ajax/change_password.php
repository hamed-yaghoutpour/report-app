<?php
include_once("../common/main.php");
	$sql = "
		select key_value from main where key_name = 'password'
	";
	$results = mysqli_query($conn,$sql);
	$row = mysqli_fetch_assoc($results);
	if(
		$row["key_value"]==$_GET["old_password"]
	)
	{
	change_password($_GET["old_password"],$_GET["new_password"]);
	echo "رمز عبور با موفقیت تعویض شد.";
	}else{
		echo "رمز عبور قدیمی نادرست بود.";
	};
?>