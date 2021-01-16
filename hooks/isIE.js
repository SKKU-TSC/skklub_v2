import { isIE } from "react-device-detect";

import styled from "styled-components";

import { Result, Button } from "antd";

let Popup = styled.div`
  
  border-radius: 5px;
  border: 1px solid lightgrey;
  background-color: white;
  width: 100%;
  padding: 100% 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

function IECheck() {
  if (isIE) {
    return (<Popup>
      <Result
        title="스클럽은 인터넷 익스플로러를 지원하지 않습니다."
        extra={
          <Button type="primary" key="console">
            크롬 다운받기
          </Button>
        }
      />
    </Popup>)
  } else {
    return null;
  }
}

export default IECheck;
