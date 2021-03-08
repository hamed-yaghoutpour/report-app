<script>
$(document).ready(function(){	
	$(".log_out_button").click(function(){
		window.location.assign("../login/login.php");
	});
	$(".house_icon").click(function(){
		window.location.assign("../home/home.php");
	});
});
</script>
<style>
#header .house_icon{
	position:absolute;
	top:50%;
	transform:translate(0%,-50%);
	left:15px;
	height:40px;
	border-radius:5px;
	padding:2px;
	transition:0.2s;
}
#header .house_icon:hover{
	background-color:blue;
	fill:white;
}
#header .chevron_down_icon{
	position: absolute;top: 50%;transform: translate(0,-50%);right: 103px;
}
#header{
height:80px;
width:100%;
position:fixed;
background-color:darkblue;
margin:0px;
padding:0px;
z-index:1;

}
#header #header_name{
	color:darkblue;
	position:absolute;
	margin:0px;padding:4px;
	top:50%;
	left:24%;
	transform:translate(-50%,-50%);
	background-color:white;
	border-radius:3px;
}

#header .log_out_button{
	border: none;
    background-color: transparent;
    margin: 0px;
    padding: 0px;
    position: absolute;
    top: 50%;
    transform: translate(0,-50%);
    right: 15px;
	
}
#header .log_out_button h2{
	color:darkblue;
	background-color:white;
	border:1px solid blue;
	border-radius:3px;
	padding:4px;
	transition:0.2s;
}
#header .log_out_button h2:hover{
	color:white;
	background-color:blue;
}

#header h1{
	padding:0px;
	margin:0px;
}
</style>
<div id="header">
<div class="relative_container">
	<svg class="house_icon" viewBox="0 0 16 16" fill="aqua" xmlns="http://www.w3.org/2000/svg"">
	  <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
	  <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
	</svg>
	<h1 id="header_name">report app</h1>
	<h1 style="position: absolute;top: 50%;transform: translate(0,-50%);left:33%;color:white;">manage your work powerfully!</h1>
	<button class="log_out_button"><h2>log out</h2></button>
</div>
</div>