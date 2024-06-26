import BlogDetails from "@/components/main/blog-section/BlogDetails";
import { dbConnection } from "@/db-connection/mongodb-connection";
import { ObjectId } from 'mongodb';
import { NEWS } from "@/data/news";
import Head from "next/head";

function BlogDetailsPage(props) {
    return ( 
        <>
            <Head>
                <title>{props.blogData.title}</title>
                <meta name="description" content={props.blogData.title} />
            </Head>
            <BlogDetails 
                id={props.blogData.id}
                title={props.blogData.title}
                name={props.blogData.name}
                date={props.blogData.date}
                experience={props.blogData.experience}
            />
        </>
    );
}

export async function getStaticPaths() {
    try {
        const db = await dbConnection();
        const blogCollection = db.collection("blog");
        const blog = await blogCollection.find({}, { _id: 1 }).toArray();
        
        return {
            fallback: "blocking",
            paths: blog.map(b => ({ params: { blogId: b._id.toString() } }))
        };
    } catch (err) {
        console.error("Could not connect to the database to get all Blog paths.", err);
        return {
            fallback: "blocking",
            paths: []
        };
    }
}

export async function getStaticProps(context) {
    const blogId = context.params.blogId;

    try {
        const db = await dbConnection();
        const blogCollection = db.collection("blog");
        const selectedBlog = await blogCollection.findOne({ _id: new ObjectId(blogId) });

        if (!selectedBlog) {
            return {
                notFound: true
            };
        }

        return {
            props: {
                blogData: {
                    id: selectedBlog._id.toString(),
                    title: selectedBlog.title,
                    name: selectedBlog.name,
                    date: selectedBlog.date,
                    experience: selectedBlog.experience
                }
            }
        };
    } catch (err) {
        console.error("Could not connect to the database or fetch a single Blog.", err);
        return {
            notFound: true
        };
    }
}

export default BlogDetailsPage;