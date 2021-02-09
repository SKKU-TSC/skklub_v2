import Head from "next/head";
import { useState, useEffect } from "react";

import styled from "styled-components";

import Navbar from "../../components/global/navbar";
import Footer from "../../components/global/footer";
import Loading from "../../components/global/loading";
import TopContainer from "../../components/layout/topContainer";
import CardGallery from "../../components/layout/cardGallery";

const Main = styled.main`
  padding-bottom: 5%;
  width: 100%;
  background-color: #fff;
`;

export default function Seoul() {
  let color = "green";
  let location = "명륜";
  let type = "준중앙/독립동아리";

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch(`https://admin.skklub.com/api/independent-clubs/seoul`)
        .then((res) => res.json())
        .then(
          (result) => {
            setInfo(result);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    getData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div>
        <Head>
          <title>중앙동아리 - 명륜</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <Navbar></Navbar>
          <TopContainer
            data={info}
            theme={color}
            univLocation={location}
            clubType={type}
          ></TopContainer>
          <CardGallery
            data={info}
            theme={color}
            univLocation={location}
          ></CardGallery>
        </Main>
        <Footer></Footer>
      </div>
    );
  }
}
