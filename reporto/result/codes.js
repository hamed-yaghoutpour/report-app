var myApi = new api

window.onload = function(){
    report_to_show = myApi.parsed_database().reports[Number(localStorage.getItem('report_code')) -1 ]
    els = {
        report_code:document.getElementById('report_code'),
        driver_name:document.getElementById('driver_name'),
        driver_code:document.getElementById('driver_code'),
        report_text:document.getElementById('report_text'),
        status_text:document.getElementById('status_text'),
        

    }
    els.report_code.innerHTML = report_to_show.id
    els.driver_name.innerHTML = report_to_show.driver_name
    els.driver_code.innerHTML = report_to_show.driver_code
    els.report_text.innerHTML = report_to_show.report_text
    if(report_to_show.is_open){
        els.status_text.innerHTML = "not checked"
    }else{
        els.status_text.innerHTML = "checked"
    }
    document.getElementById("toggle_button").onclick = function(){
        myApi.toggle_report_status(Number(localStorage.getItem('report_code')))
        report_to_show = report_to_show = myApi.parsed_database().reports[Number(localStorage.getItem('report_code')) -1]
        
        els = {
            report_code:document.getElementById('report_code'),
            driver_name:document.getElementById('driver_name'),
            driver_code:document.getElementById('driver_code'),
            report_text:document.getElementById('report_text'),
            status_text:document.getElementById('status_text'),
            
    
        }
        if(report_to_show.is_open){
            els.status_text.innerHTML = "not checked"
        }else{
            els.status_text.innerHTML = "checked"
        }
    }
}