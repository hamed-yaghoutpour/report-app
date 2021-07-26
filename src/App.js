
import AppFrame from './components/AppFrame/AppFrame.js'
import NavBar from './components/nav-bar/NavBar.js'
import NewReport from './components/new_report/NewReport.js'
import Reports from './components/reports/Reports.js'
import Result from './components/result/Result.js'
import Settings from './components/settings/Settings.js'
import TopContainer from './components/TopContainer/TopContainer.js'
import React from 'react'
import {
     Route,
    Switch,
    HashRouter
} from "react-router-dom";


function App(){
    return(
        <AppFrame>
            <TopContainer>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" render={p=><NewReport />  }/>
                        <Route path="/reports" render={p=><Reports/>} />
                        <Route path="/settings" render={p=><Settings />} />
                        <Route path="/result/:report_code" render={(props)=><Result report_code={props.match.params.report_code}/> }/>
                        <Route path="/new_report" render={p=><NewReport />} />
                    </Switch>
                </HashRouter>
            </TopContainer>
            
            <NavBar></NavBar>
        </AppFrame>
    )
}
export default App;