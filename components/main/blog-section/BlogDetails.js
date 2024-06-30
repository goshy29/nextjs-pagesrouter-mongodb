import classes from "./BlogDetails.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

function BlogDetails(props) {
    const router = useRouter();
    const [error, setError] = useState();

    async function handlerDeletePlace() {
        const confirmDelete = window.confirm(`Do you want to Delete ${props.title}?`);
        if (confirmDelete) {
            try {
                const response = await fetch("/api/blog", {
                    method: "DELETE",
                    body: JSON.stringify({ blogId: props.id }),
                    headers: { "Content-Type": "application/json" }
                });

                if (!response.ok) {
                    throw new Error("Failed to delete Blog.");
                }

                router.push("/blog");
            } catch (err) {
                setError(err.message);
            }
        }
    }

    return (
        <div className="content">
            {error ?
                (<h3>Error: {error}</h3>) :
                (<section className={classes.detail}>
                    <h1>{props.title}</h1>
                    <p>{props.date}</p>
                    <p className={classes.experience}>{props.experience}</p>
                    <p>By {props.name}</p>
                    <div className={classes.actions}>
                        <button onClick={handlerDeletePlace}>Delete</button>
                    </div>
                </section>)
            }
        </div>
    );
}

export default BlogDetails;