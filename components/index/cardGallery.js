import styled from "styled-components";

import Card from "./card";

import { Col, Row } from "antd";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1680px;
  padding: 0 120px;
  box-sizing: border-box;
  margin: 6.944vw auto 0;
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: lighter;
`

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: none;
  flex-basis: 25%;
  max-width: 25%;
  font-size: 1.25rem;
  padding: 10px;
  box-sizing: border-box;
  transition: padding 0.1s;
`;

const Image = styled.image`
  flex: 1 0 calc(25% - 10px);
  margin: 25px;
  width: 100%;
  display: block;
  padding-bottom: 90%;
  border-radius: 15%;

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const SquareContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function CardGallery() {
  return (
    <div>
      <Row justify="space-around" align="middle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12} style={{padding: "0% 15%"}}>
          <img style={{ width: "150%" }} src="../1.gif" />
        </Col>
        <Col className="gutter-row" span={12}>
          <h1>기획국</h1>
          <Paragraph>
            기획국은 사업 전반의 진행을 담당합니다. 문제 상황을 해결하거나
            동아리들 의 더 나은 활동을 보장하기 위하여 사업을 기획하고, 그
            과정에서 다양한 아이디어를 제 시합니다. 또한 외부 업체와 컨택하여
            공동 사업을 추진하기도 합니다.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default CardGallery;
