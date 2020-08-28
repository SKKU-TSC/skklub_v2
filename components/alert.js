import Alert from "react-bootstrap/Alert";

import Desc from "../data/type.json";

import styled from "styled-components";


const StyledAlert = styled(Alert)`
  margin: 20px 10% 10px 10%;
  padding: 20px;
`;

const StyledP = styled.p`
  font-size: 17px;
`

function AlertType(props) {
  let descData = props.type;

  return (
    <>
      <StyledAlert variant="secondary">
        <Alert.Heading>{descData}</Alert.Heading>
        <StyledP>{Desc[descData]}</StyledP>
      </StyledAlert>
    </>
  );
}

export default AlertType;
