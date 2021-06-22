<?php 
include("db.php");
$report_code = (int)$_REQUEST["report_code"];

//getting current status =>
$sql = "select is_open from reports where id=$report_code";
$results = $db->query($sql);
$current_status = mysqli_fetch_assoc($results)["is_open"];

// transform string to boolean => 
$current_status == 'true' ? $current_status = true : $current_status = false;

//toggling:
if($current_status == true){
    $sql = "update reports set is_open = 'false' where id= $report_code";
    if($db->query($sql)){
        echo json_encode(
            ["state"=>true]
        );
    }else{
        echo $db->error;
    };
};

if($current_status == false){
    $sql = "update reports set is_open = 'true' where id= $report_code";
    if($db->query($sql)){
        echo json_encode(
            ["state"=>true]
        );
    }else{
        echo $db->error;
    };
};

