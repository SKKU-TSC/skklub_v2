import Head from "next/head";
import styled, { keyframes } from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import UserForm from "../components/userForm";

const FullPage = styled.div`
  width: 100%;
  height: 100%;
`;

const IndexContainer = styled.div`
  display: -webkit-box !important;
  display: flex;
  max-width: 42em;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  height: 100%;
  flex-direction: column;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  text-align: center;
`;

const StyledNavBrand = styled(Navbar.Brand)`
  font-size: 2rem;
  font-weight: lighter;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const StyledTitle2 = styled.h2`
  font-size: 1.2rem;
  font-weight: lighter;
`;

const FrontContainer = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;
`;

const StyledImg = styled.img`
  width: 40%;
  margin-bottom: 10%;
`;

export default function Index() {
  return (
    <div>
      <Head>
        <title>SKKLUB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullPage>
        <IndexContainer>
          <Navbar expand="lg">
            <StyledNavBrand>SKKLUB</StyledNavBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <FrontContainer>
            <StyledImg src="../indexpic.jpg"></StyledImg>
            <StyledTitle>성균관대학교 모든 동아리/단체를 한눈에!</StyledTitle>
            <StyledTitle2>
              SKKLUB은 우리 학교의 모든 동아리/학회/단체를 한눈에 볼 수 있는
              플랫폼입니다.
            </StyledTitle2>
          </FrontContainer>
          <UserForm></UserForm>
        </IndexContainer>
      </FullPage>
    </div>
  );
}
