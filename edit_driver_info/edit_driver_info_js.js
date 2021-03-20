<script>
$(document).ready(function(){
	$(".submit").click(function(){
		var confirm = window.confirm("در صورت اطمینان از این که میخواهید اطلاعات این راننده را تغییر دهید، تایید کنید");
		if(confirm){
			//get input values:
			var first_name = $("#first_name_input").val();
			var last_name = $("#last_name_input").val();
			var address = $("#address_input").val();
			var mobile_phone_numebr = $("#mobile_phone_number_input").val();
			var home_phone_number = $("#home_phone_number_input").val();
			var extra_info = $("#extra_info_input").val();
			//make ajax call to update data from server:
			$.ajax({
				url:"../ajax/edit_driver_info.php",
				data:{
					first_name:first_name,
					last_name:last_name,
					address:address,
					mobile_phone_number:mobile_phone_numebr,
					home_phone_number:home_phone_number,
					extra_info:extra_info,
					driver_code:<?php echo $driver_code ?>
				},
				success:function(data){
					window.location.assign("../home/home.php");
				}
			});
		};
	});
});
</script>