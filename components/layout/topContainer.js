import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

import EventContainer from "../global/eventContainer";

import Typed from "typed.js"
import styled from "styled-components";
import CountUp from "react-countup";

const GlobalContainer = styled.div`
  width: 100%;
  background-color: #f8f7f8;
  padding: 110px 0 20px 0;
`;

const Title = styled.h1`
  font-size: 40px;
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

let StyledP = styled.p`
  font-size: 17px;
  line-height: 35px;
  @media (max-width: 426px) {
    font-size: 15px;
    line-height: 30px;
  }
`;

function TopContainer(props) {
  // Create reference to store the DOM element containing the animation
	const el = useRef(null);
  // Create reference to store the Typed instance itself
	const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        `성대 ${props.univLocation}`
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

  const [open, setOpen] = useState(false);
  //이벤트 컨테이너 활성화: Change state to true
  const[isEvent, setEvent] = useState(false);

  let color;

  const router = useRouter();

  switch (router.pathname.includes("seoul")) {
    case true:
      color = "green";
      break;
    case false:
      color = "#4d5dff";
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
              <span style={{ whiteSpace: 'pre' }} ref={el} />
            </UnivName>
            <br />
            모든 {props.clubType}를
            <br />한 눈에!
          </Title>
        </TitleContainer>
        <DescContainer>
          <StyledP>
            현재{" "}
            <ClubNum color={color}>
              <CountUp end={props.data.length} />
            </ClubNum>
            개의 {props.clubType}들이 등록되어 있습니다.
          </StyledP>
          <StyledP>
            각 동아리의 상세 페이지에 하트를 눌러<br></br>동아리를 찜해보세요!
          </StyledP>
          <div>{isEvent? <EventContainer display="" /> : null}</div>
        </DescContainer>
      </GlobalContainer>
    </div>
  );
}
export default TopContainer;