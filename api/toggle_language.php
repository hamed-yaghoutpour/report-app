<?php
include("db.php");
function get_language(){
    global $db;
    $sql = "select * from main where key_name = 'language'";
    $language = mysqli_fetch_assoc($db->query($sql))["key_value"];
    return $language;
}

function toggle_language(){
    global $db;
    if(get_language() == "persian"){
        $sql = "update main set key_value = 'english' where key_name = 'language'";
        if($db->query($sql)){
            echo 'ok';
        }
        return;
    }else if(get_language() == "english"){
        $sql = "update main set key_value = 'persian' where key_name = 'language'";
        if($db->query($sql)){
            echo 'ok';
        }
        return;
    }
    
};

//answer to requests =>

toggle_language();