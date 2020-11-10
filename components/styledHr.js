import styled from "styled-components";

let StyledDiv = styled.div`
  padding-top: 100px;
  text-align: center !important;
`;

function StyledHr(props) {
  return (
    <StyledDiv>
      <svg width="72" height="28">
        <g transform="matrix(0.4965517 0 0 0.4912281 0 0)">
          <path
            transform="matrix(1.000884 0 0 1.005717 3.485073 3.608523)"
            d="M0 49.5L51 0"
            stroke={props.color}
            strokeWidth="10"
          />
          <path
            transform="matrix(1.000884 0 0 1.005717 90.46991 3.608523)"
            d="M0 49.5L51 0"
            stroke={props.color}
            strokeWidth="10"
          />
          <path
            transform="matrix(1.000884 0 0 1.005717 46.97746 3.608523)"
            d="M0 49.5L51 0"
            stroke={props.color}
            strokeWidth="10"
          />
        </g>
      </svg>
    </StyledDiv>
  );
}

export default StyledHr;
