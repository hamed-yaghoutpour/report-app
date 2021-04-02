$(".search_box").on('input',function(){
	$.ajax({
		url:"search.php",
		success:function(data){
			$("#export_container").html(data);
		}
	});
});
Vue.component("export-data-page",{
	template:(`
		
	`)
})