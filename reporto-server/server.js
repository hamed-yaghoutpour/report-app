const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
const api = require('./apiClass').api
var myApi = new api()

app.all('/new_report',(req,res)=>{
    invalid_params = typeof req.query.driver_code == "undefined" || typeof req.query.driver_name == "undefined" || typeof req.query.report_text == "undefined"
    if(invalid_params){
        res.send('invalid_params')
        return false
    }
    myApi.new_report(
        req.query.driver_code,
        req.query.driver_name,
        req.query.report_text
        )
    res.send('ok')
})
app.all('/reports',(req,res)=>{
    res.send(JSON.stringify(myApi.get_reports()))
})
app.all('/reset_database',(req,res)=>{
    myApi.reset_database()
    res.send('ok')
})
app.all('/toggle_report_status',(req,res)=>{
    myApi.toggle_report_status(Number(req.query.report_code))
    res.send('ok')
})
app.listen(3000)