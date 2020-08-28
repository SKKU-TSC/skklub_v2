import { useRouter } from "next/router";
import { useState } from "react";

import seoulClubs from "../data/seoul.json";
import suwonClubs from "../data/suwon.json";

import EventContainer from "../components/eventContainer";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import Typed from "react-typed";
import styled from "styled-components";
import CountUp from "react-countup";

const GlobalContainer = styled.div`
  width: 100%;
  background-color: #f8f7f8;
  padding: 110px 0 20px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  padding-left: 10%;
`;

const TitleContainer = styled.div``;

const DescContainer = styled.div`
  margin-top: 50px;
  padding-left: 10%;
`;

const UnivName = styled.span`
  color: ${(props) => props.color};
  padding: 0;
`;

const ClubNum = styled.span`
  color: ${(props) => props.color};
`;

let EventBox = styled.div`
  padding-left: 10%;
  margin-top: 20px;
`;

let StyledP = styled.p`
  font-size: 17px;
  line-height: 35px;

  @media (max-width: 426px) {
    font-size: 15px;
    line-height: 30px;
  }
`

function TopContainer() {
  const [open, setOpen] = useState(false);

  let clubNum = 120;
  let univLocation;
  let color;
  let useData;

  const router = useRouter();

  let event = true;

  switch (router.pathname) {
    case "/seoul":
      univLocation = "명륜";
      color = "green";
      useData = seoulClubs;
      break;
    case "/suwon":
      univLocation = "율전";
      color = "#4d5dff";
      useData = suwonClubs;
      break;
    default:
      univLocation = "undefined";
  }

  if (event === true) {
    return (
      <div>
        <GlobalContainer>
          <TitleContainer>
            <Title>
              <UnivName color={color}>
                <Typed strings={[`성대 ${univLocation}`]} typeSpeed={60} />
              </UnivName>
              <br />
              모든 동아리를
              <br />한 눈에!
            </Title>
          </TitleContainer>
          <DescContainer>
            <StyledP>
              현재{" "}
              <ClubNum color={color}>
                <CountUp end={useData.length} />
              </ClubNum>
              개의 동아리들이 등록되어 있습니다.
              
            </StyledP>
            <StyledP>각 동아리의 상세 페이지에 하트를 눌러<br></br>동아리를 찜해보세요!</StyledP>
            <EventContainer display=""></EventContainer>
          </DescContainer>
        </GlobalContainer>
      </div>
    );
  } else {
    return (
      <div>
        <GlobalContainer>
          <TitleContainer>
            <Title>
              <UnivName color={color}>
                <Typed strings={[`성대 ${univLocation}`]} typeSpeed={60} />
              </UnivName>
              <br />
              모든 동아리를
              <br />한 눈에!
            </Title>
          </TitleContainer>
          <DescContainer>
            <StyledP>
              현재{" "}
              <ClubNum color={color}>
                <CountUp end={useData.length} />
              </ClubNum>
              개의 동아리들이 등록되어 있습니다.
            </StyledP>
            <StyledP>각 동아리의 상세 페이지에 하트를 눌러<br></br>동아리를 찜해보세요!</StyledP>
          </DescContainer>
        </GlobalContainer>
      </div>
    );
  }
}

export default TopContainer;
