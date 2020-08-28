import { useRouter } from "next/router";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import styled from "styled-components";

let univLocation;
let univColor;
let nextPath;
let hrefLink;
let linkDisplay;
let navBrand;
let navBrandFont;

const StyledNavbar = styled(Navbar)`
  background-color: #f8f7f8;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10%;
  padding-right: 10%;
  width: 100%;
`;

const StyledLink = styled(Nav.Link)`
  color: ${(props) => props.univcolor} !important;
  display: ${(props) => props.linkdisplay} !important;
`;

const StyledNavBrand = styled(Navbar.Brand)`
  font-size: ${(props) => props.navbrandfont} !important;
  font-weight: lighter;
`;

const StyledToggle = styled(Navbar.Toggle)``;

const StyledCollapse = styled(Navbar.Collapse)`
  padding-top: 10px;
`;

function GlobalNavbar(props) {
  const router = useRouter();
  let checkRoute = router.pathname;

  switch (checkRoute) {
    case "/seoul":
      univLocation = "율전";
      nextPath = "suwon";
      univColor = "#4d5dff";
      linkDisplay = "inline";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";
      hrefLink = "/";
      break;
    case "/suwon":
      univLocation = "명륜";
      univColor = "green";
      nextPath = "seoul";
      linkDisplay = "inline";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";
      hrefLink = "/";
      break;
    case "/":
      linkDisplay = "none";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";
      hrefLink = "/";
      break;
    default:
      linkDisplay = "none";
      navBrand = "뒤로가기";
      navBrandFont = "1.2rem";
      hrefLink = "javascript:history.back()";
  }

  return (
    <div>
      <StyledNavbar fixed="top" bg="light" expand="lg">
        <StyledNavBrand navbrandfont={navBrandFont} href={hrefLink}>
          {navBrand}
        </StyledNavBrand>
        <StyledToggle aria-controls="basic-navbar-nav"></StyledToggle>
        <StyledCollapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="중앙동아리" id="basic-nav-dropdown">
              <NavDropdown.Item href="/seoul">명륜 캠퍼스</NavDropdown.Item>
              <NavDropdown.Item href="/suwon">율전 캠퍼스</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="소개" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.notion.so/daniel2231/32c22fccdb6f440ba414638956455cc8"
              >
                동아리연합회 소개
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.notion.so/daniel2231/9f2a5b7d93a54fedb36c961afa1fb254"
              >
                SKKLUB 소개
              </NavDropdown.Item>
            </NavDropdown>
            <StyledLink
              linkdisplay={linkDisplay}
              univcolor={univColor}
              href={"/" + nextPath}
            >
              {univLocation} 캠퍼스 🎓
            </StyledLink>
          </Nav>
        </StyledCollapse>
      </StyledNavbar>
    </div>
  );
}

export default GlobalNavbar;
