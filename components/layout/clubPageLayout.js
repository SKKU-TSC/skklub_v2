import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import styled from "styled-components";

import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Descriptions, Badge } from "antd";

import StyledHr from "../global/styledHr";
import Footer from "../global/footer";
import ClubWebsiteButton from "../global/clubWebsiteButton";
import Loading from "../global/loading";
import IECheck from "../../hooks/isIE";
import BackTopBtn from "../global/backTop";

import { Palette } from "color-thief-react";
import idealTextColor from "../../hooks/textColor";
import { exception } from "react-ga";

const StyledCardDeck = styled(CardDeck)`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-weight: bolder;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  float: left;
  margin-right: 20px;
  @media (max-width: 600px) {
    float: none;
    margin-right: 0;
  }
`;

const StyledDiv = styled.div`
  padding-bottom: 5%;
  text-align: left;
  padding-right: 100px;
  word-wrap: break-word;
  @media (max-width: 600px) {
    padding-right: 0;
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
  padding-top: 85px;
  padding-left: 10%;
  width: 100vw;
  height: 50vh;
  background-color: ${(props) => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: start;
  flex-wrap: nowrap;
  @media (max-width: 600px) {
    height: 100%;
    padding: 185px 0 100px 0;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

let TopDivGroup = styled.div`
  color: ${(props) => props.textColor};
  @media (max-width: 600px) {
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
  text-align: center;
  border: ${(props) => props.bordercolor} !important;
  background-color: ${(props) => props.bgcolor};
  border-radius: 25px;
  padding: 20px 0px 20px 0px;
  margin: 0 !important;
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

let StickyDiv = styled.div`
  padding-top: 100px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  align-self: flex-start;
  @media (max-width: 1200px) {
    position: static;
  }
`;

let DivDivider = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  height: 100%;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
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
  const [image, setImage] = useState("");
  const [checkLike, setCheckLike] = useLocalStorage(`${pid}`, "🤍");
  const [univLocation, setUnivLocation] = useState(
    urlPath.includes("seoul") ? "seoul" : "suwon"
  );
  const [clubType, setClubType] = useState(checkPath());

  function checkPath() {
    if (urlPath.includes("central-clubs")) {
      return "central-clubs";
    } else if (urlPath.includes("independent-clubs")) {
      return "independent-clubs";
    } else if (urlPath.includes("academic-clubs")) {
      return "academic-clubs";
    } else if (urlPath.includes("student-org")) {
      return "student-org";
    } else {
      return "groups";
    }
  }

<<<<<<< Updated upstream
  async function getData() {
    let img, imgUrl = 'https://admin.skklub.com/img/logo/alt.jpg'
    let resJSON
=======
  function getUrl(url) {
    return new Promise((resolve) => {
      let img = new Image();
      let result = "/alt.jpg";
      img.src = url;
      console.log(image.height);
      if (img.height !== 0) {
        result = url;
      }

      resolve(result);
    });
  }

  async function getData() {
    let imgUrl;
    let resJSON;
>>>>>>> Stashed changes
    try {
      console.log(clubType);
      // Get Data
      let response = await fetch(
        `https://admin.skklub.com/api/${clubType}/${univLocation}/${pid}`
      );

      // Data converting to JSON
      resJSON = await response.json();

      console.log("return");
      // Parse Path
<<<<<<< Updated upstream
      console.log(resJSON[0].logo_path)
    
      img = await fetch(`https://admin.skklub.com/img/logo/${resJSON[0].logo_path}`);
      console.log(img.status)
      if (img.status !== 404){
        imgUrl = `https://admin.skklub.com/img/logo/${resJSON[0].logo_path}`
      } 
          
=======
      console.log(resJSON[0].logo_path);

      imgUrl = await getUrl(
        `https://admin.skklub.com/img/logo/${resJSON[0].logo_path}`
      );
>>>>>>> Stashed changes
    } catch (e) {
      setIsLoaded(false);
      setError(error);
    } finally {
      setInfo(resJSON);
      setImage(imgUrl);
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isLoaded == false) {
    console.log("Data not loaded");
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
                  <IECheck></IECheck>
                  <TopDiv bgcolor={data[1]}>
                    <ProfileImage src={image} />
                    <TopDivGroup
                      textColor={loading === false && idealTextColor(data[1])}
                    >
                      <StyledTitle
                        textColor={loading === false && idealTextColor(data[1])}
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
                        textColor={loading === false && idealTextColor(data[1])}
                      >
                        {info[0].estab_year == "" ? "" : "Since"}
                      </SinceH3>
                      <SinceTime>{info[0].estab_year}</SinceTime>
                    </TopDivGroup>
                  </TopDiv>
                  <DivDivider>
                    <StyledDiv>
                      <StyledHr className="hr" color={data[1]}></StyledHr>
                      <StyledH2>About</StyledH2>
                      <StyledP
                        dangerouslySetInnerHTML={{ __html: info[0].intro_text }}
                      ></StyledP>
                      <ClubWebsiteButton
                        textColor={loading === false && idealTextColor(data[1])}
                        color={data[1]}
                        link={info[0].website_link}
                        name={info[0].cname}
                      ></ClubWebsiteButton>
                      <ClubWebsiteButton
                        textColor={loading === false && idealTextColor(data[1])}
                        color={data[1]}
                        link={info[0].website_link2}
                        name={info[0].cname}
                      ></ClubWebsiteButton>
                      <StyledHr className="hr" color={data[1]}></StyledHr>
                      <StyledH2>Activity</StyledH2>
                      <StyledP
                        dangerouslySetInnerHTML={{
                          __html: info[0].activity_info,
                        }}
                      ></StyledP>
                      <BackTopBtn></BackTopBtn>
                    </StyledDiv>
                    <StickyDiv>
                      <StyledH2>Info</StyledH2>
                      <Descriptions bordered>
                        <Descriptions.Item label="중분류" span={2}>
                          {info[0].category1}
                        </Descriptions.Item>
                        <Descriptions.Item label="캠퍼스">
                          {info[0].campus}
                        </Descriptions.Item>
                        <Descriptions.Item label="위치" span={2}>
                          {info[0].activity_location}
                        </Descriptions.Item>
                        <Descriptions.Item label="활동 인원">
                          {info[0].activity_num}
                        </Descriptions.Item>
                        <Descriptions.Item label="모임 시간" span={3}>
                          {info[0].meeting_time}
                        </Descriptions.Item>
                        <Descriptions.Item label="대표자 이름" span={2}>
                          {info[0].president_name}
                        </Descriptions.Item>
                        <Descriptions.Item label="대표자 연락처">
                          {info[0].president_contact}
                        </Descriptions.Item>
                      </Descriptions>
                      <StyledH2>Recruiting</StyledH2>
                      <StyledCardDeck>
                        <StyledCard bgcolor={data[1]} bordercolor={"none"}>
                          <StyledCardLogo>🗓</StyledCardLogo>
                          <StyledCardName
                            textColor={
                              loading === false && idealTextColor(data[1])
                            }
                          >
                            모집시기
                          </StyledCardName>
                          <StyledCardDesc
                            textColor={
                              loading === false && idealTextColor(data[1])
                            }
                          >
                            {info[0].recruit_season}
                          </StyledCardDesc>
                        </StyledCard>
                        <StyledCard bordercolor={`2px ${data[1]} solid`}>
                          <StyledCardLogo>🙌</StyledCardLogo>
                          <StyledCardName>모집인원</StyledCardName>
                          <StyledCardDesc>{info[0].recruit_num}</StyledCardDesc>
                        </StyledCard>
                        <StyledCard bordercolor={`2px ${data[1]} solid`}>
                          <StyledCardLogo>🔍</StyledCardLogo>
                          <StyledCardName
                            
                          >
                            모집방식
                          </StyledCardName>
                          <StyledCardDesc
                            
                          >
                            {info[0].recruit_process}
                          </StyledCardDesc>
                        </StyledCard>
                        <StyledCard bordercolor={"none"} bgcolor={data[1]}>
                          <StyledCardLogo>⏰</StyledCardLogo>
                          <StyledCardName textColor={
                              loading === false && idealTextColor(data[1])
                            }>의무 활동기간</StyledCardName>
                          <StyledCardDesc textColor={
                              loading === false && idealTextColor(data[1])
                            }>
                            {info[0].activity_period}
                          </StyledCardDesc>
                        </StyledCard>
                      </StyledCardDeck>
                    </StickyDiv>
                  </DivDivider>
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