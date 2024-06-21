import NewsItem from "./NewsItem";
import classes from "./NewsList.module.css";

function NewsList(props) {
    return ( 
        <ul className={classes.list}>
            {props.news.map((n) => (
                <NewsItem
                    key={n.id}
                    id={n.id}
                    image={n.image}
                    title={n.title}
                    name={n.name}
                    date={n.date}
                />
            ))}
        </ul>
    );
}

export default NewsList;