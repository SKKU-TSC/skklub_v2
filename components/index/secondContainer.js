import { Row, Col } from "antd";
import styled from "styled-components";
import QueueAnim from "rc-queue-anim";
import { OverPack } from "rc-scroll-anim";

const DivContainer = styled.div`
  width: 100%;
  padding: 150px 60px 150px 60px;
  background-color: #f8f8f9;
`;

const StyledRow = styled(Row)`
  padding-bottom: 80px;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const FirstColumn = styled(Col)`
  text-align: right;
  padding-bottom: 10px;
  padding-right: 170px;
  @media (max-width: 985px) {
    text-align: left;
    padding-right: 0px;
  }
`;

const LeftText = styled.h1`
  font-weight: lighter;
  @media (max-width: 768px) {
    font-size: 1.7em;
  }
`;

const SecondColumn = styled(Col)`
  text-align: left;
`;

const RightTextTitle = styled.h1`
  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

const RightTextParagraph = styled.p`
  font-size: 1.3em;
  font-weight: lighter;
  word-break: keep-all;
  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

function SecondContainer() {
  return (
    <div>
      <DivContainer>
        <OverPack always={false} style={{ height: "inherit" }}>
          <QueueAnim
            className="queue-simple"
            ease={["easeOutQuart", "easeInOutQuart"]}
          >
            <StyledRow key="a">
              <FirstColumn xs={24} lg={10}>
                <LeftText>Who we are</LeftText>
              </FirstColumn>
              <SecondColumn xs={24} lg={14}>
                <RightTextTitle>
                  안녕하세요,
                  <br />
                  동아리연합회 동행입니다!
                </RightTextTitle>
                <RightTextParagraph>
                  성균관대학교 동아리연합회는 민주적인 절차를 통해 우리 대학
                  캠퍼스 문화의 건전한 발 전을 위한 기틀을 마련하며 동아리 관련
                  행정 처리 및 행사 추진 등을 담당합니다. 동아리 연합회는
                  중앙동아리 소속 학우들의 활동을 장려하는 것을 넘어서, 교내
                  모든 동아리 및 소모임, 학회 등이 이용할 수 있는 공간을
                  제공하고, 중앙동아리 관련 정보를 신입생에게 제공하는 등
                  성균인의 문화생활을 장려하고 있습니다.
                </RightTextParagraph>
              </SecondColumn>
            </StyledRow>
            <StyledRow key="b">
              <FirstColumn xs={24} lg={10}>
                <LeftText>What we do</LeftText>
              </FirstColumn>
              <SecondColumn xs={24} lg={14}>
                <RightTextTitle>저희는 이런 활동을 해요!</RightTextTitle>
                <RightTextParagraph>
                  민주적 의견 수렴을 위해 상시로 운영위원회와 전동대회를 열어
                  정보를 공유하고, 결정사 항을 함께 결정하며, 건의사항에 대해
                  검토합니다. 소통창구를 통해 항상 학내 구성원의 목소리에 귀
                  기울이고 있습니다. 동아리연합회는 특별기구로써
                  중앙운영위원회를 구성, 학생자치활동에 적극적으로 참여합니다.
                  학내 모든 동아리인들의 목소리를 대변하고, 서 로 다른 목소리,
                  서로 다른 의견을 한데 모아 함께 논의하는 과정에서 최선을 향해
                  나아가 려고 노력합니다. 동아리연합회는 성균관대학교의
                  학생사회의 발전을 위해 이바지합니다.
                </RightTextParagraph>
              </SecondColumn>
            </StyledRow>
            <StyledRow key="c">
              <FirstColumn xs={24} lg={10}>
                <LeftText>How we work</LeftText>
              </FirstColumn>
              <SecondColumn xs={24} lg={14}>
                <RightTextTitle>
                  동아리연합회는 이렇게 구성되어 있어요!
                </RightTextTitle>
                <RightTextParagraph>
                  동아리연합회는 원활한 업무 수행을 위해 5개의 집행부서를
                  구성하여 운영하고 있습니다. 기획국, 총무국, 사무국, 편집국,
                  홍보국이 서로 소통하고 업무를 함께 추진하며 행정 처리 를
                  진행하고 있습니다. 이렇게 진행된 상시사업과 공약사업의 이행은
                  학우들에게 투명하 게 공개되고 있습니다. 각국의 업무는 다음과
                  같습니다. 투명하게 공개되고 있습니다.
                </RightTextParagraph>
              </SecondColumn>
            </StyledRow>
          </QueueAnim>
        </OverPack>
      </DivContainer>
    </div>
  );
}

export default SecondContainer;
