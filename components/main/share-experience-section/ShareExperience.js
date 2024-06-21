import UserForm from "@/components/UIElements/UserForm";
import classes from "./ShareExperience.module.css";

function ShareExperience() {
    return ( 
        <>
            <section className={classes.share}>
                <div className={classes.share_content}>
                    <h1>Share Your Experience</h1>
                </div>
            </section>
            <section className={classes.user_input_section}>
                <div className="content">
                    <UserForm />
                </div>            
            </section>
        </>
    );
}

export default ShareExperience;