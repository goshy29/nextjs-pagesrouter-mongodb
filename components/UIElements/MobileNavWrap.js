import classes from "./MobileNavWrap.module.css";

function MobileNavWrap(props) {
    return ( 
        <div className={classes.wrap} onClick={props.onClick}></div>    
    );
}

export default MobileNavWrap;