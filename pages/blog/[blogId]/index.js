import BlogDetails from "@/components/main/blog-section/BlogDetails";
import { dbConnection } from "@/db-connection/mongodb-connection";
import { ObjectId } from 'mongodb';
import Head from "next/head";

function BlogDetailsPage(props) {
    if (props.error) {
        return (
            <>
                <Head>
                    <title>Error</title>
                    <meta name="description" content={props.error} />
                </Head>
                <div className="content">
                    <h3>Error: {props.error}</h3>
                </div>
            </>
        );
    }

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

        try {
            const blogCollection = db.collection("blog");
            const blog = await blogCollection.find({}, { _id: 1 }).toArray();
            
            return {
                fallback: "blocking",
                paths: blog.map(b => ({ params: { blogId: b._id.toString() } }))
            }
        } catch (err) {
            console.error("Failed to fetch the Blog paths from the database.", err);
            return {
                fallback: "blocking",
                paths: []
            }
        }
    } catch (err) {
        console.error(err.message);
        return {
            fallback: "blocking",
            paths: []
        }
    }
}

export async function getStaticProps(context) {
    const blogId = context.params.blogId;

    try {
        const db = await dbConnection();

        try {
            const blogCollection = db.collection("blog");
            const selectedBlog = await blogCollection.findOne({ _id: new ObjectId(blogId) });

            if (!selectedBlog) {
                return {
                    notFound: true
                }
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
            }
        } catch (err) {
            return {
                props: {
                    error: "Failed to fetch the Blog from the database."
                }
            }
        }
    } catch (err) {
        return {
            props: {
                error: err.message
            }
        }
    }
}

export default BlogDetailsPage;