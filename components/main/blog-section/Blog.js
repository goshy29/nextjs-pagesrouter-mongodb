import classes from "./Blog.module.css";

function Blog() {
    return ( 
        <>
            <section className={classes.blog}>
                <div className={classes.blog_content}>
                    <h1>Blog</h1>
                </div>
            </section>
            <section className={classes.blog_section}>
                <div className="content">
                    <h1>The Blog Page</h1>
                </div>            
            </section> 
        </>       
    );
}

export default Blog;