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
`;

function IntroSection() {
  return (
    <div style={{ height: "auto" }}>
      <Row
        style={{ marginBottom: "100px" }}
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
          <ColImage src="../사무국.svg" />
        </Col>
        <Col className="gutter-row" xs={24} md={16}>
          <h1>사무국</h1>
          <Paragraph>
            사무국은 전체적인 동아리 활동에 필요한 상시서류들을 작성하고,
            신규등록 및 재등록 관련 업무를 진행합니다. 회장단을 보조하여 징계
            대상 동아리를 관리하고, 동아리연합회 집행부 회의, 전동대회,
            운영위원회 회의에 참석하여 회의록을 작성합니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
        style={{ marginBottom: "100px" }}
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
          <ColImage src="../총무.svg" />
        </Col>
        <Col className="gutter-row" xs={24} md={16}>
          <h1>사무국 총무팀</h1>
          <Paragraph>
            사무국 소속 총무팀은 성균관대학교 중앙동아리의 원활한 활동을
            보조하기 위해 동아리연합회 전반의 재정 관련 업무를 수행합니다.
            경상보조금, 회장장학금, 행사지원금의 지급 관련 행정을 담당합니다.
            또한 동아리연합회 사업 운영을 위한 학생회비 예산 수립, 집행, 학기별
            결산도 담당하고 있습니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
        style={{ marginBottom: "100px" }}
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
          <ColImage src="../대내사업국.svg" />
        </Col>
        <Col className="gutter-row" xs={24} md={16}>
          <h1>대내사업국</h1>
          <Paragraph>
            대내사업국은 동아리연합회 내부운영에 초점을 맞추어 동아리인의
            복지사업을 담당합니다. 동아리 운영의 편의와 효율을 고려하여 사업을
            기획하여 원활한 활동이 진행될 수 있도록 지원합니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
        style={{ marginBottom: "100px" }}
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
          <ColImage src="../행사기획국.svg" />
        </Col>
        <Col className="gutter-row" xs={24} md={16}>
          <h1>행사기획국</h1>
          <Paragraph>
            행사기획국은 동아리연합회와 관련된 행사 혹은 대외적인 사업 전반의
            진행과 기획을 담당합니다. 중앙동아리의 더 나은 활동을 보장하기
            위하여 사업을 기획하고, 그 과정에서 다양한 아이디어를 제시합니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
        style={{ marginBottom: "100px" }}
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
          <ColImage src="../홍보국.svg" />
        </Col>

        <Col className="gutter-row" xs={24} md={16}>
          <h1>홍보국</h1>
          <Paragraph>
            홍보국은 동아리연합회의 홍보와 문의답변에 관련된 업무를 담당합니다.
            동아리연합회에서 진행하는 각종 행사들과 중앙동아리의 소식들을
            종합하여 홍보합니다. 또한 SNS 계정을 관리하며 동아리 관련 문의에
            답변하는 소통창구의 역할도 수행합니다. 홍보국 내에는 콘텐츠 제작을
            위한 디자인팀이 소속되어 있습니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
        style={{ marginBottom: "100px" }}
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
          <ColImage src="../디자인.svg" />
        </Col>

        <Col className="gutter-row" xs={24} md={16}>
          <h1>홍보국 디자인팀</h1>
          <Paragraph>
            홍보국 소속 디자인팀은 팀장과 팀원으로 구성돼 있으며 홍보책자,
            카드뉴스, 홍보물 디자인 등 전반적인 시각물 디자인 업무를 담당하고
            있습니다.
          </Paragraph>
        </Col>
      </Row>
      <Row
        style={{ marginBottom: "100px" }}
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
          <ColImage src="../소통국.svg" />
        </Col>

        <Col className="gutter-row" xs={24} md={16}>
          <h1>소통국</h1>
          <Paragraph>
            소통국은 동아리연합회의 공식적인 소통창구 운영, SKKLUB 웹사이트 운영
            및 학생회관 내 자치공간 대여사업 등을 진행하고 보조합니다.
            중앙동아리와 동아리연합회 간 징검다리의 역할을 하며 고충 및
            문제해결을 위하여 힘쓰고 있습니다.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default IntroSection;
