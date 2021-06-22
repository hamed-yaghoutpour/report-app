function toggle_report_status(report_code){
    indexOfThatReport = null
    for(let i =0;i<api.get_reports().length;i++){
        if(api.get_reports()[i].id == report_code){
            indexOfThatReport = i
            break;
        }
    }
    reports = api.get_reports()
    reports[indexOfThatReport].is_open = !reports[indexOfThatReport].is_open
    localStorage.setItem('reports',JSON.stringify(reports));
}
window.onload = function(){
    report_to_show = JSON.parse(localStorage.getItem('reports')).filter(i=>{
        return i.id == Number(localStorage.getItem('report_code'))
    })[0]
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
        toggle_report_status(Number(localStorage.getItem('report_code')))
        report_to_show = JSON.parse(localStorage.getItem('reports')).filter(i=>{
            return i.id == Number(localStorage.getItem('report_code'))
        })[0]
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