import { Carousel } from "antd";
import styled from "styled-components";

const StyledCarousel = styled(Carousel)`
  border-radius: 30px !important;
`

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "30px",
};

export default function IndexCarousel() {
  return (
    <StyledCarousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
    </StyledCarousel>
  );
}
