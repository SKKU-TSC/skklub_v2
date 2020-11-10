import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";

import { useLocalStorage } from "../hooks/useLocalStorage";

import styled from "styled-components";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

let StyledCard = styled(Card)`
  border-radius: 15px;
  margin: 0 !important;
  width: 100%;
`;

let StyledImg = styled(Card.Img)`
  border-radius: 15px 15px 0 0;
`;

let StyledTitle = styled(Card.Title)`
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 426px) {
    font-size: 18px;
  }
`;

let StyledText = styled(Card.Text)`
  font-size: 17px;
  font-weight: lighter;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media (max-width: 426px) {
    font-size: 15px;
  }
`;

const StyledDiv = styled.div`
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

let LikeButton = styled(Button)`
  float: right;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  border: none;
  position: absolute;
  right: 0;
  background-color: transparent !important;
  font-size: 1.6em;
  &:hover {
    background-color: transparent !important;
    border: none;
  }
  &:focus {
    background-color: transparent !important;
    border: none;
    outline: none !important;
    outline-offset: none !important;
    box-shadow: none !important;
  }
  &:active {
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
    outline-offset: none !important;
    box-shadow: none;
  }
`;

function ClubCard(props) {
  const [like, setLike] = useLocalStorage(`${props.name}`, "🤍");

  return (
    <div>
      <StyledCard>
        <Link
          category1={props.category1}
          href={`/central-clubs/${(props.campus === "명륜") ? "seoul" : "suwon"}/${props.id}`}
        >
          <StyledDiv>
            <StyledImg
              variant="top"
              src={`https://admin.skklub.com/img/logo/${props.id}.jpg`}
              onError={(e) => {
                e.target.src = "../alt.jpg";
              }}
            />
            <Card.Body>
              <StyledTitle>{props.name}</StyledTitle>

              <StyledText>
                {props.category3}
                <br></br>
                {props.campus}
              </StyledText>
            </Card.Body>
          </StyledDiv>
        </Link>
      </StyledCard>
    </div>
  );
}


export default ClubCard;
