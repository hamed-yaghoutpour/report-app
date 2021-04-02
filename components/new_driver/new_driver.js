Vue.component("new-driver-page",{
	template:
	`
	<div id="new_driver_page">
		<h1 class="title">ثبت راننده جدید</h1>
		<h2 class="title">:اطلاعات راننده جدید را وارد کنید</h2>
		<input id="input_1" placeholder="شماره راننده">
		<input id="input_2" placeholder="نام راننده">
		<input id="input_3" placeholder="نام خانوادگی">
		<input id="input_4" placeholder="آدرس">
		<input id="input_5" placeholder="شماره تلفن همراه">
		<input id="input_6" placeholder="شماره منزل">
		<input id="input_7" style="height:100px;" placeholder="توضیحات اضافه درباره این راننده">

		<button v-on:click="submit">
			<h3>ثبت اطلاعات</h3>
		</button>
	</div>
	`,
	methods:{
		submit:function(){
			console.log("submit button clicked !")
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
		}
	}
})
