import classes from "./BlogDetails.module.css";
import { useRouter } from "next/router";

function BlogDetails(props) {
    const router = useRouter();

    async function handlerDeletePlace() {
        const confirmDelete = window.confirm(`Do you want to Delete ${props.title}?`);
        if (confirmDelete) {
            try {
                const response = await fetch("/api/blog", {
                    method: "DELETE",
                    body: JSON.stringify({ placeId: props.id }),
                    headers: { "Content-Type": "application/json" }
                });

                if (!response.ok) {
                    throw new Error("Failed to delete Blog.");
                }

                router.push("/blog");
            } catch(err) {
                console.log(err);
            }
        }
    }

    return ( 
        <div className="content">
            <section className={classes.detail}>
                <h1>{props.title}</h1>
                <p>{props.date}</p>            
                <p>{props.experience}</p>
                <p>{props.name}</p>
                <div className={classes.actions}>
                    <button onClick={handlerDeletePlace}>Delete</button>
                </div>
            </section>
        </div>
    );
}

export default BlogDetails;