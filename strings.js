const strings = {
    english:{
        
    },
    persian:{
        
    }
}
const tmp = {
    new_report:["new report","گزارش جدید"],
    enter_driver_code:["enter driver code","کد راننده را وارد کنید"],
    driver_name:["driver name","نام راننده"],
    enter_report_text:["enter report text","متن گزارش را وارد کنید"],
    save_report:["save report","ذخیره کردن گزارش"],
    discard:["discard","نادیده گرفتن"],
    all_reports:["all repotrs","همه گزارش ها"],
    open_reports:["open reports","گزارش های باز"],
    closed_reports:["closed reports","گزارش های بسته"],
    reports:["reports","گزارش ها"],
    your_report_saved:["your report saved","گزاش شما ثبت شد"],
    report_id:["report id","آی دی گزارش"],
    driver_code:["driver code","کد راننده"],
    report_text:["report text","متن گزارش"],
    status:["status","وضعیت"],
    not_checked:["not checked","چک نشده"],
    checked:["checked","چک شده"],
    toggle:["toggle","تغییر وضعیت"],
    go_back:["go back","برگشتن"],
    settings:["settings","تنظیمات"],
    change_password:["change password","عوض کردن رمز عبور"],
    change_language:["change language","عوض کردن زبان"],
    reset_factory:["reset factory","بازنشانی کارخانه"],
    are_you_sure:["are you sure?","آیا مطمئن هستید؟"],
    try_again:["there was an error, please try again"],
    reset_factory_confirm_message:["danger! are you sure you want to delete all your data and start app again ?","آیا مطمئن هستید میخواهید همه اطلاعات را پاک کرده و دوباره برنامه را از اول شروع کنید؟ "],
    reset_factory_success:["done successfuly and app will restart soon","با موفقیت انجام شد و به زودی برنامه ری استارت خواهد شد."],
    what_is_your_old_password:["what is your current password ?","رمز عبور فعلی شما چیست؟"],
    what_is_your_new_password:["what is your new password ?","رمز عبور جدید شما چیست؟"],
    success:["donw successfuly","با موفقیت انجام شد"]


}
function build(tmp){
    for(prop in tmp){
        strings.english[prop] = tmp[prop][0]
        strings.persian[prop] = tmp[prop][1]
    }
}

build(tmp)