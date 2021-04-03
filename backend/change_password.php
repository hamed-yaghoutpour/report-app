<?php
include("./db.php");
function old_password(){
    global $db;
    $sql = "select * from main where key_name = 'password' ";
    $results = $db->query($sql);
    $row = mysqli_fetch_assoc($results);
    return $row["key_value"];
};
function change_password($old_password,$new_password){
    global $db;
    if(old_password() == $old_password){
        $sql = "update main set key_value = '$new_password' where key_name = 'password' ";
        if($db->query($sql)){
            echo json_encode(
                ["state"=>true]
            );
        };
    };
};
change_password($_REQUEST["old_password"],$_REQUEST["new_password"]);