import classes from "./News.module.css";
import NewsList from "./NewsList";

function News(props) {
    return ( 
        <>
            <section className={classes.news}>
                    <div className={classes.news_content}>
                        <h1>News</h1>
                    </div>
            </section>
            <section className={classes.news_section}>
                <div className="content">
                    {props.news.length > 0 ? 
                        (<NewsList news={props.news} />) : 
                        (<h1>No News Available.</h1>)
                    }
                </div>            
            </section>
        </>
    );
}

export default News;
