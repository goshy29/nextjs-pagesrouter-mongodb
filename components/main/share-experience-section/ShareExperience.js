import UserForm from "@/components/UIElements/UserForm";
import classes from "./ShareExperience.module.css";
import { useRouter } from "next/router";

function ShareExperience() {
    const router = useRouter();

    async function handlerShareExp(shareExpData) {
        try {
            const response = await fetch("/api/blog",
                {
                    method: "POST",
                    body: JSON.stringify(shareExpData),
                    headers: { "Content-Type": "application/json" }
                }
            );

            if (!response.ok) {
                throw new Error("Failed to post the experience.");
            }

            router.push("/blog");
        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <>
            <section className={classes.share}>
                <div className={classes.share_content}>
                    <h1>Share Your Experience</h1>
                </div>
            </section>
            <section className={classes.user_input_section}>
                <div className="content">
                    <UserForm onShareExp={handlerShareExp} />
                </div>            
            </section>
        </>
    );
}

export default ShareExperience;