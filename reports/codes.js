window.onload = function(){
    api.get_reports().forEach(i =>{
        renderReportOption({
            report_code:i.driver_code,
            title:i.driver_name,
            info:"info",
            targetEl:document.getElementById('reports')
        })
    })
    
    api.get_open_reports().forEach(i =>{
        renderReportOption({
            report_code:i.driver_code,
            title:i.driver_name,
            info:"info",
            targetEl:document.getElementById('open_reports')
        })
    })
    api.get_closed_reports().forEach(i =>{
        renderReportOption({
            report_code:i.driver_code,
            title:i.driver_name,
            info:"info",
            targetEl:document.getElementById('closed_reports')
        })
    })

}