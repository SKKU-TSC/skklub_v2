import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import styled from "styled-components";

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import StyledHr from "../styledHr";
import Footer from "../footer";
import ClubWebsiteButton from "../clubWebsiteButton";
import Loading from "../loading";

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
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 20px;
`;

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
  text-align: left;
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
  letter-spacing: 1px;
  line-height: 30px;
`;

let TopDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgcolor};
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
color: ${(props) => props.textColor};
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
color: ${(props) => props.textColor};
  font-size: 1.6rem;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0.1em;
`;

const SinceTime = styled.p``;

let StyledCard = styled(Card)`
  text-align: left;
  border: ${(props) => props.bordercolor} !important;
  background-color: ${(props) => props.bgcolor};
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

let LoadingDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  padding: 0 10%;
  margin-top: 20px;
`;

const ClubPageLayout = (props) => {
  const [key, setKey] = useState("home");

  let router = useRouter();
  let urlPath = router.pathname;
  let { pid } = router.query;

  let category;
  let clubImg;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState([]);
  const [image, setImage] = useState("false");
  const [checkLike, setCheckLike] = useLocalStorage(`${pid}`, "🤍");
  const [univLocation, setUnivLocation] = useState(
    urlPath.includes("seoul") ? "명륜" : "율전"
  );

  let check = (url) => {
    let img = new Image();
    img.src = url;
    if (img.height !== 0) {
      return url;
    } else {
      return "/alt.jpg";
    }
  };

  useEffect(() => {
    async function getData() {
      await fetch(
        `https://admin.skklub.com/api/중앙동아리/${univLocation}/${pid}`
      )
        .then((res) => res.json())
        .then(setImage(check(`https://admin.skklub.com/img/logo/${pid}.jpg`)))
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
    return (
      <LoadingDiv>
        <Loading />
      </LoadingDiv>
    );
  } else {
    return (
      <div>
        <Head>
          <title>{info[0].cname}</title>
        </Head>
        <Palette
          src={image}
          crossOrigin="anonymous"
          colorCount={8}
          format={"hex"}
        >
          {({ data, loading, error }) => {
            if (loading === true) {
              return <div> Loading </div>;
            } else {
              return (
                <div>
                  <TopDiv bgcolor={data[4]}>
                    <ProfileImage src={image} />
                    <TopDivGroup textColor={loading === false && idealTextColor(data[4])}>
                      <StyledTitle
                        textColor={loading === false && idealTextColor(data[4])}
                      >
                        {info[0].cname}
                        <LikeButton
                          onClick={() => {
                            if (checkLike != "❤️") {
                              localStorage.setItem(
                                `${pid}`,
                                JSON.stringify("❤️")
                              );
                              setCheckLike("❤️");
                            } else {
                              localStorage.removeItem(`${pid}`);
                              setCheckLike("🤍");
                            }
                          }}
                        >
                          {checkLike}
                        </LikeButton>
                      </StyledTitle>

                      <StyledSlogan>
                        <em>&quot;{info[0].intro_sentence}&quot;</em>
                      </StyledSlogan>
                      <SinceH3
                      textColor={loading === false && idealTextColor(data[4])}>
                        {info[0].estab_year == "" ? "" : "Since"}
                      </SinceH3>
                      <SinceTime>{info[0].estab_year}</SinceTime>
                    </TopDivGroup>
                  </TopDiv>
                  <StyledDiv>
                    <StyledHr className="hr" color={data[4]}></StyledHr>
                    <StyledH2>Info</StyledH2>
                    <Table bordered size="md">
                      <tbody>
                        <tr>
                          <td style={{ fontWeight: "bolder" }}>캠퍼스</td>
                          <td>{info[0].campus}</td>
                          <td style={{ fontWeight: "bolder" }}>중분류</td>
                          <td>{info[0].category1}</td>
                        </tr>
                        <tr>
                          <td style={{ fontWeight: "bolder" }}>위치</td>
                          <td>{info[0].activity_location}</td>
                          <td style={{ fontWeight: "bolder" }}>활동인원</td>
                          <td>{info[0].activity_num}</td>
                        </tr>
                      </tbody>
                    </Table>
                    <StyledHr className="hr" color={data[4]}></StyledHr>
                    <StyledH2>About</StyledH2>
                    <StyledP
                      dangerouslySetInnerHTML={{ __html: info[0].intro_text }}
                    ></StyledP>
                    <ClubWebsiteButton
                      textColor={loading === false && idealTextColor(data[4])}
                      color={data[4]}
                      link={info[0].website_link}
                      name={info[0].cname}
                    ></ClubWebsiteButton>
                    <StyledHr className="hr" color={data[4]}></StyledHr>
                    <StyledH2>Activity</StyledH2>
                    <StyledP
                      dangerouslySetInnerHTML={{
                        __html: info[0].activity_info,
                      }}
                    ></StyledP>
                    <StyledHr className="hr" color={data[4]}></StyledHr>
                    <StyledH2>Recruiting</StyledH2>
                    <StyledCardDeck>
                      <StyledCard bgcolor={data[4]} bordercolor={"none"}>
                        <StyledCardLogo>🗓</StyledCardLogo>
                        <StyledCardName
                          textColor={
                            loading === false && idealTextColor(data[4])
                          }
                        >
                          모집시기
                        </StyledCardName>
                        <StyledCardDesc
                          textColor={
                            loading === false && idealTextColor(data[4])
                          }
                        >
                          {info[0].recruit_season}
                        </StyledCardDesc>
                      </StyledCard>
                      <StyledCard bordercolor={`2px ${data[4]} solid`}>
                        <StyledCardLogo>🙌</StyledCardLogo>
                        <StyledCardName>모집인원</StyledCardName>
                        <StyledCardDesc>{info[0].recruit_num}</StyledCardDesc>
                      </StyledCard>
                      <StyledCard bordercolor={"none"} bgcolor={data[4]}>
                        <StyledCardLogo>🔍</StyledCardLogo>
                        <StyledCardName
                          textColor={
                            loading === false && idealTextColor(data[4])
                          }
                        >
                          모집방식
                        </StyledCardName>
                        <StyledCardDesc
                          textColor={
                            loading === false && idealTextColor(data[4])
                          }
                        >
                          {info[0].recruit_process}
                        </StyledCardDesc>
                      </StyledCard>
                      <StyledCard bordercolor={`2px ${data[4]} solid`}>
                        <StyledCardLogo>⏰</StyledCardLogo>
                        <StyledCardName>의무 활동기간</StyledCardName>
                        <StyledCardDesc>
                          {info[0].activity_period}
                        </StyledCardDesc>
                      </StyledCard>
                    </StyledCardDeck>
                  </StyledDiv>
                </div>
              );
            }
          }}
        </Palette>

        <Footer></Footer>
      </div>
    );
  }
};

export default ClubPageLayout;
