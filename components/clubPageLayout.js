import Head from "next/head";
import { useRouter } from "next/router";
import Router from "next/router";
import seoulClubs from "../data/seoul.json";
import suwonClubs from "../data/suwon.json";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Color from "color-thief-react";

const StyledSection = styled.section`
  margin-top: 100px;
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.dominantColor};
`;

const ClubPageLayout = (props) => {
  console.log("loaded Page layout");
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

  return (
    <div>
      <Head>
        <title>{club.동아리명}</title>
      </Head>

      <StyledSection>
        <h1>{club.동아리명}</h1>
        <img src={(`../${univLocation}/${club.동아리명}.jpg`)}></img>
        <Button onClick={() => Router.back()}>돌아가기</Button>
      </StyledSection>
      <Color src={(`../${univLocation}/${club.동아리명}.jpg`)}>
        {({ data, loading, error }) => (
          <StyledH1 dominantColor={data}>Text with the predominant color</StyledH1>
        )}
      </Color>
    </div>
  );
};

export default ClubPageLayout;
