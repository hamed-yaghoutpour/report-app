import { Component } from "react";
import "./styles.css";
class TipBox extends Component{
    render(){
        return(
            <div>{this.props.content}</div>
        )
    }
}
export default TipBox;