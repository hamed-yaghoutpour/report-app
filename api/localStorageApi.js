var api = {}
api.new_report = function(driver_code,driver_name,report_text,is_open){
    new_report = {
        driver_code,
        driver_name,
        report_text,
        is_open
    }
    appendToLocalStorageArray('reports',new_report)
}
api.get_reports = function(){
    return JSON.parse(localStorage.getItem('reports'))
}
api.get_open_reports = function(){
    return api.get_reports().filter(r=>{
        return r.is_open
    })
}
api.get_closed_reports = function(){
    return api.get_reports().filter(r=>{
        return !r.is_open
    })
}
