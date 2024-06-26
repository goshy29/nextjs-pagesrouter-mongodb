import Home from "@/components/main/home-section/Home";
import Head from "next/head";

function HomePage() {
  return ( 
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="It is the place where you can create your dream body." />
      </Head>
      <Home />
    </>
  );
}

export default HomePage;