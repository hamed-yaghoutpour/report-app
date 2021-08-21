import AppFrame from './components/AppFrame/AppFrame.js'
import NewReport from './components/new_report/NewReport.js'
import Reports from './components/reports/Reports.js'
import Result from './components/result/Result.js'
import Settings from './components/settings/Settings.js'
import React from 'react'
import {Route,Switch,HashRouter} from "react-router-dom";
import ContentContainer from './components/ContentContainer/ContentContainer.js'
import SideBar from './components/SideBar/SideBar.js'
import PopUpDialog from './components/PopUpDialog/PopUpDialog.js'
import { TestContext } from './global_context.js'

class App extends React.Component{
    constructor(props){
        super()
        this.state= {
            toggle:()=>{
                this.setState({
                    popUpIsVisible:!this.state.popUpIsVisible
                })
            },
            popUpIsVisible:true,
            pop_up_title:"empty",
            pop_up_content:"empty",
            set_pop_up_data : (title,content)=>{
                this.setState({
                    pop_up_title:title,
                    pop_up_content:content
                })
            }
        }
    }
    render = ()=>{
        return(
        <TestContext.Provider value={this.state}>
            <AppFrame>
                <PopUpDialog />
                <ContentContainer>
                    <HashRouter>
                        <Switch>
                            <Route exact path="/" render={p=><NewReport />  }/>
                            <Route path="/reports" render={p=><Reports/>} />
                            <Route path="/settings" render={p=><Settings />} />
                            <Route path="/result/:report_code" render={(props)=><Result report_code={props.match.params.report_code}/> }/>
                            <Route path="/new_report" render={p=><NewReport />} />
                        </Switch>
                    </HashRouter>
                </ContentContainer>
                <SideBar />
            </AppFrame>
        </TestContext.Provider>
            
        
    )
    }
}
export default App;