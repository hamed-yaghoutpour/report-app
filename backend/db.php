<?php

$servername = "localhost";
$username = "aneserin_root";
$password = "hamed1382h";
$db_name = "aneserin_report_app";
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
	report_text varchar(1500)
)";
$db->query($sql);
