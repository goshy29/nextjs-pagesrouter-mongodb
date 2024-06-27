import Blog from "@/components/main/blog-section/Blog";
import { dbConnection } from "@/db-connection/mongodb-connection";
import Head from "next/head";

function BlogPage(props) {
    return ( 
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Learn how the other people makes their own success." />
            </Head>
            <Blog blog={props.blog} error={props.error}/>
        </>
    );
}

export async function getStaticProps() {    
    try {
        const db = await dbConnection();
        
        try {
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
                    })),
                    error: null
                },
                revalidate: 10
            }
        } catch (err) {
            return {
                props: {
                    blog: [],
                    error: "Failed to fetch the Blogs from the database."
                },
                revalidate: 10
            }
        }
    } catch (err) {
        return {
            props: {
                blog: [],
                error: err.message
            },
            revalidate: 10
        }
    }
}

export default BlogPage;