function submit(){
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
				driver_code:22
			},
			success:function(data){
				window.location.assign("../home/home.php");
			}
		});
	};
};

Vue.component("edit-driver-info-page",{
	props:[
		"driver_code",
		"first_name",
		"last_name",
		"mobile_phone_number",
		"home_phone_number",
		"extra_info",
		"address"
	],
	template:`
		<div class="container-fluid">
<div class="row" style="width:100%;position:relative;height:100px;"></div>
<div class="row" style="direction:rtl;">
	<div class="col-1">
	</div>
	<div class="col-4">
		<h1 class="main_title">ویرایش اطلاعات راننده</h1>
	</div>
	
</div>
<div class="row justify-content-center">
	<div class="col-10">
		<table class="table table-striped table-info">
		<tr>
			<th>-</th>
			<th>مقدار قدیمی</th>
			<th>مقدار جدید</th>
		</tr>
		<tr>
			<th>شماره راننده</th>
			<td>{{driver_code}}</td>
		</tr>
		<tr>
			<th>نام</th>
			<td>{{first_name}}</td>
			<td><input id="first_name_input"></td>
		</tr>
		<tr>
			<th>نام خانوادگی</th>
			<td>{{last_name}}</td>
			<td><input id="last_name_input"></td>
		</tr>
		<tr>
			<th>آدرس</th>
			<td>{{address}}</td>
			<td><input id="address_input"></td>
		</tr>
		<tr>
			<th>شماره تلفن همراه</th>
			<td>{{mobile_phone_number}}</td>
			<td><input id="mobile_phone_number_input"></td>
		</tr>
		<tr>
			<th>شماره تلفن ثابت</th>
			<td>{{home_phone_number}}</td>
			<td><input id="home_phone_number_input"></td>
		</tr>
		<tr>
			<th>توضیحات بیشتر درباره راننده</th>
			<td>{{extra_info}}</td>
			<td><input id="extra_info_input"></td>
		</tr>
		</table>
	
	</div>
	
</div>
<div class="row justify-content-center">
	<div class="col-10">
		<button class="submit btn btn-primary" v-on:click="submit">ثبت نهایی اطلاعات</button>
	</div>
	
</div>
<div class="row">
	<div class="col-12" style="height:150px">
	</div>
</div>
</div>
	`,
	methods:{
		submit: submit
	}
})

