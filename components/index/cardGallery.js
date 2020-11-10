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

const Square = styled.div`
  flex: 1 0 calc(25% - 10px);
  margin: 25px;
  background: #e9d2ff;
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
      <Row>
        <Col lg={4} sm={12} xs={12}>
          <Square></Square>
        </Col>
        <Col lg={4} sm={12} xs={12}>
          <Square></Square>
        </Col>
        <Col lg={4} sm={12} xs={12}>
          <Square></Square>
        </Col>
        <Col lg={4} sm={12} xs={12}>
          <Square></Square>
        </Col>
        <Col lg={4} sm={12} xs={12}>
          <Square></Square>
        </Col>
        <Col lg={4} sm={12} xs={12}>
          <Square></Square>
        </Col>
        <Col lg={4} sm={12} xs={12}>
          <Square></Square>
        </Col>
        <Col lg={4} sm={12} xs={12}>
          <Square></Square>
        </Col>
        <Col lg={4} sm={12} xs={12}>
          <Square></Square>
        </Col>
      </Row>
    </div>
  );
}

export default CardGallery;
