function change_password(){
	var old_password = prompt("رمز فعلی خود را وارد کنید");
	console.log(old_password)
	if(old_password == null || old_password == "undefined"){return;}
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
}
function reset_factory(){
	var verify_keyword = prompt("در صورتی که واقعا مطمئن هستید که میخواهید تمام اطلاعات را حذف کرده و دوباره از ابتدا برنامه شروع شود ، کلمه بله را بنویسید.");
	var bool = (verify_keyword == "بله");
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
}
Vue.component("settings-page",{
	methods:{
		change_password:change_password,
		reset_factory:reset_factory
	},
	template:(`
	<div id="settings_container">
		<h1 class="title">تنظیمات</h1>
		
		<div class="settings-option" v-on:click="reset_factory">
			<h1>پاک کردن تمام داده ها</h1>
			<b>با انتخاب این گزینه تمام داده های ذخیره شده پاک خواهد شد</b>
		</div>
		<div class="settings-option" v-on:click="change_password">
			<h1>تغییر رمز عبور</h1>
			<b>رمز عبور خود را تغییر دهید</b>
		</div>
		
	</div>
	`)
})