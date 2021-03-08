$(document).ready(function(){	

function open_driver_page(driver_number_to_open){
	//care if you pass string as arg1
	$("body").children().fadeOut();
	$("#page5_driver_code").html(driver_number_to_open);
	
	setTimeout(()=>{
		if(inline_database_1[driver_number_to_open-1].more_info!=""){
			$("#ex_info_2").html("توضیحات بیشتری که برای این راننده ثبت کرده اید به این شرح است:"+"<br><br>"+inline_database_1[driver_number_to_open-1].more_info);
		}else{$("#ex_info_2").html("شما برای این راننده توضیحی ثبت نکرده اید.");};
		
		$("#page5_driver_full_name").html(inline_database_1[driver_number_to_open-1].first_name+' '+inline_database_1[driver_number_to_open-1].last_name);
		$(".report_sample_container").empty();
		for(var open_driver_page_t1=0;open_driver_page_t1<inline_database_1[driver_number_to_open-1].reports.length;open_driver_page_t1++){
			var xp=$(".ec .report_sample").clone();
			xp.find(".report_sample_text").html(inline_database_1[driver_number_to_open-1].reports[open_driver_page_t1].text);
			xp.find(".report_sample_title").html("گزارش شماره"+" "+(open_driver_page_t1+1)+" "+":");
			xp.appendTo(".report_sample_container");
			xp.fadeIn();
		};
		$("#page5_service_count_sen").html("آقای"+" "+inline_database_1[driver_number_to_open-1].first_name+" "+inline_database_1[driver_number_to_open-1].last_name+" "+"تا به حال"+" "+inline_database_1[driver_number_to_open-1].service_count+" "+"تا سرویس رفته است.");
		//for graphic reasons
		
			$("#header").fadeIn();
		
		$("#page_5").fadeIn();
	},600);
};
	
function show_drivers(){
	//add elements:
	$("#drivers").empty();
	for(var show_d_1=1;show_d_1<=inline_database_1.length;show_d_1++){
		var cloned_object = $("#samples .item1").clone(true);
		cloned_object.find(".item_1_driver_code").html(show_d_1);
		cloned_object.find(".code").html('#'+show_d_1);
		cloned_object.find(".driver_name").html(inline_database_1[show_d_1-1].first_name+' '+inline_database_1[show_d_1-1].last_name);
		cloned_object.find(".count").html(inline_database_1[show_d_1-1].service_count);
		
		$("#drivers").append(cloned_object);
		$("#drivers .item1").each(function(){
			$(this).fadeIn();
		});
		
	};
	
};
	function save_new_report(snr_driver_code){
		inline_database_1[snr_driver_code-1].reports.push({text:$(".report .entry").val(),date:new Date(),residegi_state:false});
		
	};
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
	//main processes:
	//my globall values:

if(fs.readFileSync(database_path)==''||!fs.existsSync(database_path)){
	fs.wrtieFileSync(database_path,"[]");
	fs.wrtieFileSync(database_2_path,'{password:"password",font:"arial"}');
	load_database_1();
	load_database_2();
}else{
	load_database_1();
	load_database_2();
};

//for start, we show login page:
$("#login_input").val("");
//$("#page_1").fadeIn();
//$("#login_input").focus();
	$("#header").fadeIn();
	$("#page_7").fadeIn();
	
	//about header:
	
$(".header_button_1").click(function(){
	$("body").children().fadeOut();
	$("#header").fadeIn();
	$("#page_2").fadeIn();
	
});
$(".header_button_3").click(function(){
	$("body").children().fadeOut();
	$("#login_input").val('');
	$("#page_1").fadeIn();
});

	//about page 1:
	
//check user password with click on button:
$("#login_button").click(function(){
	if($("#login_input").val() == inline_database_1.password){
	$("#page_1").fadeOut();
	//for graphic reasons
		if($("#header").css("display")=="none"){
			$("#header").fadeIn();
		};
	$("#page_2").fadeIn();
	}else{alert("کد وارد شده اشتباه بود ،لطفا دوباره امتحان کنید");};
});
//check user password with enter button:
$("#login_input").on('keydown',function(e){
	if(e.keyCode==13){
	
		if($("#login_input").val() == inline_database_1.password){
			$("#page_1").fadeOut();
			$("#header").fadeIn();
			$("#page_2").fadeIn();
		}else{
			alert("کد وارد شده اشتباه بود ،لطفا دوباره امتحان کنید");
		};
		
	};
});
//shortcut for pass login page without check password,with "home" key:
$("body").on('keydown',function(e){
	if(e.keyCode==36){
	console.log("home key pressed and home page will open");
	$("#page_1").fadeOut();
	$("#header").fadeIn();
	$("#page_2").fadeIn();
	
	};
});
	//about page 2:
$("#button_1").click(function(){
$("#page_2").fadeOut();
$("#input_1,#input_2,#input_3,#input_4,#input_5,#input_6,#input_7").each(function(){
	$(this).val('');
});

$("#page_3").fadeIn();
$("#input_1").focus();
});
$("#button_2").click(function(){
	show_drivers();
$("#page_2").fadeOut();

$("#page_4").fadeIn();
});
$("#button_3").click(function(){
$("#page_2").fadeOut();
		show_drivers();
		

$("#page_4").fadeIn();
});
$("#button_4").click(function(){
$("#page_2").fadeOut();
		show_drivers();

$("#page_4").fadeIn();
});
$("#button_5").click(function(){
	$("#page_2").fadeOut();
	$("#export_container").empty();
	$("#page_7").fadeIn();
});
$("#button_6").click(function(){
$("#page_2").fadeOut();
if($("#backup_box").css("display")!="none"){
	$("#backup_box").css("display","none");
};
$("#page_6").fadeIn();
});
	//about page 3:
$("#page3_button_1").click(function(){
	
		inline_database_1.push({
		code:Number($("#input_1").val()),
		first_name:$("#input_2").val(),
		last_name:$("#input_3").val(),
		mobile_phone_number:Number($("#input_5").val()),
		home_phone_number:Number($("#input_6").val()),
		address:$("#input_4").val(),
		more_info:$("#input_7").val(),
		reports:[],
		service_count:0
		});
		save_database_1();
	$("#page_3").fadeOut();
	$("#page_2").fadeIn();
});
$("body").keyup(function(e){
	if(e.keyCode==13){
		if($("#input_1").is(":focus")){
		$("#input_1").next().focus();
		
	}else if($("#input_2").is(":focus")){
		$("#input_2").next().focus();
	}else if($("#input_3").is(":focus")){
		$("#input_3").next().focus();
	}else if($("#input_4").is(":focus")){
		$("#input_4").next().focus();
	}else if($("#input_5").is(":focus")){
		$("#input_5").next().focus();
	}else if($("#input_6").is(":focus")){
		$("#input_6").next().focus();
	}else if($("#input_7").is(":focus")){
		$("#page3_button_1").focus();
	};
	};
	
});
	//about page 4:
	$("#drivers .item1 .right h5").click(function(){
	var this_item_driver_number = Number($(this).parent().parent().find(".item_1_driver_code").text());
		//todo:open_driver_page($(this).find(".item_1_driver_code").text());
	});
	$("#drivers .item1 .left .button_3").click(function(){
		$(this).parent().find(".button_1").fadeIn();
		$(this).parent().find(".count_1").fadeIn();
		$(this).parent().find(".button_2").fadeIn();
		console.log("b 3 clicked");
	});
	$(".left .button_3").on('click',function(){
	$(".left .button_1").fadeIn();
	$(".left .count_1").fadeIn();
	$(".left .button_2").fadeIn();
	});
	
$(".hv").click(function(){
$(".i1").fadeIn();
$(".i2").css({"display":"flex"});
$(".i3").fadeIn();
});

$(".item1 .left .button_1").click(function(){
	
	var service_count_1 = Number($(this).parent().parent().find(".item_1_driver_code").html());
	
	inline_database_1[service_count_1-1].service_count+=1;
	save_database_1();
	
	$(this).parent().find(".count").html(inline_database_1[service_count_1-1].service_count);
});
$(".item1 .left .button_2").click(function(){
	
	var service_count_1 = Number($(this).parent().parent().find(".item_1_driver_code").html());
	inline_database_1[service_count_1-1].service_count-=1;
	save_database_1();
	//be careful, شاید فکر کنی چیزی به درد نمیخوره ولی بخوره
	$(this).parent().find(".count").html(inline_database_1[service_count_1-1].service_count);
});
$(".item1 .left .button_4").click(function(){
	var open_d_gu_1 = Number($(this).parent().parent().find(".item_1_driver_code").html());
	open_driver_page(open_d_gu_1);
});


	//about page 5:
	$(".add_new_report_button").click(function(){
		$(".pop-up-large .entry").val('');
		$(".pop-up-large").fadeIn();
	});
	$(".pop-up-large .report .back_button").click(function(){
	if(confirm("آیا مطمئن هستید که قصد بازگشت به پنجره قبل را دارید؟(با این کار پیشنویس گزارشی که نوشته اید از بین خواهد رفت!)")){
		
		$(".pop-up-large").fadeOut();
		$(".pop-up-large .entry").val('');
	};
	});
	
	//about page 6: (setting)
$("#page_6_button_1").click(function(){
	var reset_factory_prompt = prompt("برای حذف تمام سوابق و شروع دوباره برنامه،کلمه 'بله' را تایپ کنبد");
	if(reset_factory_prompt=="بله"){
	fs.wrtieFileSync(database_path,'');
	alert("پس از یک ثانیه دوباره بارگزاری خواهد شد!");
		setTimeout(()=>{
			window.location.pathname=window.location.pathname;
			
		},1000);
		
	};
	
	
	
});
$("#page_6_button_3").click(function(){
	//there must be 2 boxes for 2 databses
	$("#backup_box").val(inline_database_1);
	$("#backup_box").fadeIn();
	
	alert("این تکه متن زیر،بکاپ شماست،آن را بدون دستکاری در فایلی ذخیره کنید و هر هنگام که نیاز داشتید،آن را وارد کنید تا همه اطلاعات بازگردانی شوند");
});
$("#page_6_button_4").click(function(){
	if($("#backup_box").css("display")!="none"){
		$("#backup_box").fadeOut();
	};
	alert("نسخه پشتیبان خود را که قبلا به صورت یک متن بلند ذخیره کرده اید،در این کادر وارد کنید و دکمه بازگردانی را بزنید:");
	$("#backup_box").val('');
	$("#backup_box").fadeIn();
	
});
	$("#backup_submit").click(function(){
		alert("با توجه به دیتابیس این نسخه ی آزمایشی،استفاده از این قابلیت امکان پذیر نیست و باید منتظر اولین نسخه ی پایدار برنامه باشید");
		//$("#backup_box").val();
		//update drivers != replace new data with database,
		//add function for update drivers database smartly.
		
	});
	$("#page_6_button_5").click(function(){
		var old_password=prompt("رمز قدیمی خود را وارد کنید");
		var new_password=prompt("رمز جدید خود را وارد کنید");
		if(inline_database_1.password==old_password){
			//شدیدا ناقش
			
			inline_database_1.password=new_password;
			save_database_1();
				alert("رمز عبور شما با موفقیت تغییر کرد.");
		}else{
			alert("رمز قدیمی ای که وارد کردید، نادرست بود،دوباره امتحان کنید.");
		};
	});
	
		$("*").css({"font-family":inline_database_2.font});
	
	$("#page_6_button_2").click(function(){
		var new_font = prompt("نام فونت جدید را با دقت وارد کنید:");
		if(new_font!=false&&new_font.includes(' ')){
			alert("نام فونتی که وارد کردید، در بین حروفش فاصله دارد و شاید به درستی کار نکند")
		};
		if(new_font!=null && new_font!=''){
	
		inline_database_2.font=new_font;
		save_database_2();
		$("*").css({"font-family":inline_database_2.font});
		setTimeout(function(){
			if(confirm("اگر مشکلی با فونت جدید خود دارید یا قصد برگشت به فونت پیشفرض را دارید، تایید کنید.")){
				inline_database_2.font="arial";
				save_database_2();
				$("*").css({"font-family":inline_database_2.font});
			};
		},5000);
		}else if(new_font==""){
			alert("نام فونت نمی تواند خالی باشد.");
		};
		
		
	});
	//about page 7:
	$(".page_7_sample_1 .matn,page_7_sample_1").click(function(){
		if($(this).hasClass("page_7_sample_1")){
			open_driver_page(Number($(this).find(".page_7_sample_1_driver_code").html()));
		};
		if($(this).hasClass("matn")){
			open_driver_page(Number($(this).parent().find(".page_7_sample_1_driver_code").html()));
		};
	});
	$(".chart .page_7_button_1").click(function(){
		$("#export_container").empty();
		var page_7_vars_1;
		var sorted_by_reports_count= inline_database_1.sort((first,second)=>{return second.reports.length-first.reports.length});
		
		for(page_7_vars_1=0;page_7_vars_1<sorted_by_reports_count.length;page_7_vars_1++){
			//true for below clone is important:
			var page_7_2=$("#samples .page_7_sample_1").clone(true);
			page_7_2.find(".page_7_sample_1_driver_code").html(page_7_vars_1+1);
			page_7_2.find(".matn").html("رتبه"+" "+(page_7_vars_1+1)+" "+":"+" "+sorted_by_reports_count[page_7_vars_1].first_name+" "+sorted_by_reports_count[page_7_vars_1].last_name+" "+":"+sorted_by_reports_count[page_7_vars_1].reports.length+" "+"گزارش");
			$("#export_container").append(page_7_2);
			$("#export_container").append('<br>');
			page_7_2.css("display","inline-block");
		};
	});
	$(".chart .page_7_button_2").click(function(){
		$("#export_container").empty();
		var page_7_vars_1;
		var sorted_by_reports_count= inline_database_1.sort((first,second)=>{return second.service_count-first.service_count});
		
		for(page_7_vars_1=0;page_7_vars_1<sorted_by_reports_count.length;page_7_vars_1++){
			var page_7_2=$("#samples .page_7_sample_1").clone(true);
			page_7_2.find(".page_7_sample_1_driver_code").html(page_7_vars_1+1);
			page_7_2.find(".matn").html("رتبه"+" "+(page_7_vars_1+1)+" "+":"+" "+sorted_by_reports_count[page_7_vars_1].first_name+" "+sorted_by_reports_count[page_7_vars_1].last_name+" "+":"+sorted_by_reports_count[page_7_vars_1].service_count+" "+"سرویس");
			$("#export_container").append(page_7_2);
			$("#export_container").append('<br>');
			page_7_2.css("display","inline-block");
		};
	});
	$(".chart .page_7_button_10").click(function(){
		$("#export_container").empty();
		var page_7_vars_1;
		var sorted_by_reports_count= inline_database_1.sort((first,second)=>{return first.reports.length-second.reports.length});
		
		for(page_7_vars_1=0;page_7_vars_1<sorted_by_reports_count.length;page_7_vars_1++){
			var page_7_2=$("#samples .page_7_sample_1").clone(true);
			page_7_2.find(".page_7_sample_1_driver_code").html(page_7_vars_1+1);
			page_7_2.find(".matn").html("رتبه"+" "+(page_7_vars_1+1)+" "+":"+" "+sorted_by_reports_count[page_7_vars_1].first_name+" "+sorted_by_reports_count[page_7_vars_1].last_name+" "+":"+sorted_by_reports_count[page_7_vars_1].reports.length+" "+"گزارش");
			$("#export_container").append(page_7_2);
			$("#export_container").append('<br>');
			page_7_2.css("display","inline-block");
		};
	});
	$(".chart .page_7_button_11").click(function(){
		$("#export_container").empty();
		var page_7_vars_1;
		var sorted_by_reports_count=[];
		for(var i=0;i<inline_database_1.length;i++){
			if(inline_database_1[i].reports.length==0){
				sorted_by_reports_count.push(inline_database_1[i]);
			};
		};
		//until here
		for(page_7_vars_1=0;page_7_vars_1<sorted_by_reports_count.length;page_7_vars_1++){
			var page_7_2=$("#samples .page_7_sample_1").clone(true);
			page_7_2.find(".page_7_sample_1_driver_code").html(page_7_vars_1+1);
			page_7_2.find(".matn").html("مورد"+" "+(page_7_vars_1+1)+" "+":"+" "+sorted_by_reports_count[page_7_vars_1].first_name+" "+sorted_by_reports_count[page_7_vars_1].last_name+" "+":"+" "+"(گزارشی ندارد.)");
			$("#export_container").append(page_7_2);
			$("#export_container").append('<br>');
			page_7_2.css("display","inline-block");
		};
	});
	$(".chart .page_7_button_12").click(function(){
		$("#export_container").empty();
		var page_7_vars_1;
		var sorted_by_reports_count=[];
		for(var i=0;i<inline_database_1.length;i++){
			if(inline_database_1[i].reports.length!=0){
				sorted_by_reports_count.push(inline_database_1[i]);
			};
		};
		sorted_by_reports_count = sorted_by_reports_count.sort((first,second)=>{return second.reports.length-first.reports.length});
		for(page_7_vars_1=0;page_7_vars_1<sorted_by_reports_count.length;page_7_vars_1++){
			var page_7_2=$("#samples .page_7_sample_1").clone(true);
			page_7_2.find(".page_7_sample_1_driver_code").html(page_7_vars_1+1);
			page_7_2.find(".matn").html("رتبه"+" "+(page_7_vars_1+1)+" "+":"+" "+sorted_by_reports_count[page_7_vars_1].first_name+" "+sorted_by_reports_count[page_7_vars_1].last_name+" "+":"+sorted_by_reports_count[page_7_vars_1].reports.length+" "+"گزارش");
			$("#export_container").append(page_7_2);
			$("#export_container").append('<br>');
			page_7_2.css("display","inline-block");
		};
	});
	$(".chart .page_7_button_2").click(function(){
		$("#export_container").empty();
		var page_7_vars_1;
		//its better to change name of this :
		
		var sorted_by_reports_count= inline_database_1.sort((first,second)=>{return second.service_count-first.service_count});
		
		for(page_7_vars_1=0;page_7_vars_1<sorted_by_reports_count.length;page_7_vars_1++){
			var page_7_2=$("#samples .page_7_sample_1").clone(true);
			page_7_2.find(".page_7_sample_1_driver_code").html(page_7_vars_1+1);
			page_7_2.find(".matn").html("رتبه"+" "+(page_7_vars_1+1)+" "+":"+" "+sorted_by_reports_count[page_7_vars_1].first_name+" "+sorted_by_reports_count[page_7_vars_1].last_name+" "+":"+sorted_by_reports_count[page_7_vars_1].service_count+" "+"سرویس");
			$("#export_container").append(page_7_2);
			$("#export_container").append('<br>');
			page_7_2.css("display","inline-block");
		};
	});
	$(".chart .page_7_button_13").click(function(){
		$("#export_container").empty();
		var page_7_vars_1;
		//its better to change name of this :
		
		var sorted_by_reports_count= inline_database_1.sort((first,second)=>{return first.service_count-second.service_count});
		
		for(page_7_vars_1=0;page_7_vars_1<sorted_by_reports_count.length;page_7_vars_1++){
			var page_7_2=$("#samples .page_7_sample_1").clone(true);
			page_7_2.find(".page_7_sample_1_driver_code").html(page_7_vars_1+1);
			page_7_2.find(".matn").html("رتبه"+" "+(page_7_vars_1+1)+" "+":"+" "+sorted_by_reports_count[page_7_vars_1].first_name+" "+sorted_by_reports_count[page_7_vars_1].last_name+" "+":"+sorted_by_reports_count[page_7_vars_1].service_count+" "+"سرویس");
			$("#export_container").append(page_7_2);
			$("#export_container").append('<br>');
			page_7_2.css("display","inline-block");
		};
		
	});
	
	$("#page_7 .search_box").on('input',function(){
		if($(".search_box").val()!=''){
			$("#export_container").empty();
			var search_results =[];
			for(var i=0;i<inline_database_1.length;i++){
				var bool_1='g';
				if(JSON.stringify(Object.values(inline_database_1[i])).includes($(".search_box").val())){
					search_results.push(i);
				};
				//care about zero base counting
			};
			for(var i=0;i<search_results.length;i++){
				
				var page_7_2=$("#samples .page_7_sample_1").clone(true);
				page_7_2.find(".page_7_sample_1_driver_code").html(search_results[i]+1);
				page_7_2.find(".matn").html("رتبه"+" "+(i+1)+" "+":"+" "+inline_database_1[search_results[i]].first_name+" "+inline_database_1[search_results[i]].last_name);
				$("#export_container").append(page_7_2);
				$("#export_container").append('<br>');
				page_7_2.css("display","inline-block");
			};
		}else{
			$("#export_container").empty();
		};
		
	});
	
	//about "pop_up_large":
	$(".pop-up-large .report .submit_button").click(function(){
		
		save_new_report(Number($("#page5_driver_code").html()));
		$(".pop-up-large").fadeOut();
		
		setTimeout(()=>{
			let tem_h=Number($("#page5_driver_code").html());
		if(inline_database_1[tem_h-1].more_info!=""){
			$("#ex_info_2").html("توضیحات بیشتری که برای این راننده ثبت کرده اید به این شرح است:"+"<br><br>"+inline_database_1[tem_h-1].more_info);
		}else{$("#ex_info_2").html("شما برای این راننده توضیحی ثبت نکرده اید.");};
		
		$("#page5_driver_full_name").html(inline_database_1[tem_h-1].first_name+' '+inline_database_1[tem_h-1].last_name);
		$(".report_sample_container").empty();
		for(var open_driver_page_t1=0;open_driver_page_t1<inline_database_1[tem_h-1].reports.length;open_driver_page_t1++){
			var xp=$(".ec .report_sample").clone();
			xp.find(".report_sample_text").html(inline_database_1[tem_h-1].reports[open_driver_page_t1].text);
			xp.find(".report_sample_title").html("گزارش شماره"+" "+(open_driver_page_t1+1)+" "+":");
			xp.appendTo(".report_sample_container");
			xp.fadeIn();
		};
		$("#page5_service_count_sen").html("آقای"+" "+inline_database_1[tem_h-1].first_name+" "+inline_database_1[tem_h-1].last_name+" "+"تا به حال"+" "+inline_database_1[tem_h-1].service_count+" "+"تا سرویس رفته است.");
	},600);
	});
	//todo:use qnige names for for clickes:
	//may several of them use togheter or aother case which is in my mind!
	for_2_click_1 = 0;
	$(".pop-up-large .report .clear_button").click(function(){
		if(for_2_click_1==0){
			for_2_click_1+=1;
			alert("برای حذف متنی که تا اینجا وارد کرده اید دوباره علامت سطل آشغال را فشار دهید.");
		}else{
			for_2_click_1-=1;
			$(".report .entry").val('');
			alert("با موفقیت پاک شد!");
		};
	});
	function compare_dates(first_date,second_date){
		//from biggest to lowest.
	var s_dates=[first_date,second_date];
	s_dates.sort(function(){return first_date.getTime()-second_date.getTime()});
	return s_dates;
	};
	
	
	
});

	