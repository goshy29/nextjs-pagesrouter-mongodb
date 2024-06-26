import classes from "./Blog.module.css";
import BlogList from "./BlogList";

function Blog(props) {
    return ( 
        <>
            <section className={classes.blog}>
                <div className={classes.blog_content}>
                    <h1>Blog</h1>
                </div>
            </section>
            <section className={classes.blog_section}>
                <div className="content">
                    {props.blog.length > 0 ? 
                        (<BlogList blog={props.blog} />) : 
                        (<h1>No Blogs Available</h1>)
                    }
                </div>            
            </section> 
        </>       
    );
}

export default Blog;