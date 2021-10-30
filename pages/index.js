import Head from "next/head";

import styled from "styled-components";

import Button from "react-bootstrap/Button";

import Navbar from "../components/global/navbar";
import Footer from "../components/global/footer";
import NoticeCarousel from "../components/noticecarousel";
import IECheck from "../hooks/isIE"

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

const ButtonDiv = styled.div`
  margin-top: 50px;
  .second {
    margin-top: -30px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
`;

const StyledTitle2 = styled.p`
  font-size: 1.5rem;
  font-weight: lighter;
`;

const FrontContainer = styled.div`
  padding-top: 35%;
  padding-bottom: 10%;
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
        <title>SKKLUB | 스클럽</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullPage>
        <IndexContainer>
          <Navbar></Navbar>
          <FrontContainer>
            <IECheck></IECheck>
            <StyledImg src="../indexpic.jpg"></StyledImg>
            <StyledTitle>
              성균관대학교
              <br />
              모든 동아리/단체를 한눈에!
            </StyledTitle>
            <StyledTitle2>
              SKKLUB은 우리 학교의 모든 동아리/학회/단체를 한눈에 볼 수 있는
              플랫폼입니다.
            </StyledTitle2>
            <div>
              <Button
                className="mt-2"
                size="lg"
                variant="outline-danger"
                target="blank"
                href="http://admin.skklub.com/register/regular/"
              >
                동아리 등록하기
              </Button>
            </div>
            <ButtonDiv>
              <Button
                size="lg"
                variant="outline-success"
                href="/central-clubs/seoul"
              >
                명륜 캠퍼스
              </Button>{" "}
              <Button
                size="lg"
                variant="outline-primary"
                href="/central-clubs/suwon"
              >
                율전 캠퍼스
              </Button>{" "}
              <br />
            </ButtonDiv>
      
          </FrontContainer>
        </IndexContainer>
        <Footer></Footer>
      </FullPage>
    </div>
  );
}

//User Form 대체
