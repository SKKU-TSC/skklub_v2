import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import styled from "styled-components";


function GlobalNavbar() {
  const router = useRouter();
  let univLocation;
  let univColor;
  let nextPath;
  let btnColor;

  switch (router.pathname) {
    case "/seoul":
      univLocation = "수원";
      nextPath = "suwon";
      univColor = "#4d5dff";
      btnColor = "green";
      break;
    case "/suwon":
      univLocation = "명륜";
      univColor = "green";
      nextPath = "seoul";
      btnColor = "#4d5dff";
      break;
    default:
      univLocation = "undefined";
  }

  const StyledNavbar = styled(Navbar)`
    background-color: #F8F7F8;
    height: 5.5rem;
    padding: 0px;
    padding-left: 4rem;
    width: 100%;
  `;

  const StyledLink = styled(Nav.Link)`
    color: ${univColor} !important;
  `;

  const StyledNavBrand = styled(Navbar.Brand)`
    font-size: 2rem;
    font-weight: lighter;
    padding: 20px;
  `;

  const StyledCollapse = styled(Navbar.Collapse)`
    background-color: #F8F7F8;
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
  
    @media only screen and (min-width: 768px) and (max-width: 959px) {
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
    background-color: ${btnColor};

    &:hover {
      background-color: ${btnColor};
    }
    &:active {
      background-color: ${btnColor};
    }
    &:focus {
      outline: 0;
      box-shadow: none !important;
    }
  `;

  return (
    <div>
      <StyledNavbar fixed="top" expand="lg">
        <StyledNavBrand href="#home">SKKLUB</StyledNavBrand>
        <StyledToggle aria-controls="basic-navbar-nav"></StyledToggle>
        <StyledCollapse>
          <DivCollapse>
            <Nav className="mr-auto">
              <Nav.Link href="#home">중앙동아리</Nav.Link>
              <Nav.Link href="#features">학회</Nav.Link>
              <Nav.Link href="#pricing">소개</Nav.Link>
              <StyledLink href={"/" + nextPath}>
                {univLocation} 캠퍼스 🎓
              </StyledLink>
            </Nav>
            <StyledForm inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <StyledButton>검색</StyledButton>
            </StyledForm>
          </DivCollapse>
        </StyledCollapse>
      </StyledNavbar>
    </div>
  );
}

export default GlobalNavbar;
