import Head from "next/head";
import TopContainer from "../components/topContainer";
import CardGallery from "../components/cardGallery";
import styled from "styled-components";
import Navbar from "../components/navbar";

const Main = styled.main`
  width: 100%;
  background-color: #fff;
`;

export default function Seoul() {
  return (
    <div>
      <Head>
        <title>SKKLUB - 명륜</title>
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
