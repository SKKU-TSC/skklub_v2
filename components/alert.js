import Alert from "react-bootstrap/Alert";

import Desc from "../data/type.json";

import styled from "styled-components";


const StyledAlert = styled(Alert)`
  margin: 20px 10% 10px 10%;
  padding: 20px;
`;

function AlertType(props) {
  let descData = props.type;

  return (
    <>
      <StyledAlert variant="secondary">
        <Alert.Heading>{descData}</Alert.Heading>
        <p>{Desc[descData]}</p>
      </StyledAlert>
    </>
  );
}

export default AlertType;
