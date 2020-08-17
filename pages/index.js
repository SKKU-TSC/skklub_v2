import Head from "next/head";
import styled, { keyframes } from "styled-components";
import Button from 'react-bootstrap/Button'
import UserForm from "../components/userForm";
import Navbar from "../components/navbar";

const FullPage = styled.div`
  width: 100%;
  height: 100%;
`;

const IndexContainer = styled.div`
  display: -webkit-box !important;
  display: flex;
  max-width: 42em;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  height: 100%;
  flex-direction: column;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  
`;



const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledTitle2 = styled.h2`
  font-size: 1rem;
  font-weight: lighter;
`;

const FrontContainer = styled.div`
  padding-top: 40%;
  padding-bottom: 40%;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 40%;
  margin-bottom: 10%;
`;

export default function Index() {
  return (
    <div>
      <Head>
        <title>SKKLUB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullPage>
        <IndexContainer>
          <Navbar></Navbar>
          <FrontContainer>
            <StyledImg src="../indexpic.jpg"></StyledImg>
            <StyledTitle>성균관대학교<br />모든 동아리/단체를 한눈에!</StyledTitle>
            <StyledTitle2>
              SKKLUB은 우리 학교의 모든 동아리/학회/단체를 한눈에 볼 수 있는
              플랫폼입니다.
            </StyledTitle2>
            <Button size="lg" variant="outline-success" href="/seoul">명륜 캠퍼스</Button>{' '}
            <Button size="lg" variant="outline-primary" href="/suwon">수원 캠퍼스</Button>
          </FrontContainer>
  
        </IndexContainer>
      </FullPage>
    </div>
  );
}

//User Form 대체
