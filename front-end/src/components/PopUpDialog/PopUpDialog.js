import { Component } from 'react';
import './PopUpDialog.css'
import "../../common/animationsSetup.css"
import { TestContext } from '../../global_context';
class PopUpDialog extends Component{  

    render(){
        return(
            
            <TestContext.Consumer>
                {({toggle,popUpIsVisible,pop_up_content,pop_up_title})=>(

                    <div id="popUpDialogContainer" hidden={!popUpIsVisible} className="animate-children-fade">
                        <div id="popUpDialog">
                            <h5 id="title">{pop_up_title}</h5>
                            <hr />
                            <p>{pop_up_content}</p>
                            <button onClick={toggle}>متوجه شدم</button>
                        </div>
                    </div>
                    
                )}
            </TestContext.Consumer>
           
        )
    }
}

export default PopUpDialog;
