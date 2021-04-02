Vue.component("inbox-page",{
	template:`
	<h1 class="main_title">صندوق ورودی</h1>
	<div class="container">
		
	</div>
	`
})
//load reports inside this container
$(".new_unread_report .open_driver_page").click(function(){
	var driver_code = Number($(this).parent().find(".driver_code").html().trim());
	window.location.assign("../driver_page/driver_page.php?driver_code="+driver_code);
});