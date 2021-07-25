//import api from './apiClass.js'
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
    BrowserRouter as Router,
    Switch,
    HashRouter
} from "react-router-dom";


function App(){
    return(
        <AppFrame>
            <TopContainer>
                <HashRouter>
                    <Switch>
                        <Route path="/">
                            <NewReport />
                        </Route>
                        <Route path="/reports">
                            <Reports/>
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/result">
                            <Result />
                        </Route>
                        <Route path="/new_report">
                            <NewReport />
                        </Route>
                    </Switch>
                </HashRouter>
            </TopContainer>

            <NavBar></NavBar>
        </AppFrame>
    )
}
export default App;