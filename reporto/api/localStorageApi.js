
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
