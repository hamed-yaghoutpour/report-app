var myApi = new api
window.onload = function(){
    document.getElementById('reset_factory').onclick = function(){
        myApi.reset_database()
        window.location.replace('../new_report/index.html')
    }
}