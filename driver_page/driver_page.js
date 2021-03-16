function update_page(driver_code){
    //updating driver info: 
    $.ajax({
        url:"actions.php",
        data:{
            action:"update_info",
            driver_code:driver_code
        },
        success:function(json){
            let data = JSON.parse(json);
            $("#mobile_phone_number").html(data.mobile_phone_number);
            $("#home_phone_number").html(data.home_phone_number);
            $("#address").html(data.address);
            $("#extra_info").html(data.extra_info);
            $("#services_count").html(data.services_count);
            $("#driver_code span").html(data.driver_code);
            $("#driver_full_name").html(data.full_name);
        }

    })
    
    //updating reports:
    $.ajax({
        url:"actions.php",
        data:{
            action:"update_reports",
            driver_code:driver_code
        },
        success:function(json){
            let data = JSON.parse(json);
            //pass data to vue object
            // it will do what we need
            app.reports = data;
        }

    })
    $.ajax({
            url:"actions.php",
            data:{
                action:"update_services",
                driver_code:driver_code
            },
            success:function(json){
                let data = JSON.parse(json);
                //pass data to vue object
                // it will do what we need
                services_container.services = data;
            }

        })


}


$(document).ready(function(){
    
    
    $(".add_new_report_button").click(function(){
        window.location.assign("../new_report/new_report.php?driver_code="+"driver_code");
    });

    $(".plus").click(function(){
        $.ajax({
            url:"../ajax/add_service.php",
            method:"GET",
            data:{
                driver_code: driver_code
            },
            success:function(){
                update_service_records();
            }
        });
    });
    $(".edit_driver_info").click(function(){
        window.location.assign("../edit_driver_info/edit_driver_info.php?driver_code=<?php echo $driver_code ?>");
    });
});
