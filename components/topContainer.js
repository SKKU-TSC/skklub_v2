import Typed from "react-typed";
import { useRouter } from "next/router";
import CountUp from "react-countup";
import styled from "styled-components";
import seoulClubs from "../data/seoul.json";
import suwonClubs from "../data/suwon.json";

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
color: ${props => props.color};
padding: 0;
`;

const ClubNum = styled.span`
color: ${props => props.color};
`;

function TopContainer() {
  let clubNum = 120;
  let univLocation;
  let color;
  let useData;

  const router = useRouter();

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
          <p>
            현재{" "}
            <ClubNum color={color}>
              <CountUp end={useData.length} />
            </ClubNum>
            개의 동아리들이 등록되어 있습니다.
          </p>
        </DescContainer>
      </GlobalContainer>
    </div>
  );
}

export default TopContainer;
