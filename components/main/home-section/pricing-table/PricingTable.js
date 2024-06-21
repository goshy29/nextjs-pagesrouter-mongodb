import classes from "./PricingTable.module.css";

function PricingTable() {
    return ( 
        <div className={classes.wrap}>
            <ul className={classes.items}>
                <li>
                    <div className={classes.item}>
                        <h4>ONE DAY TRAINING</h4>
                        <span className={classes.price}>
                            <span className={classes.number}>9</span>
                            <sup>$</sup>                            
                        </span>
                        <h4>ENJOY ALL THE FEATURES</h4>
                        <p>Onetime Access To All Club</p>
                        <p>Group Trainer</p>
                        <p>Book A Group Class</p>
                        <p>Fitness Orientation</p>
                    </div>
                </li>
                <li>
                    <div className={classes.item}>
                        <h4>PAY EVERY MONTH</h4>
                        <span className={classes.price}>
                            <span className={classes.number}>86</span>
                            <sup>$</sup> 
                        </span>
                        <h4>ENJOY ALL THE FEATURES</h4>
                        <p>Group Classes</p>
                        <p>Discuss Fitness Goals</p>
                        <p>Group Trainer</p>
                        <p>Fitness Orientation</p>
                    </div>
                </li>
                <li>
                    <div className={classes.item}>
                        <h4>1 YEAR MEMBERSHIP</h4>
                        <span className={classes.price}>
                            <span className={classes.number}>249</span>
                            <sup>$</sup> 
                        </span>
                        <h4>ENJOY ALL THE FEATURES</h4>
                        <p>Group Classes</p>
                        <p>Discuss Fitness Goals</p>
                        <p>Group Trainer</p>
                        <p>Fitness Orientation</p>
                    </div>
                </li>
        </ul>
        </div>
    );
}

export default PricingTable;