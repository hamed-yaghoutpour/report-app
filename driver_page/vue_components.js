$(document).ready(function(){
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
							elem.data_check_status = false;
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
							elem.data_check_status = true
						}
					});
				};
			}
		}
	});
const app = new Vue({
		el:"#vue_container",
	});
});