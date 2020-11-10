import Head from "next/head";
import styled from "styled-components";

import Navbar from '../components/navbar'
import FirstContainer from '../components/index/firstContainer'
import SecondContainer from "../components/index/secondContainer"
import ThirdContainer from "../components/index/thirdContainer"


const StyledVideo = styled.div`
  pointer-events: none;
  background-color: #000;
  position: fixed;
  padding-bottom: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
`;

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
