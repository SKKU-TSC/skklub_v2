import Button from "react-bootstrap/Button";
import styled from "styled-components";

let StyledButton = styled(Button)`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: none;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
`;

function ClubWebsiteButton(props) {
  if (props.link != "") {
    return (
      <StyledButton
        color={props.textColor}
        bgColor={props.color}
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        동아리 대표 페이지
      </StyledButton>
    );
  } else {
    return null;
  }
}

export default ClubWebsiteButton;
