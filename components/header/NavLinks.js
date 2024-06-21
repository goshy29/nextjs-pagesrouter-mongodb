import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./navigation/MainNavigation.module.css";

function NavLinks(props) {
    const router = useRouter();

    return ( 
        <>
            <li className={classes.navbar_item}>
                <Link href="/" onClick={props.onClick} className={router.pathname === "/" ? classes.active : classes.navbar_link}>
                    Home
                </Link>
            </li>
            <li className={classes.navbar_item}>
                <Link href="/news" onClick={props.onClick} className={router.pathname === "/news" ? classes.active : classes.navbar_link}>
                    News
                </Link>
            </li>
            <li className={classes.navbar_item}>
                <Link href="/blog" onClick={props.onClick} className={router.pathname === "/blog" ? classes.active : classes.navbar_link}>
                    Blog
                </Link>
            </li>
            <li className={classes.navbar_item}>
                <Link href="/share-experience" onClick={props.onClick} className={router.pathname === "/share-experience" ? classes.active : classes.navbar_link}>
                    Share Experience
                </Link>
            </li>
        </>
    );
}

export default NavLinks;