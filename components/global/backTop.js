import { BackTop } from "antd";
import {ArrowUpOutlined} from "@ant-design/icons"

const style = {
  height: 40,
  width: 40,
  lineHeight: "30px",
  borderRadius: 4,
  backgroundColor: "grey",
  color: "#fff",
  textAlign: "center",
  fontSize: 20,
};

function BackTopBtn() {
  return (
    <BackTop>
      <div style={style}><ArrowUpOutlined /></div>
    </BackTop>
  );
}

export default BackTopBtn;