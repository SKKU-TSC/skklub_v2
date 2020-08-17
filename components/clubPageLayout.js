import Head from "next/head";
import { useRouter } from "next/router";
import seoulClubs from "../data/seoul.json";
import suwonClubs from "../data/suwon.json";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Badge from "react-bootstrap/Badge";
import React, { useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Footer from "../components/footer";

const StyledCardDeck = styled(CardDeck)`
  margin-top: 20px;
`

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75em;
  margin-top: 1.875rem;
`;

const StyledSlogan = styled.p`
  margin-bottom: 0.75em;
`;

const StyledH2 = styled.h2`
  margin-top: 1.875rem;
  font-size: 1.5rem;
  margin-top: 1.5rem;
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
  margin-left: 10%;
  margin-right: 10%;
  text-align: left;
`;

const ClubPageLayout = (props) => {
  console.log("loaded Page layout");
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
        <StyledTitle>{club.동아리명}</StyledTitle>
        <StyledSlogan>
          <em>&quot;{club.핵심문구}&quot;</em>
        </StyledSlogan>

        <StyledH2>About</StyledH2>
        <StyledHr></StyledHr>
        <h5>
          <Badge variant="secondary">
            {club.대분류}&gt;{club.중분류1}&gt;{club.소분류}
          </Badge>{" "}
        </h5>
        <p>{club.소개글}</p>

        <StyledH2>Activity</StyledH2>
        <StyledHr></StyledHr>
        <p>{club.활동정보}</p>

        <StyledH2>Recruiting</StyledH2>
        <StyledHr></StyledHr>
        <StyledCardDeck>
          <Card>
            <Card.Img variant="top" src="../모집시기.png" />
            <Card.Body>
              <Card.Title>모집시기</Card.Title>
              <Card.Text>{club.모집시기}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="../모집인원.png" />
            <Card.Body>
              <Card.Title>모집인원</Card.Title>
              <Card.Text>{club.모집인원}</Card.Text>
            </Card.Body>
          </Card>
        </StyledCardDeck>
        <StyledCardDeck>
          <Card>
            <Card.Img variant="top" src="../활동기간.png" />
            <Card.Body>
              <Card.Title>의무 활동기간</Card.Title>
              <Card.Text>{club.활동기간}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="../모집방식.png" />
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
