import BlogItem from "./BlogItem";
import classes from "./BlogList.module.css";

function BlogList(props) {
    return ( 
        <ul className={classes.list}>
            {props.blog.map((b) => (
                <BlogItem
                    key={b.id}
                    id={b.id}
                    title={b.title}
                    name={b.name}
                    date={b.date}
                    experience={b.experience}
                />
            ))}
        </ul>
    );
}

export default BlogList;