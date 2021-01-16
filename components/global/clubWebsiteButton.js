import Button from "react-bootstrap/Button";
import styled from "styled-components";

let StyledButton = styled(Button)`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  border: none;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  margin-right: 30px;
`;

function validURL(str) {
  if (str !== null) {
    let checkSpaceURL = str.replace(/\s/g, "");
    var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (!regex.test(checkSpaceURL)) {
      return false;
    } else {
      return true;
    }
  }
}

function ClubWebsiteButton(props) {
  if (validURL(props.link) === true) {
    return (
      <StyledButton
        color={props.textColor}
        bgcolor={props.color}
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        동아리 대표 페이지
      </StyledButton>
    );
  } else {
    console.log("걸리짐");
    return null;
  }
}

export default ClubWebsiteButton;
