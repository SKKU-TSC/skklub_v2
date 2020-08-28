import Button from "react-bootstrap/Button";

function ClubWebsiteButton(props) {

  if (props.link != "") {
    return (
      <Button
        variant="info"
        target="_blank"
        rel="noopener noreferrer"
        href={props.link}
      >
        동아리 대표 페이지
      </Button>
    );
  } else {
      return null
  }
}

export default ClubWebsiteButton;
