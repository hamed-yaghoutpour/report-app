$(document).ready(function(){
	$("#button_1").click(function(){
		window.location.assign("../new_driver/new_driver.php");
	});
	$("#button_2,#button_3,#button_4").click(function(){
		window.location.assign("../select_driver/select_driver.php");
	});
	$("#button_5").click(function(){
		window.location.assign("../export_data/export_data.php");
	});
	$("#button_6").click(function(){
		window.location.assign("../settings/settings.php");
	});
	$(".pop_up .ok_button").click(()=>{
		window.location.assign("../inbox/inbox.php");
	});
	
	$(".pop_up .cancel_button").click(()=>{
		$(".pop_up").remove();
		$(".pop_up_background").remove();
		
	});
	if(sessionStorage.getItem("dont_show_inbox_pop_up") != "true"){
		$(".pop_up").fadeIn();
		$(".pop_up_background").fadeIn();
		sessionStorage.setItem("dont_show_inbox_pop_up","true");
	};
	var tmp_height = $(".start_menu .item").css("width");
	$(".start_menu .item").css("height",tmp_height);
	$(".start_menu .item").hover(function(){
		$(this).find(".name").slideDown();
	},function(){
		$(this).find(".name").slideUp();
	});
	
	// use the height of .item for .title height:
	$(".title").css("height",tmp_height);
	
	
	
	function start_showing_tips(){
		//start the loop:
		$(".tips h1:nth-child(1)").fadeIn();
		
		var children = $(".tips").children();
		var childs_count = children.length;
		var counter = 2;
		setInterval(function(){
			if(counter>childs_count){
				counter  = 1;
				children.fadeOut();
				$(".tips h1:nth-child("+counter+")").fadeIn();
				counter++;
			}else{
				children.fadeOut();
				$(".tips h1:nth-child("+counter+")").fadeIn();
				counter++;
			};
		},4000);
	};
	start_showing_tips();
});