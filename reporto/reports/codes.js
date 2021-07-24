var myApi = new api 
window.onload = function(){
    myApi.parsed_database().reports.forEach(i =>{
        renderReportOption({
            report_code:i.id,
            title:i.driver_name,
            info:"info",
            targetEl:document.getElementById('reports')
        })
    })
    
    myApi.open_reports().forEach(i =>{
        renderReportOption({
            report_code:i.id,
            title:i.driver_name,
            info:"info",
            targetEl:document.getElementById('open_reports')
        })
    })
    myApi.closed_reports().forEach(i =>{
        renderReportOption({
            report_code:i.id,
            title:i.driver_name,
            info:"info",
            targetEl:document.getElementById('closed_reports')
        })
    })

}