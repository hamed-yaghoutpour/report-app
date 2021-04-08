<?php
include("db.php");
function get_language(){
    global $db;
    $sql = "select * from main where key_name = 'language'";
    $language = mysqli_fetch_assoc($db->query($sql))["key_value"];
    return $language;
}
echo get_language();
