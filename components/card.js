import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "react-bootstrap/Card";

let StyledCard = styled(Card)`
  border-radius: 15px;
  margin: 0 !important;
  width: 100%;
`;

let StyledImg = styled(Card.Img)`
  border-radius: 15px 15px 0 0;
`;

const StyledA = styled.a`
  text-decoration: none;
  &:hover ${StyledA} {
    cursor: pointer;
  }
`;

function ClubCard(props) {
  const router = useRouter();
  let univLocation;

  switch (router.pathname) {
    case "/seoul":
      univLocation = "seoul";
      break;
    case "/suwon":
      univLocation = "suwon";
      break;
    default:
      univLocation = "undefined";
  }

  return (
    <div>
      <StyledCard>
        <Link href={`/${univLocation}/${props.name}`}>
          <StyledA>
            <StyledImg
              variant="top"
              src={`../${univLocation}/${props.name}.jpg`}
              onError={(e) => {
                e.target.src = "../alt.jpg";
              }}
            />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>{props.category}</Card.Text>
            </Card.Body>
          </StyledA>
        </Link>
      </StyledCard>
    </div>
  );
}

console.log("initialized");

export default ClubCard;
