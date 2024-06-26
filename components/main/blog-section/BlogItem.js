import { useRouter } from 'next/router';
import classes from "./BlogItem.module.css";

function BlogItem(props) {
    const router = useRouter();

    const previewText = props.experience.split(' ').slice(0, 6).join(' ') + '...';

    function handlerShowDetails() {
        router.push("/blog/" + props.id);
    }

    return ( 
        <li className={classes.item}>
            <div className={classes.content}>
                <h2>{props.title}</h2>
                <h4>By {props.name}</h4>
                <p>{props.date}</p>
                <p>{previewText}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={handlerShowDetails}>Read More</button>
            </div>    
        </li>
    );
}

export default BlogItem;