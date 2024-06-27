import Head from "next/head";

function PageNotFound() {
    return ( 
        <>
            <Head>
                <title>Error</title>
                <meta name="description" content="The page you are looking for does not exist." />
            </Head>
            <div className="content">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        </>
    );
}

export default PageNotFound;