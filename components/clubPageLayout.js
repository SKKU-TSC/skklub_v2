import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

import seoulClubs from "../data/seoul.json";
import suwonClubs from "../data/suwon.json";

import { useLocalStorage } from "../hooks/useLocalStorage";

import styled from "styled-components";

import Badge from "react-bootstrap/Badge";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Popup } from "semantic-ui-react";

import Footer from "../components/footer";
import ClubWebsiteButton from "./clubWebsiteButton";

const StyledCardDeck = styled(CardDeck)`
  margin-top: 20px;

  @media (max-width: 425px) {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.45em;
  margin-top: 1.875rem;
`;

const StyledSlogan = styled.p`
  margin-bottom: 0.75em;
`;

const StyledH2 = styled.h2`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: bolder;
`;

const StyledHr = styled.hr`
  background: transparent;
  display: block;
  width: 100%;
  height: 1px;
  visibility: visible;
  border: none;
  border-bottom: 1px solid rgba(55, 53, 47, 0.39);
`;

const ProfileImage = styled.img`
  margin-top: 5%;
  display: block;
  max-width: 200px;
  border-radius: 20px;
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
  letter-spacing: -0.34px;
  line-height: 27.625px;
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
      <StyledDiv>
        <ProfileImage onError={addDefaultSrc} src={clubImg} />

        <StyledTitle>
          {club.동아리명}

          <LikeButton
            onClick={() => {
              if (checkLike != "❤️") {
                localStorage.setItem(`${club.동아리명}`, JSON.stringify("❤️"));
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

        <StyledH2>About</StyledH2>
        
        <StyledHr></StyledHr>
        

        <StyledP>{club.소개글}</StyledP>
        <ClubWebsiteButton
          link={club.대페}
          name={club.동아리명}
        ></ClubWebsiteButton>
        <StyledH2>Activity</StyledH2>
        <StyledHr></StyledHr>
        <StyledP>{club.활동정보}</StyledP>

        <StyledH2>Recruiting</StyledH2>
        <StyledHr></StyledHr>
        <StyledCardDeck>
          <Card>
            <Card.Img variant="top" src="../1.png" />
            <Card.Body>
              <Card.Title>모집시기</Card.Title>
              <Card.Text>{club.모집시기}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="../2.png" />
            <Card.Body>
              <Card.Title>모집인원</Card.Title>
              <Card.Text>{club.모집인원}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="../3.png" />
            <Card.Body>
              <Card.Title>의무 활동기간</Card.Title>
              <Card.Text>{club.활동기간}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="../4.png" />
            <Card.Body>
              <Card.Title>모집방식</Card.Title>
              <Card.Text>{club.모집전형}</Card.Text>
            </Card.Body>
          </Card>
        </StyledCardDeck>
      </StyledDiv>
      <Footer></Footer>
    </div>
  );
};

export default ClubPageLayout;
