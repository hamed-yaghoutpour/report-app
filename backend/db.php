<?php
class db{
	public function $connection;
	public function __construct($connection_mode){
		if($connection_mode == "public"){
			$this->servername = "localhost";
			$this->username = "aneserin_root";
			$this->password = "hamed1382h";
			$this->db_name = "aneserin_report_app";
		}else if($connection_mode == "private"){
			$this->servername = "localhost";
			$this->username = "root";
			$this->password = "";
			$this->db_name = "report_app";
		};
		
		$this->pre_configure_and_connect();
	}
	public function pre_configure_and_connect(){
		$this->connection = mysqli_connect($this->servername,$this->username,$this->password);
		mysqli_set_charset($this->connection,"utf8");
		$sql = "create database if not exists $this->db_name character set utf8mb4 collate utf8mb4_unicode_ci";
		mysqli_query($this->connection,$sql);
		$this->connection = mysqli_connect($this->servername,$this->username,$this->password,$this->db_name);
		mysqli_set_charset($this->connection,"utf8");
		
		//make database structure:
		$sql = "
			create table if not exists main (
			id int(2) PRIMARY KEY AUTO_INCREMENT,
			key_name varchar(20),
			key_value varchar(20)
			)
		";
		mysqli_query($this->connection,$sql);
		
		$sql = "
			create table if not exists reports(
			id int(4) PRIMARY KEY AUTO_INCREMENT,
			driver_code int(4),
			report_text varchar(600),
			seen_status varchar(10) not null
			)
		";
		mysqli_query($this->connection,$sql);
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

		mysqli_query($this->connection,$sql);
		$sql = "
			create table if not exists service_records(
				id int(4) PRIMARY KEY AUTO_INCREMENT,
				driver_code int(4) NOT NULL,
				time timestamp default current_timestamp
			);
		";
		mysqli_query($this->connection,$sql);
	}
	
}