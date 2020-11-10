import styled from "styled-components";
import CardGallery from "./cardGallery";

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const StyledText = styled.h1`
  text-align: center;
  font-size: 4em;
`;

function ThirdContainer() {
  return (
    <div>
      <StyledDiv>
        <StyledText>Members</StyledText>
        <CardGallery />
      </StyledDiv>
    </div>
  );
}

export default ThirdContainer;
