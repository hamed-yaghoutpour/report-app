window.onload = function(){
    document.getElementById('reset_factory').onclick = function(){
        user_confirm = prompt('if you are sure you want to delete all app data, please type "yes" here');
        if(user_confirm == "yes"){
            localStorage.clear()
            window.location.replace('../new_report/index.html')
        }
    }
}