<?php

//$servername = "localhost";
//$username = "aneserin_root";
//$password = "hamed1382h";
//$db_name = "aneserin_report_app";
//$table_name = "reports";

$servername = "localhost";
$username = "root";
$password = "";
$db_name = "reporto";
$table_name = "reports";

$db = new mysqli($servername,$username,$password);
$db->set_charset("utf8");
$sql = "create database if not exists $db_name character set utf8mb4 collate utf8mb4_unicode_ci";
$db->query($sql);
$db->close();

$db = new mysqli($servername,$username,$password,$db_name);
$sql = "create table if not exists reports(
	id int(5) primary key auto_increment,
	driver_code int(5),
	driver_name varchar(200),
	report_text varchar(1500),
	is_open varchar(50) default 'true'
)";
$db->query($sql);
$sql = "create table if not exists main(
	id int(5) primary key auto_increment,
	key_name varchar(200),
	key_value varchar(300) 
)";
$db->query($sql);

//set default password for first runs : 
// (default password is 'password')

$sql = "select * from main where key_name = 'password'";
$matched_rows_count = mysqli_num_rows($db->query($sql));
if($matched_rows_count == 0){
	$sql = "insert into main (key_name,key_value) values ('password','password')";
	$db->query($sql);
}

// (default language is 'english')
$sql = "select * from main where key_name = 'language'";
$matched_rows_count = mysqli_num_rows($db->query($sql));
if($matched_rows_count == 0){
	$sql = "insert into main (key_name,key_value) values ('language','english')";
	$db->query($sql);
}
