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

let StyledP = styled.p`
  font-size: 16px;
`

function EventContainer(props) {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  let univLocation;
  let color;
  let useData;
  let eventText;
  let displayCheck;
  let eventHref;

  switch (router.pathname) {
    case "/seoul":
      univLocation = "명륜";
      color = "success";
      eventText = "🎊동아리 지원하고, 경품 받아가세요!! 🎉";
      displayCheck = props.display === "seoulOff" ? "none" : "";
      eventHref =
        "https://docs.google.com/forms/d/e/1FAIpQLScg7Oejn1CxVJDz_xxotqcvxKSXsroVQGVbhJ0MbEDQ1B4aBw/viewform?usp=send_form";
      break;
    case "/suwon":
      univLocation = "율전";
      color = "primary";
      eventText = "🎊동아리 지원하고, 경품 받아가세요!! 🎉";
      displayCheck = props.display === "suwonOff" ? "none" : "";
      eventHref = "https://forms.gle/bjrV3A4ek8wCZtzt6";
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
          size="lg"
        >
          🎉 이벤트 진행중!
        </Button>
        <StyledCollapse in={open}>
          <EventBox id="collapse-text">
            <StyledP>{eventText}</StyledP>
            <Button
              variant={color}
              href={eventHref}
              target="_blank"
              rel="noopener noreferrer"
              size = "lg"
            >
              {univLocation} 동아리 지원하기
            </Button>
          </EventBox>
        </StyledCollapse>
      </StyledCollpaseDiv>
    </div>
  );
}

export default EventContainer;
