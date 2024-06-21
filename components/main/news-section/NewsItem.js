import { useRouter } from 'next/router';
import Image from 'next/image';
import classes from "./NewsItem.module.css";

function NewsItem(props) {
    const router = useRouter();

    function handlerShowDetails() {
        router.push("/news/" + props.id);
    }

    return ( 
        <li className={classes.item}>
            <div className={classes.image}>
                <Image src={props.image} alt={props.title} width={500} height={500}/>
            </div>
            <div className={classes.content}>
                <h2>{props.title}</h2>
                <h4>By {props.name}</h4>
                <p>{props.date}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={handlerShowDetails}>Read More</button>
            </div>    
        </li>
    );
}

export default NewsItem;