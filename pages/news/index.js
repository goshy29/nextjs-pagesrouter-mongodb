import News from "@/components/main/news-section/News";
import { NEWS } from "../../data/news";
import Head from "next/head";

function NewsPage(props) {
    return ( 
        <>
            <Head>
                <title>News</title>
                <meta name="description" content="Read some interesting news about fitness world." />
            </Head>
            <News news={props.news} />
        </>    
    );
}

export async function getStaticProps() {
    return {
        props: {
            news: NEWS
        }
    }
}

export default NewsPage;