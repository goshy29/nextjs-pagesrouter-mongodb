import Link from "next/link";
import ImageSlideshow from "@/components/image/ImageSlideshow";
import classes from "./Home.module.css";
import PricingTable from "./pricing-table/PricingTable";

function Home() {
    return ( 
        <>
            <section className={classes.home}>
                    <div className={classes.home_content}>
                        <h1>Welcome To</h1>
                        <h1>Iron Muscle</h1>
                    </div>
            </section>
            <section className={classes.home_section}>
                <div className="content">
                    <div className={classes.slideshow_section}>
                        <div className={classes.slideshow}>
                            <ImageSlideshow />
                        </div>
                        <div className={classes.join}>
                            <h2>Next Level Workout</h2>   
                            <h2>For Next Level Body</h2> 
                            <p>Share your recipe for a perfect body with everyone around the world.</p>
                            <div className={classes.btn}>                
                                <Link href="/share-experience">Get Started</Link> 
                            </div>
                        </div>
                    </div>
                </div>            
            </section>
            <section className={classes.home_section_membership}>
                <div className="content">
                    <div className={classes.home_content}>
                        <h2>Pricing Tables</h2>
                        <h1>Membership Plans</h1>
                    </div>
                    <PricingTable />
                </div>            
            </section>
        </>
    );
}

export default Home;