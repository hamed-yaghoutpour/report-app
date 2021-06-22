window.onload = function(){
    document.getElementById('add_new_report').onclick = function(){
        driver_code = Number(document.getElementById('driver_code').value)
        driver_name = document.getElementById('driver_name').value
        report_text = document.getElementById('report_text').value
        api.new_report(driver_code,driver_name,report_text,true)
        alert('done successfuly !')
    }
    document.getElementById('discard').onclick= function(){
        document.getElementById('driver_code').value = ""
        document.getElementById('driver_name').value = ""
        document.getElementById('report_text').value = ""
    }
}