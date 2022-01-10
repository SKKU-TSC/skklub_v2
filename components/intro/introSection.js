import styled from "styled-components";
import { Col, Row } from "antd";

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: lighter;
`;

const ColImage = styled.img`
  width: 20vh;
  margin-bottom: 40px;
  margin-right: 50px;
`

function IntroSection() {
  return (
    <div style={{ height: "auto"}}>
      <Row
        style={{marginBottom: "100px"}}
        justify="space-around"
        align="middle"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col
          className="gutter-row"
          xs={24}
          md={8}
          align="middle"
          style={{ padding: "0% auto" }}
        >
          <ColImage src="../Support.png" />
        </Col>
        <Col className="gutter-row" xs={24} md={16}>
          <h1>기획국</h1>
          <Paragraph>
            기획국은 사업 전반의 진행을 담당합니다. 문제 상황을 해결하거나
            동아리들의 더 나은 활동을 보장하기 위하여 사업을 기획하고, 그
            과정에서 다양한 아이디어를 제 시합니다. 또한 외부 업체와 컨택하여
            공동 사업을 추진하기도 합니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
      style={{marginBottom: "100px"}}
      justify="space-around"
      align="middle"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          xs={24}
          md={8}
          align="middle"
          style={{ padding: "0% auto" }}
        >
          <ColImage src="../Money.png" />
        </Col>
        <Col className="gutter-row" xs={24} md={16}>
          <h1>총무국</h1>
          <Paragraph>
          총무국은 성균관대학교 중앙동아리의 원활한 활동을 보조하기 위해 동아리연 합회 전반의 재정 관련 업무를 담당합니다. 경상보조금, 회장장학금의 학기 말 지불과 동 아리연합회 사업 관련하여 예산 집행과 감사를 담당합니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
      style={{marginBottom: "100px"}}
      justify="space-around"
      align="middle"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          xs={24}
          md={8}
          align="middle"
          style={{ padding: "0% auto" }}
        >
          <ColImage src="../Searching.png" />
        </Col>
        <Col className="gutter-row" xs={24} md={16}>
          <h1>사무국</h1>
          <Paragraph>
          사무국은 전체적인 동아리 업무를 관리하며 여러 서류 작업 및 회의록 작성, 공 간 관리와 설문지 관리, 재등록 관련 업무를 수행합니다. 회장단을 보조해야하며, 동아리 연합회 집행부 회의와 운영위원회 회의에 참석합니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
      style={{marginBottom: "100px"}}
      justify="space-around"
      align="middle"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          xs={24}
          md={8}
          align="middle"
          style={{ padding: "0% auto" }}
        >
          <ColImage src="../Design.png" />
        </Col>
        <Col className="gutter-row" xs={24} md={16}>
          <h1>편집국</h1>
          <Paragraph>
          편집국은 디자인 업무를 전담합니다. 여기서 디자인 업무란, 다른 부서에서 기 획한 각종 홍보물 등을 시각화하는 작업을 말합니다. 대표적으로는 동아리 책자, SNS 게 시용 카드뉴스, 각종 행사나 학생회관에서 사용할 인쇄물 등이 있습니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
      style={{marginBottom: "100px"}}
      justify="space-around"
      align="middle"
      gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          xs={24}
          md={8}
          align="middle"
          style={{ padding: "0% auto" }}
        >
          <ColImage src="../Messages.png" />
        </Col>

        <Col className="gutter-row" xs={24} md={16}>
          <h1>홍보국</h1>
          <Paragraph>
          홍보국은 동아리연합회 홍보 활동에 관련된 업무를 담당합니다. 동아리연합회 의 각종 행사들과 중앙동아리의 소식들을 종합하여 홍보합니다. 또한 SNS 계정을 관리하
며 동아리 관련 문의에 답변하는 소통창구의 역할도 수행합니다.
          </Paragraph>
        </Col>

      </Row>
    </div>
  );
}

export default IntroSection;
