import UserForm from "@/components/UIElements/UserForm";
import classes from "./ShareExperience.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

function ShareExperience() {
    const router = useRouter();
    const [error, setError] = useState();

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
                throw new Error("Failed to save Experience.");
            }

            router.push("/blog");
        } catch (err) {
            setError(err.message);
        }
    }

    return ( 
        <>
            {error ? 
                (<h3 className="content">Error: {error}</h3>) : 
                (<>
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
                </>) 
            }   
        </>
    );
}

export default ShareExperience;