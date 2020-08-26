import { useRouter } from "next/router";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import styled from "styled-components";

let EventBox = styled.div`
  padding-left: 10%;
  margin-top: 20px;
`;

let StyledCollpaseDiv = styled.div`
  display: ${(props) => props.display};
`;

let StyledCollapse = styled(Collapse)`
  padding: 0;
`;

function EventContainer(props) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  let univLocation;
  let color;
  let useData;
  let eventText;
  let displayCheck;

  switch (router.pathname) {
    case "/seoul":
      univLocation = "명륜";
      color = "success";
      eventText = "동아리 지원 사업";
      displayCheck = props.display === "seoulOff" ? "none" : "";
      break;
    case "/suwon":
      univLocation = "율전";
      color = "primary";
      eventText = "";
      displayCheck = props.display === "suwonOff" ? "none" : "";
      break;
    default:
      univLocation = "undefined";
  }

  return (
    <div>
      <StyledCollpaseDiv display={displayCheck}>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="collapse-text"
          aria-expanded={open}
          variant={color}
        >
          🎉 이벤트 진행중!
        </Button>
        <StyledCollapse in={open}>
          <EventBox id="collapse-text">
            <p>{eventText}</p>
            <Button variant={color} href="" target="_blank" rel="noopener noreferrer">
              동아리 지원하기
            </Button>
          </EventBox>
        </StyledCollapse>
      </StyledCollpaseDiv>
    </div>
  );
}

export default EventContainer;
