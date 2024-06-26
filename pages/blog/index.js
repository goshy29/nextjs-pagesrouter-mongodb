import Blog from "@/components/main/blog-section/Blog";
import { dbConnection } from "@/db-connection/mongodb-connection";
import { NEWS } from "../../data/news";
import Head from "next/head";

function BlogPage(props) {
    return ( 
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Learn how the other people makes their own success." />
            </Head>
            <Blog blog={props.blog}/>
        </>
    );
}

export async function getStaticProps() {    
    try {
        const db = await dbConnection();
        const blogCollection = db.collection("blog");
        const blog = await blogCollection.find().toArray();

        return {
            props: {
                blog: blog.map(b => ({
                    id: b._id.toString(),
                    title: b.title,
                    name: b.name,
                    date: b.date,
                    experience: b.experience
                }))
            },
            revalidate: 10
        }
    } catch(err) {
        console.error("Could not connect to the database or fetch all Blogs.", err);
        return {
            props: {
                blog: [] 
            },
            revalidate: 10
        };
    }
}

export default BlogPage;