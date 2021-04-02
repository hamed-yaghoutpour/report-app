Vue.component('driver-page',{
	
	template:(`
<div id="driver_page">
	<div class="part_1">
		<div class="right-side">
			<div id="driver_image"></div>
		</div>
		<div class="left-side">
			<div class="row">
				<h1 id="driver_code">
				#{{this.driver_code()}}
				</h1>
				<b id="driver_full_name">
					حامد یاقوت پور
				</b>
				<button class="edit_driver_info">
					<img src="C:/xampp/htdocs/my projects/report-app-master/archive/bootstrap_edited_icons/pen-white.svg">
				</button>
				
			</div>
			
				
				<h4 class="row extra_info">
					شماره تلفن همراه:  <span></span>
				</h4>
				<h4 class="row extra_info">
					شماره تلفن منزل:  <span></span>
				</h4>
				<h4 class="row extra_info">
					آدرس:  <span></span>
				</h4>
				<h4 class="row extra_info">
					اطلاعات بیشتر درباره این راننده:  <span></span>
				</h4>
				<h4 class="row extra_info">
					تعداد گزارش ها:  <span></span>
				</h4>
				
		</div>
		
		
	</div>
	
	
	
	<div class="container-like-github">
		<div class="box-top">
			<h1 class="title">گزارش ها</h1>
			<button class="add_new_report_button" v-on:click="new_report(driver_code())">+</button>
		</div>
		<div class="box-content" id="reports_container">
			<report 
			v-for="report in reports"
			v-bind:report_id="report.report_id"
			v-bind:check_status="report.seen_status"
			v-bind:date="report.date"
			v-bind:counter="report.counter"
			v-bind:report_text="report.report_text"
			></report>
		</div>
	</div>
	<div class="container-like-github">
		<div class="box-top">
			<h1 class="title">سرویس ها</h1>
			
			<button class="plus" v-on:click="new_service(driver_code())">+</button>
		</div>
		<div class="box-content services" id="services">
			<service
			v-for="service in services"
			v-bind:service_id="service.service_id"
			v-bind:time="service.time"
			v-bind:counter="service.counter"
			></service>
		</div>
	</div>
</div>
	`),
	data:function(){
		return {
			reports:this.reports_func(),
			services:this.services_func()
		}
	},
	methods:{
		new_service:function(driver_code){
			$.ajax({
				url:"../ajax/add_service.php",
				method:"GET",
				async:false,
				data:{
					driver_code: driver_code
				},
				success:function(){
					//update services
				}
			});
		},
		new_report:function(driver_code){
			window.location.assign("#/new_report/"+driver_code)
		},
	
		//make sure computed data work good with ajax 
		//may its watchers dont work as we need !
		
		driver_code:function(){
			return this.$route.params.driver_code
		},
		driver_info:function(driver_code){
			let return_value;
			$.ajax({
				url:"actions.php",
				async:false,
				data:{
					action:"update_info",
					driver_code:driver_code
				},
				success:function(json){
					return_value = JSON.parse(json);
			}
			
			})
			return return_value;
		},
		services_func:function(driver_code){
			let return_value = false;
			$.ajax({
				url:"actions.php",
				async:false,
				data:{
					action:"update_services",
					driver_code:driver_code
				},
				success:function(json){
					return_value = JSON.parse(json);
					
				}
			})
			return_value = [
				{
					service_id:1,
					time:1,
					counter:1
				}
			]
			return return_value;
		},
		reports_func:function(driver_code){
			let return_value = false;
			$.ajax({
				url:"actions.php",
				async:false,
				data:{
					action:"update_reports",
					driver_code:driver_code
				},
				success:function(json){
					return_value = JSON.parse(json);
					
				}

			})
			return_value = [
				{
					counter:1,
					date:"hamed",
					report_text:"1",
					seen_status:true
				}
			]
			return return_value;
		}
	}
})