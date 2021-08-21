import './AppFrame.css'
function AppFrame(props){
    return (
        <div className="appFrame">
            
            {props.children}
            </div>
    )
}
export default AppFrame