import styled from "styled-components";

import { Card } from "antd";

const CardContainer = styled.div`
  flex: auto;
  position: relative;
  border-radius: 26px;
  overflow: hidden;
  outline: none;
  background-color: black;
`;

const CardInfo = styled.div`
  bottom: 0;
  margin: 8.06%;
  text-align: left;
  z-index: 1;
  color: white;
`;

function MemberCard(props) {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        bordered={false}
      ></Card>
    </div>
  );
}

export default MemberCard;
