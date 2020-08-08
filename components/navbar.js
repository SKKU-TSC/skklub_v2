import { useRouter } from "next/router";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";
import Router from "next/router";


let univLocation;
let univColor;
let nextPath;
let btnColor;

const StyledNavbar = styled(Navbar)`
  background-color: #f8f7f8;
  height: 5.5rem;
  padding: 0px;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
`;

const StyledLink = styled(Nav.Link)`
  color: ${(props) => props.univcolor} !important;
`;

const StyledNavBrand = styled(Navbar.Brand)`
  font-size: 2rem;
  font-weight: lighter;
`;

const StyledCollapse = styled(Navbar.Collapse)`
  background-color: #f8f7f8;
`;

const StyledToggle = styled(Navbar.Toggle)`
  padding: 20px;
  border: none;

  &:focus {
    outline: 0;
    box-shadow: none !important;
  }
`;

const StyledForm = styled(Form)`
  @media (max-width: 425px) {
    padding-top: 1rem;
    width: 50% !important;
  }
`;

const DivCollapse = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;

  @media only screen and (max-width: 959px) {
    flex-direction: column;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${(props) => props.btncolor};

  &:hover {
    background-color: ${(props) => props.btncolor};
  }
  &:active {
    background-color: ${(props) => props.btncolor};
  }
  &:focus {
    outline: 0;
    box-shadow: none !important;
  }
`;

function GlobalNavbar(props) {
  const router = useRouter();
  let checkRoute = router.pathname.includes("/seoul");

  switch (checkRoute) {
    case true:
      univLocation = "수원";
      nextPath = "suwon";
      univColor = "#4d5dff";
      btnColor = "green";
      break;
    case false:
      univLocation = "명륜";
      univColor = "green";
      nextPath = "seoul";
      btnColor = "#4d5dff";
      break;
    default:
      console.log("error");
  }

  console.log(props.history);

  return (
    <div>
      <StyledNavbar fixed="top" expand="lg">
        <StyledNavBrand href={"/"}>SKKLUB</StyledNavBrand>
        <StyledToggle aria-controls="basic-navbar-nav"></StyledToggle>
        <StyledCollapse>
          <DivCollapse>
            <Nav className="mr-auto">
              <Nav.Link>중앙동아리</Nav.Link>
              <Nav.Link>학회</Nav.Link>
              <Nav.Link>소개</Nav.Link>
              <StyledLink univcolor={univColor} href={"/" + nextPath}>
                {univLocation} 캠퍼스 🎓
              </StyledLink>
            </Nav>
            <StyledForm inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <StyledButton btncolor={btnColor}>검색</StyledButton>
            </StyledForm>
          </DivCollapse>
        </StyledCollapse>
      </StyledNavbar>
    </div>
  );
}

export default GlobalNavbar;
