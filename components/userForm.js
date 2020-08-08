import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  border-radius: 20px;
  border: 1px solid #20bf55;
  background-color: #20bf55;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }

  &.ghost {
    background-color: #4D5DFF;
    border-color: #ffffff;
  }
`;

const StyledP = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const StyledSpan = styled.span`
  font-size: 12px;
`;

const StyledLink = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const StyledForm = styled.form`
  background: #FFFEFC;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const StyledInput = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`;

const Overlay = styled.div`
  background: #F8F5F4;
  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: black;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  &.signInContainer {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  &.signUpContainer {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
  }
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  &.overlayLeft {
    transform: translateX(-20%);
  }
  &.overlayRight {
    right: 0;
    transform: translateX(0);
  }
`;

const show = keyframes`
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
`;

const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;

  &.rightPanelActive .signInContainer {
    transform: translateX(100%);
  }

  &.rightPanelActive .signUpContainer {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: 0.6s ${show};
  }

  &.rightPanelActive ${OverlayContainer} {
    transform: translateX(-100%);
  }

  &.rightPanelActive ${Overlay} {
    transform: translateX(50%);
  }

  &.rightPanelActive .overlayLeft {
    transform: translateX(0);
  }

  &.rightPanelActive .overlayRight {
    transform: translateX(20%);
  }
`;

const SocialContainer = styled.div`
  margin: 20px 0;

  ${StyledLink} {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
  }
`;

export default function UserForm() {
  const [state, setState] = useState("");

  return (
    <Container className={`${state}`} id="container">
      <FormContainer className="signUpContainer">
        <StyledForm action="#">
          <h1>계정 만들기</h1>
          <SocialContainer>
            <StyledLink href="#">
              <i className="fab fa-facebook-f"></i>
            </StyledLink>
            <StyledLink href="#">
              <i className="fab fa-google-plus-g"></i>
            </StyledLink>
            <StyledLink href="#">
              <i className="fab fa-linkedin-in"></i>
            </StyledLink>
          </SocialContainer>
          <StyledSpan>이메일로 로그인하기</StyledSpan>
          <StyledInput type="text" placeholder="Name" />
          <StyledInput type="email" placeholder="Email" />
          <StyledInput type="password" placeholder="Password" />
          <StyledButton>가입하기</StyledButton>
        </StyledForm>
      </FormContainer>
      <FormContainer className="signInContainer">
        <StyledForm action="#">
          <h1>로그인</h1>
          <SocialContainer>
            <StyledLink href="#">
              <i className="fab fa-facebook-f"></i>
            </StyledLink>
            <StyledLink href="#">
              <i className="fab fa-google-plus-g"></i>
            </StyledLink>
            <StyledLink href="#">
              <i className="fab fa-linkedin-in"></i>
            </StyledLink>
          </SocialContainer>
          <StyledSpan>이메일로 로그인하기</StyledSpan>
          <StyledInput type="email" placeholder="Email" />
          <StyledInput type="password" placeholder="Password" />
          <StyledLink href="#">비밀번호를 잊었나요?</StyledLink>
          <StyledButton>로그인</StyledButton>
        </StyledForm>
      </FormContainer>
      <OverlayContainer>
        <Overlay className="overlay">
          <OverlayPanel className="overlayLeft">
            <h1>반갑습니다!</h1>
            <StyledP>
              로그인을 해주세요!
            </StyledP>
            <StyledButton
              className="ghost"
              id="signIn"
              onClick={() => setState("")}
            >
              로그인
            </StyledButton>
          </OverlayPanel>
          <OverlayPanel className="overlayRight">
            <h1>안녕하세요!</h1>
            <StyledP>
              새로 오셨나요? 간단한 회원가입을 완료해주세요!
            </StyledP>
            <StyledButton
              className="ghost"
              id={`signUp`}
              onClick={() => setState("rightPanelActive")}
            >
              회원가입
            </StyledButton>
          </OverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}
