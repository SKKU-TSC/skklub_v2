import styled from "styled-components";
import QueueAnim from "rc-queue-anim";

const DivContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  background-color: black;
`;

const TextWrap = styled.div`
  pointer-events: none;
  position: sticky;
  top: 80px;
  width: 800px;
  left: 120px;
  z-index: 200;
  padding: 130px 0;
  text-shadow: 1px 1px 0px #00000011;

  @media (max-width: 768px) {
    width: calc(100% - 14vw);
    padding: 13.889vw 0;
    left: 6.944vw;
    top: 100px;
  }
`;

const WhiteHeader = styled.h1`
  color: white;
  font-size: 5em;
  line-height: 80px;
  font-weight: 700;

  @media (max-width: 768px) {
    
    font-size: 4em;
    line-height: 60px;
  }
`;

const CoverImg = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

function FirstContainer() {
  return (
    <div>
      <DivContainer>
        <CoverImg src="/dyexample.jpeg"></CoverImg>
        <TextWrap>
          <QueueAnim delay={300} className="queue-simple">
            <WhiteHeader key="a">성균관대학교</WhiteHeader>
            <WhiteHeader key="b">동아리연합회</WhiteHeader>
            <WhiteHeader key="c">"동행"</WhiteHeader>
          </QueueAnim>
        </TextWrap>
      </DivContainer>
    </div>
  );
}

export default FirstContainer;
