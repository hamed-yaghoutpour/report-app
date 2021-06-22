var api = {}
api.new_report = function(driver_code,driver_name,report_text,is_open){
    id = 1
    if(api.get_reports().length != 0){
        id = (api.get_reports().length +1)
    }
    new_report = {
        driver_code,
        driver_name,
        report_text,
        is_open,
        id
    }
    appendToLocalStorageArray('reports',new_report)
}
api.get_reports = function(){
    if(localStorage.getItem('reports') != null){
        return JSON.parse(localStorage.getItem('reports'))
    }else{
        return [];
    }
    
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
