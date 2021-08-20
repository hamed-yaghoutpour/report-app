import { Component } from 'react';
import './PopUpDialog.css'
import "../../common/animationsSetup.css"
class PopUpDialog extends Component{  
    /* @props =>
        active:bool,
        title,
        content
        */
    constructor(props){
        super(props)
        this.state={
            this_component_is_active:this.props.active
        }
    }
    static getDerivedStateFromProps= (props,state)=> {
        if(state.this_component_is_active=== false) return null
        return {
            this_component_is_active:props.active
        }
    }
    closeDialog =()=>{
        this.setState({
            this_component_is_active:false
        })
    }
    render(){
        return(
            <div id="popUpDialogContainer" hidden={!this.state.this_component_is_active} className="animate-children-fade">
                <div id="popUpDialog">
                    <h5 id="title">{this.props.title}</h5>
                    <hr />
                    <p>{this.props.content}</p>
                    <button onClick={this.closeDialog}>متوجه شدم</button>
                </div>
            </div>
        )
    }
}
export default PopUpDialog;
