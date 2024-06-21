import classes from "./NewsDetails.module.css";
import Image from 'next/image';

function NewsDetails(props) {
    return ( 
        <div className="content">
            <section className={classes.detail}>
                <h1>{props.title}</h1>
                <p>{props.date}</p>
                <Image src={props.image} alt={props.title} width={500} height={500}/>            
                <p>{props.text}</p>
                <p>{props.name}</p>
            </section>
        </div>
    );
}

export default NewsDetails;