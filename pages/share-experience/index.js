import ShareExperience from "@/components/main/share-experience-section/ShareExperience";
import Head from "next/head";

function ShareExperiencePage() {
    return ( 
        <>
            <Head>
                <title>Share Experience</title>
                <meta name="description" content="Share your experience with everybody from all over the world." />
            </Head>
            <ShareExperience />
        </>
    );
}

export default ShareExperiencePage;