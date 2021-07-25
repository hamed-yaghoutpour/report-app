import './TopContainer.css'
function TopContainer(props){
    return(
        <div className="container-top">{props.children}</div>
    )
}

export default TopContainer;
