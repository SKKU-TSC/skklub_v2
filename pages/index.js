import Head from "next/head";

import styled from "styled-components";

import Navbar from "../components/global/navbar";
import NoticeList from "../components/index/noticeList";
import Footer from "../components/global/footer";
import IECheck from "../hooks/isIE";
import IndexCarousel from "../components/index/carousel";
import CardHanger from "../components/index/cardHanger";

const FullPage = styled.div`
  width: 100%;
`;

const FrontContainer = styled.div`
  padding-top: 130px;
  padding-left: 10%;
  padding-right: 10%;
`;

const NoticeContainer = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: space-around;
`

export default function Index() {
  return (
    <div>
      <Head>
        <title>SKKLUB | 스클럽</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullPage>
        <Navbar></Navbar>
        <FrontContainer>
          <IECheck></IECheck>
          <IndexCarousel></IndexCarousel>
          <CardHanger />
          <NoticeContainer>
            <NoticeList
              title="현재 모집중인 동아리"
              name="홍보 계시판"
              campus="seoul"
              clubType="central-clubs"
            ></NoticeList>
            <NoticeList
              title="동아리연합회 공지"
              name="공지 계시판"
              campus="seoul"
              clubType="notice"
            ></NoticeList>
          </NoticeContainer>
        </FrontContainer>
      </FullPage>
      <Footer></Footer>
    </div>
  );
}

//User Form 대체
