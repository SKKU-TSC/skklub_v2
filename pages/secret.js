import Head from "next/head";
import styled from "styled-components";

import Navbar from '../components/global/navbar'
import FirstContainer from '../components/index/firstContainer'
import SecondContainer from "../components/index/secondContainer"
import ThirdContainer from "../components/index/thirdContainer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Textuel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
    </div>
  );
}
