import { useRouter } from "next/router";
import Router from "next/router";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Switch } from 'antd';

import styled from "styled-components";

let univLocation;
let univColor;
let nextPath;

let linkDisplay;
let navBrand;
let navBrandFont;
let clubType;

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
  cursor: pointer;
`;

const StyledToggle = styled(Navbar.Toggle)``;

const StyledCollapse = styled(Navbar.Collapse)`
  padding-top: 10px;
`;

const StyledSwitch = styled(Switch)`
  
`

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    현재 준비중입니다
  </Tooltip>
);

function GlobalNavbar(props) {
  const router = useRouter();
  let checkRoute = router.pathname;

  switch (checkRoute) {
    case "/central-clubs/seoul":
      univLocation = "율전";
      nextPath = "suwon";
      univColor = "#4d5dff";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";

      clubType = "central-clubs";
      break;
    case "/central-clubs/suwon":
      univLocation = "명륜";
      univColor = "green";
      nextPath = "seoul";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";

      clubType = "central-clubs";
      break;
    case "/independent-clubs/seoul":
      univLocation = "율전";
      nextPath = "suwon";
      univColor = "#4d5dff";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";

      clubType = "independent-clubs";
      break;
    case "/independent-clubs/suwon":
      univLocation = "명륜";
      nextPath = "seoul";
      univColor = "green";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";
      clubType = "independent-clubs";
      break;
    case "/groups/seoul":
      univLocation = "율전";
      nextPath = "suwon";
      univColor = "#4d5dff";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";
      clubType = "groups";
      break;
    case "/groups/suwon":
      univLocation = "명륜";
      nextPath = "seoul";
      univColor = "green";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";
      clubType = "groups";
      break;
    case "/student-org/seoul":
      univLocation = "율전";
      nextPath = "suwon";
      univColor = "#4d5dff";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";
      clubType = "student-org";
      break;
    case "/student-org/suwon":
      univLocation = "명륜";
      nextPath = "seoul";
      univColor = "green";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";
      clubType = "student-org";
      break;
    default:
      linkDisplay = "none";
      navBrand = "SKKLUB";
      navBrandFont = "2rem";
      break;
  }

  return (
    <div>
      <StyledNavbar fixed="top" bg="light" expand="lg">
        <StyledNavBrand navbrandfont={navBrandFont} href="/" scroll="false">
          {navBrand}
        </StyledNavBrand>

        <StyledToggle aria-controls="basic-navbar-nav"></StyledToggle>
        <StyledCollapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/central-clubs/seoul"></Nav.Link>
            <NavDropdown title="중앙동아리" id="basic-nav-dropdown">
              <NavDropdown.Item href="/central-clubs/seoul">
                명륜 캠퍼스
              </NavDropdown.Item>
              <NavDropdown.Item href="/central-clubs/suwon">
                율전 캠퍼스
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="기타동아리" id="basic-nav-dropdown">
              <NavDropdown.Item href="/independent-clubs/seoul">
                명륜 캠퍼스
              </NavDropdown.Item>
              <NavDropdown.Item href="/independent-clubs/suwon">
                율전 캠퍼스
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="소모임" id="basic-nav-dropdown">
              <NavDropdown.Item href="/groups/seoul">
                명륜 캠퍼스
              </NavDropdown.Item>
              <NavDropdown.Item href="/groups/suwon">
                율전 캠퍼스
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="학회" id="basic-nav-dropdown">
              <NavDropdown.Item href="/academic-clubs/seoul">
                명륜 캠퍼스
              </NavDropdown.Item>
              <NavDropdown.Item href="/academic-clubs/suwon">
                율전 캠퍼스
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="학생 단체" id="basic-nav-dropdown">
              <NavDropdown.Item href="/student-org/seoul">
                명륜 캠퍼스
              </NavDropdown.Item>
              <NavDropdown.Item href="/student-org/suwon">
                율전 캠퍼스
              </NavDropdown.Item>
            </NavDropdown>
            <StyledLink
              linkdisplay={linkDisplay}
              univcolor={univColor}
              href={`/${clubType}/${nextPath}`}
            >
              {univLocation} 캠퍼스 🎓
            </StyledLink>
            <Nav.Link
              target="blank"
              href="http://admin.skklub.com/register/regular/"
            >
              동아리 등록하기
            </Nav.Link>
          </Nav>
          
        </StyledCollapse>
      </StyledNavbar>
    </div>
  );
}

export default GlobalNavbar;
