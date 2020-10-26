import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";

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
  border: ${(props) => props.borderColor} !important;
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
  let univLocation;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState([]);
  let [checkLike, setCheckLike] = useState();

  useEffect(async () => {
    await fetch("https://3.35.251.203:5000/api")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setInfo(result);
          setIsLoaded(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  let index = info.findIndex((club) => club.cname === pid);
  let club = info[index];

  switch (checkRoute) {
    case true:
      univLocation = "seoul";
      break;
    case false:
      univLocation = "suwon";
      break;
    default:
      console.log("error");
  }

  let check = (url) => {
    let img = new Image();
    img.src = url;
    if (img.height !== 0) {
      return url;
    } else {
      return "../alt.jpg";
    }
  };

  function addDefaultSrc(ev) {
    ev.target.src = "../alt.jpg";
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    let clubImg = `../${univLocation}/${info[index].cname}.jpg`;

    setCheckLike =
      localStorage.getItem(info[index].cname) === null ? "🤍" : "❤️";

    return (
      <div>
        <Head>
          <title>{club.cname}</title>
        </Head>
        <Palette src={check(clubImg)} colorCount={8} format={"hex"}>
          {({ data, loading, error }) => (
            <div>
              <TopDiv bgColor={data[4]}>
                <ProfileImage onError={addDefaultSrc} src={clubImg} />
                <TopDivGroup
                  textColor={loading === false && idealTextColor(data[4])}
                >
                  <StyledTitle>
                    {club.cname}

                    <LikeButton
                      onClick={() => {
                        if (checkLike != "❤️") {
                          localStorage.setItem(
                            `${club.cname}`,
                            JSON.stringify("❤️")
                          );
                          setCheckLike("❤️");
                        } else {
                          localStorage.removeItem(`${club.cname}`);
                          setCheckLike("🤍");
                        }
                      }}
                    >
                      {checkLike}
                    </LikeButton>
                  </StyledTitle>

                  <StyledSlogan>
                    <em>&quot;{club.intro_sentence}&quot;</em>
                  </StyledSlogan>
                  <SinceH3>{club.estab_year == "" ? "" : "Since"}</SinceH3>
                  <SinceTime>{club.estab_year}</SinceTime>
                </TopDivGroup>
              </TopDiv>
              <StyledDiv>
                <StyledHr className="hr" color={data[4]}></StyledHr>
                <StyledH2>Info</StyledH2>
                <Table bordered size="md">
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bolder" }}>캠퍼스</td>
                      <td>{club.campus}</td>
                      <td style={{ fontWeight: "bolder" }}>중분류</td>
                      <td>{club.category1}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bolder" }}>위치</td>
                      <td>{club.activity_location}</td>
                      <td style={{ fontWeight: "bolder" }}>활동인원</td>
                      <td>{club.activity_num}</td>
                    </tr>
                  </tbody>
                </Table>
                <StyledHr className="hr" color={data[4]}></StyledHr>
                <StyledH2>About</StyledH2>
                <StyledP
                  dangerouslySetInnerHTML={{ __html: club.intro_text }}
                ></StyledP>
                <ClubWebsiteButton
                  textColor={loading === false && idealTextColor(data[4])}
                  color={data[4]}
                  link={club.website_link}
                  name={club.cname}
                ></ClubWebsiteButton>
                <StyledHr className="hr" color={data[4]}></StyledHr>
                <StyledH2>Activity</StyledH2>
                <StyledP
                  dangerouslySetInnerHTML={{ __html: club.activity_info }}
                ></StyledP>
                <StyledHr className="hr" color={data[4]}></StyledHr>
                <StyledH2>Recruiting</StyledH2>
                <StyledCardDeck>
                  <StyledCard bgColor={data[4]} borderColor={"none"}>
                    <StyledCardLogo>🗓</StyledCardLogo>
                    <StyledCardName
                      textColor={loading === false && idealTextColor(data[4])}
                    >
                      모집시기
                    </StyledCardName>
                    <StyledCardDesc
                      textColor={loading === false && idealTextColor(data[4])}
                    >
                      {club.recruit_season}
                    </StyledCardDesc>
                  </StyledCard>
                  <StyledCard borderColor={`2px ${data[4]} solid`}>
                    <StyledCardLogo>🙌</StyledCardLogo>
                    <StyledCardName>모집인원</StyledCardName>
                    <StyledCardDesc>{club.recruit_num}</StyledCardDesc>
                  </StyledCard>
                  <StyledCard borderColor={"none"} bgColor={data[4]}>
                    <StyledCardLogo>🔍</StyledCardLogo>
                    <StyledCardName
                      textColor={loading === false && idealTextColor(data[4])}
                    >
                      모집방식
                    </StyledCardName>
                    <StyledCardDesc
                      textColor={loading === false && idealTextColor(data[4])}
                    >
                      {club.recruit_process}
                    </StyledCardDesc>
                  </StyledCard>
                  <StyledCard borderColor={`2px ${data[4]} solid`}>
                    <StyledCardLogo>⏰</StyledCardLogo>
                    <StyledCardName>의무 활동기간</StyledCardName>
                    <StyledCardDesc>{club.activity_period}</StyledCardDesc>
                  </StyledCard>
                </StyledCardDeck>
              </StyledDiv>
            </div>
          )}
        </Palette>
        <Footer></Footer>
      </div>
    );
  }
};

export default ClubPageLayout;
