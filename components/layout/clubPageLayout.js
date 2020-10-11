import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

import seoulClubs from "../../data/seoul.json";
import suwonClubs from "../../data/suwon.json";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import styled from "styled-components";

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import StyledHr from "../styledHr";
import Footer from "../footer";
import ClubWebsiteButton from "../clubWebsiteButton";

import { Palette } from "color-thief-react";
import idealTextColor from "../../hooks/textColor";

const StyledCardDeck = styled(CardDeck)`
  margin-top: 20px;

  @media (max-width: 425px) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 40px;
`;

/*
const StyledHr = styled.div`
  background-color: ${(props) => props.textColor};
  -webkit-mask: url(../hr.svg) no-repeat center;
  mask: url(../hr.svg) no-repeat center;
  padding-top: 40px;
`;
*/

const ProfileImage = styled.img`
  max-width: 200px;
  border-radius: 20px;
  float: left;
  margin-right: 20px;

  @media (max-width: 425px) {
    float: none;
    margin-right: 0;
  }
`;

const StyledDiv = styled.div`
  padding-top: 100px;
  padding-bottom: 5%;
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  word-wrap: break-word;
  @media (max-width: 426px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

let LikeButton = styled(Button)`
  border-radius: 25px;
  background-color: white;
  z-index: 100;
  border: none;
  background-color: transparent !important;
  font-size: 1.9rem;
  &:hover {
    background-color: transparent !important;
    border: none;
  }
  &:focus {
    background-color: transparent !important;
    border: none;
    outline: none !important;
    outline-offset: none !important;
    box-shadow: none !important;
  }
  &:active {
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
    outline-offset: none !important;
    box-shadow: none;
  }
`;

let StyledP = styled.p`
  font-size: 17px;
  color: #333;
  letter-spacing: -0.34px;
  line-height: 27.625px;
`;

let TopDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  @media (max-width: 425px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

let TopDivGroup = styled.div`
  color: ${(props) => props.textColor};
  @media (max-width: 425px) {
    margin-top: 30px;
    padding-left: 25%;
    padding-right: 20%;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.1em;
  margin-top: 1.875rem;
`;

const StyledSlogan = styled.p`
  margin-bottom: 0.45em;
  font-size: 1.2rem;
  font-weight: lighter;
`;

const SinceH3 = styled.h3`
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0.1em;
`;

const SinceTime = styled.p``;

let StyledCard = styled(Card)`
  text-align: left;
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  border-radius: 25px;
  padding: 30px 20px 30px 20px;
  margin-left: 5px !important;
  margin-right: 5px !important;
`;

let StyledCardName = styled.p`
  font-weight: bolder;
  font-size: 17px;
  margin-bottom: 3px;
  color: ${(props) => props.textColor};
`;

let StyledCardDesc = styled.p`
  color: ${(props) => props.textColor};
`;

let StyledCardLogo = styled.h1`
  font-size: 40px;
`;

const ClubPageLayout = (props) => {
  const [key, setKey] = useState("home");

  let router = useRouter();
  let { pid } = router.query;
  let checkRoute = router.pathname.includes("/seoul");
  let useData;
  let univLocation;

  switch (checkRoute) {
    case true:
      univLocation = "seoul";
      useData = seoulClubs;
      break;
    case false:
      univLocation = "suwon";
      useData = suwonClubs;
      break;
    default:
      console.log("error");
  }

  let index = useData.findIndex((club) => club.동아리명 === pid);
  let club = useData[index];
  let clubImg = `../${univLocation}/${club.동아리명}.jpg`;
  let [checkLike, setCheckLike] = useState(
    localStorage.getItem(club.동아리명) === null ? "🤍" : "❤️"
  );

  function addDefaultSrc(ev) {
    ev.target.src = "../alt.jpg";
  }

  return (
    <div>
      <Head>
        <title>{club.동아리명}</title>
      </Head>
      <Palette src={clubImg} colorCount={8} format={"hex"}>
        {({ data, loading, error }) => (
          <div>
            <TopDiv bgColor={data[1]}>
              <ProfileImage onError={addDefaultSrc} src={clubImg} />
              <TopDivGroup
                textColor={loading === false && idealTextColor(data[1])}
              >
                <StyledTitle>
                  {club.동아리명}

                  <LikeButton
                    onClick={() => {
                      if (checkLike != "❤️") {
                        localStorage.setItem(
                          `${club.동아리명}`,
                          JSON.stringify("❤️")
                        );
                        setCheckLike("❤️");
                      } else {
                        localStorage.removeItem(`${club.동아리명}`);
                        setCheckLike("🤍");
                      }
                    }}
                  >
                    {checkLike}
                  </LikeButton>
                </StyledTitle>

                <StyledSlogan>
                  <em>&quot;{club.핵심문구}&quot;</em>
                </StyledSlogan>
                  <SinceH3>{club.창립연도 == "" ? "" : "Since"}</SinceH3>
                <SinceTime>{club.창립연도}</SinceTime>
              </TopDivGroup>
            </TopDiv>
            <StyledDiv>
              <StyledHr color={data[1]}></StyledHr>
              <StyledH2>Info</StyledH2>
              <Table bordered size="md">
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bolder" }}>캠퍼스</td>
                    <td>{club.캠퍼스}</td>
                    <td style={{ fontWeight: "bolder" }}>중분류</td>
                    <td>{club.중분류1}</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bolder" }}>위치</td>
                    <td>{club.위치}</td>
                    <td style={{ fontWeight: "bolder" }}>활동인원</td>
                    <td>{club.활동인원}</td>
                  </tr>
                </tbody>
              </Table>
              <StyledHr color={data[1]}></StyledHr>
              <StyledH2>About</StyledH2>
              <StyledP
                dangerouslySetInnerHTML={{ __html: club.소개글 }}
              ></StyledP>
              <ClubWebsiteButton
                color={data[1]}
                link={club.대페}
                name={club.동아리명}
              ></ClubWebsiteButton>
              <StyledHr color={data[1]}></StyledHr>
              <StyledH2>Activity</StyledH2>
              <StyledP
                dangerouslySetInnerHTML={{ __html: club.활동정보 }}
              ></StyledP>
              <StyledHr color={data[1]}></StyledHr>
              <StyledH2>Recruiting</StyledH2>
              <StyledCardDeck>
                <StyledCard bgColor={data[1]}>
                  <StyledCardLogo>🗓</StyledCardLogo>
                  <StyledCardName
                    textColor={loading === false && idealTextColor(data[1])}
                  >
                    모집시기
                  </StyledCardName>
                  <StyledCardDesc
                    textColor={loading === false && idealTextColor(data[1])}
                  >
                    {club.모집시기}
                  </StyledCardDesc>
                </StyledCard>
                <StyledCard borderColor={data[1]}>
                  <StyledCardLogo>🙌</StyledCardLogo>
                  <StyledCardName>모집인원</StyledCardName>
                  <StyledCardDesc>{club.모집인원}</StyledCardDesc>
                </StyledCard>
                <StyledCard bgColor={data[1]}>
                  <StyledCardLogo>🔍</StyledCardLogo>
                  <StyledCardName
                    textColor={loading === false && idealTextColor(data[1])}
                  >
                    모집방식
                  </StyledCardName>
                  <StyledCardDesc
                    textColor={loading === false && idealTextColor(data[1])}
                  >
                    {club.모집전형}
                  </StyledCardDesc>
                </StyledCard>
                <StyledCard borderColor={data[1]}>
                  <StyledCardLogo>⏰</StyledCardLogo>
                  <StyledCardName>의무 활동기간</StyledCardName>
                  <StyledCardDesc>{club.활동기간}</StyledCardDesc>
                </StyledCard>
              </StyledCardDeck>
            </StyledDiv>
          </div>
        )}
      </Palette>
      <Footer></Footer>
    </div>
  );
};

export default ClubPageLayout;
