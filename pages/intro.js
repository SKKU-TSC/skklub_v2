import Head from "next/head";
import styled from "styled-components";

import Navbar from '../components/global/navbar'
import FirstContainer from '../components/index/firstContainer'
import SecondContainer from "../components/index/secondContainer"
import ThirdContainer from "../components/index/thirdContainer"
import Footer from "../components/global/footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>동아리연합회: "for:동"</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <Footer />
    </div>
  );
}
