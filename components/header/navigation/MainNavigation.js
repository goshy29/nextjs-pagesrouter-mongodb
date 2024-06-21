import Link from "next/link";
import classes from "./MainNavigation.module.css";
import NavLinks from "../NavLinks";

function MainNavigation(props) {
    return ( 
        <div className={classes.navigation}>
            <nav className={classes.navbar}>
                <button className={classes.mobileNav_btn_menu} onClick={props.onClick}>
                    <span />
                    <span />
                    <span />
                </button>

                <div className={classes.navbar_logo}>
                    <Link href="/" className={classes.navbar_logo_link}>iron<span>muscle</span></Link>
                </div>
                <ul className={classes.navbar_list}>
                    <NavLinks/>
                </ul>
            </nav>
        </div>
    );
}

export default MainNavigation;