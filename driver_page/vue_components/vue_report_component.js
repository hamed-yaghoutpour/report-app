function delete_service(service_id){
	let return_value;
	$.ajax({
		url:"actions.php",
		data:{
			action:"delete_service",
			service_id:service_id
		},
		async:false,
		success:function(){
			return_value = true;
		}
	});
	return return_value;
}
Vue.component('report',{
	props:[
		"report_id",
		"check_status",
		"counter",
		"date",
		"report_text"
	],
	props:{
		report_id:{
			type:Number
		},
		check_status:{
			type:Boolean
		},
		counter:{
			type:Number
		},
		report_text:{
			type:String
		},
		date:{
			type:String
		}
	},
	data:function(){
		return{
		data_report_id:this.report_id,
		data_check_status:this.check_status,
		data_counter:this.counter,
		data_date:this.date,
		data_report_text:this.report_text
		}
	},
	
	template:
	`
	<div class="new_unread_report">
		<h1 class="title" v-if="data_check_status"><span>{{data_counter}}-</span>گزارش رسیدگی شده</h1>
		<h1 class="title" v-else><span>{{data_counter}}-</span>گزارش رسیدگی نشده</h1>
		<p class="report_message">{{data_report_text}}</p>
		<button class="open_driver_page" v-on:click="toggle">تغییر وضعیت رسیدگی</button>
	</div>
	`,
	methods:{
		toggle:function(){
			var elem = this;
			if(this.data_check_status){
				$.ajax({
					url:"../ajax/toggle_report_check_status.php",
					method:"GET",
					data:{
						report_id:elem.data_report_id,
						make_false:"something"
					},
					success:function(){
						elem.data_check_status = !elem.data_check_status;
					}
				});
			}else{
				$.ajax({
					url:"../ajax/toggle_report_check_status.php",
					method:"GET",
					data:{
						report_id:elem.data_report_id,
						make_true:"something"
					},
					success:function(){
						elem.data_check_status = !elem.data_check_status;
					}
				});
			};
		}
	}
});


Vue.component('service',{
	props:["time","service_id","counter"],
	props:{
		service_id:Number,
		counter:Number,
		time:Number || String
	},
	template:
	`
	<div class='service'>
		<h1 class='counter'>{{counter}}</h1>
		<h1 class='time'>{{time}}</h1>
		<h4 class='delete'>حذف این سطر</h4>
	</div>
	`,
	methods:{
		delete_this_service:function(){
			delete_service(this.service_id);
			update_page();
		}
	}
})

var app = false;

app = new Vue({
	el:"#reports_container",
	data:{
		reports:[
			/* {
				report_id:22,
				seen_status:true,
				date:'hamed',
				counter:2,
				report_text:'report text is this'
			} */
		]
	}
});


var services_app = new Vue({
	el:"#services",
	data:{
		services:[
			/* {
				service_id :2,
				time:100000,
				counter:22
			} */
		]
	}
})

