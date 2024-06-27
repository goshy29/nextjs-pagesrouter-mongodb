import NewsDetails from "@/components/main/news-section/NewsDetails";
import { NEWS } from "@/data/news";
import Head from "next/head";

function NewsDetailsPage(props) {
    return ( 
        <>
            <Head>
                <title>{props.newsData.title}</title>
                <meta name="description" content={props.newsData.title} />
            </Head>
            <NewsDetails 
                image={props.newsData.image}
                title={props.newsData.title}
                name={props.newsData.name}
                date={props.newsData.date}
                text={props.newsData.text.replace(/\n/g, "<br />")}
            />
        </>
    );
}

export async function getStaticPaths() {
    return {
        fallback: 'blocking',
        paths: NEWS.map((n) => ({ params: { newsId: n.id }}))
    }
}

export async function getStaticProps(context) {
    const newsId = context.params.newsId;

    const selectedNews = NEWS.find((n) => n.id === newsId);

    if (!selectedNews) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            newsData: {
                id: selectedNews.id,
                image: selectedNews.image,
                title: selectedNews.title,
                name: selectedNews.name,
                date: selectedNews.date,
                text: selectedNews.text
            }
        }
    }
}

export default NewsDetailsPage;