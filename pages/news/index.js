import News from "@/components/main/news-section/News";
import { NEWS } from "../../data/news";

function NewsPage(props) {
    return ( 
        <News news={props.news} />    
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