import styled from "styled-components";

const StyledFooter = styled.div`
  margin-top: auto;
  display: block;
  text-align: center;
  background-color: #F8F9FA;
`;

const FooterP = styled.p`
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin-bottom: 0 !important;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <div>
      <StyledFooter>
        <FooterP>SKKLUB - Created and Maintained by 기술지원위원회</FooterP>
      </StyledFooter>
    </div>
  );
}

export default Footer;
