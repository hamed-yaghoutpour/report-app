$(document).ready(function(){
	$("#change_password_button").click(function(){
		var old_password = prompt("رمز فعلی خود را وارد کنید");
		var new_password = prompt("رمز جدید را وارد کنید");
		
		$.ajax({
			url:"../ajax/change_password.php",
			data:{
				old_password:old_password,
				new_password:new_password
			},
			success:function(data){
				alert(data);
			}
		});
	});
	$("#reset_factory_button").click(function(){
		var verify_keyword = prompt("در صورتی که واقعا مطمئن هستید که میخواهید تمام اطلاعات را حذف کرده و دوباره از ابتدا برنامه شروع شود ، کلمه بله را بنویسید.");
		var bool = verify_keyword == "بله";
		if(bool){
			$.ajax({
				url:"../ajax/reset_factory.php",
				success:function(){
					alert("با موفقیت انجام شد، هم اکنون برنامه دوباره از اول شروع به کار خواهد کرد.");
					window.location.assign("../login/login.php");
				},
				fail:function(){
					alert("درخواست شما در مسیر ارسال به سرور به مشکل برخورد کرد");
				}
			});
		};
		
	});
});