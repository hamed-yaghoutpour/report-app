$(document).ready(function(){
	$("#username_input").focus();
	$(document).keydown(function(e){
		if(
			$("#login_input").is(":focus")
			&& 
			e.keyCode == 13
		){
			$("#login_button").trigger("click");
		};
		if(
			$("#username_input").is(":focus")
			&& 
			e.keyCode == 13
		){
			$("#login_input").focus();
		};
	});
	$("#login_button").click(function(){
		if($("#username_input").val()!="admin"){
			alert("نام کاربری در سیستم وجود ندارد.");
		}else{
			window.location.assign('login.php?password='+$("#login_input").val());
		};
		
	});
	
});