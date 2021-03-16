<?php
include_once("../common/main.php");
function drivers_as_json(){
    global $conn;
    $sql = "
	    select * from drivers order by driver_code asc
    ";
    $results = mysqli_query($conn,$sql);
    $return_value = [];
    while($row = mysqli_fetch_assoc($results)){
        $driver_name = $row["first_name"]." ".$row["last_name"];
        $driver_code = (int)$row["driver_code"];
        $return_value[] = [
            "driver_name" => $driver_name,
            "driver_code" => $driver_code
        ];
    };
    return json_encode($return_value);
};
echo drivers_as_json();