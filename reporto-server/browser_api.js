async function new_report(driver_code,driver_name,report_text){
    var response = await fetch(`http://localhost:3000/new_report?driver_code=${driver_code}&driver_name=${driver_name}&report_text=${report_text}`)
    return await response.text() == "ok"
}
async function get_reports(){
    var response = await fetch('http://localhost:3000/reports')
    return response.json()
}
async function toggle_report_status(report_code){
    var response = await fetch('http://localhost:3000/toggle_report_status?report_code='+report_code)
    return (await response.text() == "ok")
}
async function reset_database(){
    var response = await fetch('http://localhost:3000/reset_database')
    return (await response.text() == "ok")
}
