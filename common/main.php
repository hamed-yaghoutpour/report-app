<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$db_name = "report_app";	
	$conn = mysqli_connect($servername,$username,$password);
	mysqli_set_charset($conn,"utf8");
	$sql = "create database if not exists $db_name character set utf8mb4 collate utf8mb4_unicode_ci";
	mysqli_query($conn,$sql);
	
	
	//ignore above and
	//1- create database by hand
	//2- use this :
	// $servername = "localhost";
	// $username = "aneserin_root";
	// $password = "hamed1382h";
	// $db_name = "aneserin_report_app";	
	$conn = mysqli_connect($servername,$username,$password,$db_name);
	mysqli_set_charset($conn,"utf8");
//make database structure:
$sql = "
	create table if not exists main (
	id int(2) PRIMARY KEY AUTO_INCREMENT,
	key_name varchar(20),
	key_value varchar(20)
	)
";
mysqli_query($conn,$sql);
$sql = "select * from main where key_name = 'password'";
$results = mysqli_query($conn,$sql);
if(mysqli_num_rows($results)==0){
	$sql = "
		insert into main (key_name,key_value) values ('password','password')
	";
	mysqli_query($conn,$sql);
};
$sql = "
	create table if not exists reports(
	id int(4) PRIMARY KEY AUTO_INCREMENT,
	driver_code int(4),
	report_text varchar(600),
	seen_status varchar(10) not null
	)
";
mysqli_query($conn,$sql);
$sql = "
	create table if not exists drivers(
		id int(4) PRIMARY KEY AUTO_INCREMENT,
		first_name varchar(50),
		last_name varchar(50),
		driver_code int(4),
		mobile_phone_number varchar(15),
		home_phone_number varchar(15),
		extra_info varchar(200) default 'بدون توضیح',
		address varchar(200),
		reports_count int(6) default 0
		
	);
";

mysqli_query($conn,$sql);
$sql = "
	create table if not exists service_records(
		id int(4) PRIMARY KEY AUTO_INCREMENT,
		driver_code int(4) NOT NULL,
		time timestamp default current_timestamp
	);
";
mysqli_query($conn,$sql);
function new_driver($first_name,$last_name,$driver_code,$mobile_phone_number,$home_phone_number,$address,$extra_info){
	global $conn;
	$sql = "
		insert into drivers (first_name,last_name,driver_code,mobile_phone_number,home_phone_number,address,extra_info)
		values ('$first_name','$last_name',$driver_code,'$mobile_phone_number','$home_phone_number','$address','$extra_info');
	";
	mysqli_query($conn,$sql);
};

function password_check($password){
	global $conn;
	$sql = "
		select * from main where key_name='password'
	";
	$results = mysqli_query($conn,$sql);
	
	$row = mysqli_fetch_assoc($results);
	if ($password == $row["key_value"]){
		return true;
	}else{
		return false;
	};
};
function js_redirect($url){
	echo "
		<script>
		window.location.assign('$url');
		</script>
	";
};
function js_alert($text){
	echo "
		<script>
		alert('$text');
		</script>
	";
};
function new_report($driver_code,$report_text){
	//$driver_code must be integer
	global $conn;
	$sql = "
		insert into reports (driver_code,report_text,seen_status) 
		values ($driver_code,'$report_text','false');
	";
	mysqli_query($conn,$sql);
	$sql = "
		update drivers
		set reports_count = reports_count+1
		where driver_code = $driver_code
	";
	mysqli_query($conn,$sql);
	
};
function js_conosle_log($text){
	echo "
		<script>
		console.log('$text');
		</script>
		
	";
};
function change_password($old_password,$new_password){
	global $conn;
	$sql = "
		select * from main where key_name = 'password'
	";
	$results = mysqli_query($conn,$sql);
	
	$row = mysqli_fetch_assoc($results);
	if($row["key_value"]==$old_password){
		$sql = "
		update main
		set key_value = '$new_password'
		where key_name = 'password';
		";
		mysqli_query($conn,$sql);
	};
};

function reports_count($driver_code){
	global $conn;
	$sql = "
		select * from reports where driver_code = $driver_code
	";
	$results = mysqli_query($conn,$sql);
	$counter = 0;
	while($row = mysqli_fetch_assoc($results)){
		$counter++;
	};
	return $counter;
};
?>