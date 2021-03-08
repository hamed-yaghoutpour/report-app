$(document).ready(function(){
	$(".new_unread_report .open_driver_page").click(function(){
		var driver_code = Number($(this).parent().find(".driver_code").html().trim());
		window.location.assign("../driver_page/driver_page.php?driver_code="+driver_code);
	});
});