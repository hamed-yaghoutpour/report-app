<?php
include("db.php");
function reset_factory(){
    global $db;
    global $db_name;
    $sql =  "drop database $db_name";
    if($db->query($sql)){
        return true;
    }else{
        return false;
    }

};
if(reset_factory()){
    echo json_encode(
        ["state"=>true]
    );
};