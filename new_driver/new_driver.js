$(document).ready(function(){
    $("#submit").click(function(){
        $.ajax({
            url:"actions.php",
            data:{
                input_1: $("#input_1").val(),
                input_1: $("#input_2").val(),
                input_1: $("#input_3").val(),
                input_1: $("#input_4").val(),
                input_1: $("#input_5").val(),
                input_1: $("#input_6").val(),
                input_1: $("#input_7").val()
            },
            success:function(data){
                console.log(data)
            }
        })
    })
})