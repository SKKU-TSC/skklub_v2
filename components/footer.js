import styled from "styled-components";

const StyledFooter = styled.div`
    margin-top: auto;
    display: block;
    text-align: center;
    background-color: #fff;
`

const FooterP = styled.p`
    padding-bottom: 2rem;
    padding-top: 2rem;
    margin-bottom: 0 !important;
`

function Footer(){
    return(
        <div>
            <StyledFooter>
                <FooterP>SKKLUB, by Daniel.K and Mingman, Likelion SKKU</FooterP>
            </StyledFooter>
        </div>
    )
}

export default Footer;