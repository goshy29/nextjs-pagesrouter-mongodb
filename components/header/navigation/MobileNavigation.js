import classes from "./MobileNavigation.module.css";

function MobileNavigation(props) {
    return ( 
        <aside className={classes.mobile_nav}>
            <button className={classes.close_button} onClick={props.onClose}>
                &times;
            </button>
            {props.children}
        </aside>
    );
}

export default MobileNavigation;