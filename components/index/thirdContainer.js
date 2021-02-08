import styled from "styled-components";
import IntroSection from "./introSection";

const StyledDiv = styled.div`
  width: 100%;
  background-color: white;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const StyledText = styled.h1`
  text-align: center;
  font-size: 4em;
  margin-bottom: 80px;
`;

function ThirdContainer() {
  return (
    <div>
      <StyledDiv>
        <StyledText>부서 소개</StyledText>
        <IntroSection />
      </StyledDiv>
    </div>
  );
}

export default ThirdContainer;
