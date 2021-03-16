Vue.component('myheader',{
    props:["home_button_disabled"],
    props:{
        home_button_disabled:Boolean
    },
    template:`
        <div id="header">
        <div class="relative_container">
            <svg v-on:click="go_home_page" class="house_icon" viewBox="0 0 16 16" fill="aqua" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
            <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            </svg>
            <h1 id="header_name">report app</h1>
            <h1 style="position: absolute;top: 50%;transform: translate(0,-50%);left:33%;color:white;">manage your work powerfully!</h1>
            <button class="log_out_button" v-on:click="log_out"><h2>log out</h2></button>
        </div>
        </div>
    `,
    methods:{
        go_home_page:function(){
            if(!this.home_button_disabled){
                window.location.assign("../home/home.php");
            }
        },
        log_out:function(){
            window.location.assign("../login/login.php");
        }
    }
})
$(document).ready(function() {
    const app = new Vue({
        el:"#vue_header_container"
    });
})
