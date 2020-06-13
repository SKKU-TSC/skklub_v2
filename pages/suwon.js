import Head from "next/head";
import TopContainer from "../components/topContainer";
import CardGallery from "../components/cardGallery";
import styled from "styled-components";
import Navbar from "../components/navbar";

const Main = styled.main`
  width: 100%;
`;

export default function Suwon() {
  return (
    <div className="globalContainer">
      <Head>
        <title>SKKLUB - 율전</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Navbar></Navbar>
        <TopContainer></TopContainer>
        <CardGallery></CardGallery>
      </Main>
    </div>
  );
}
