import classes from "./Navigation.module.css";
import mobileClass from "./navigation/MobileNavigation.module.css";
import { useState } from "react";
import MainNavigation from "./navigation/MainNavigation";
import MobileNavWrap from "../UIElements/MobileNavWrap";
import MobileNavigation from "./navigation/MobileNavigation";
import NavLinks from "./NavLinks";

function Navigation() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    function handlerOpenMobileNav() {
        setIsMobileNavOpen(true);
    }

    function handlerCloseMobileNav() {
        setIsMobileNavOpen(false);
    }

    return ( 
        <>
            {isMobileNavOpen && (<MobileNavWrap onClick={handlerCloseMobileNav}/>)}
            {isMobileNavOpen && 
                (<MobileNavigation onClose={handlerCloseMobileNav}>
                    <nav className={mobileClass.mobile_navbar}>
                        <ul className={mobileClass.mobile_navbar_list}>
                            <NavLinks onClick={handlerCloseMobileNav}/>
                        </ul>    
                    </nav>        
                </MobileNavigation>)
            }

            <header className={classes.main_header}>
                <MainNavigation onClick={handlerOpenMobileNav}/>
            </header>
        </>
    );
}

export default Navigation;