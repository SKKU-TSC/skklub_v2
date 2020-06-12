import styled from "styled-components";
import seoulClubs from "../data/seoul.json";
import suwonClubs from "../data/suwon.json";
import CardDeck from "react-bootstrap/CardDeck";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

const CardNoSSR = dynamic(() => import("../components/card"), { ssr: false });

const StyledCardDeck = styled(CardDeck)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

const StyledFilterButtonContainer = styled(ButtonToolbar)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  padding-left: 60px;
  margin-top: 20px;
`;

const StyledButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 25px;
  color: black;
  padding: 5px 50px;
  margin-left: 20px;
  margin-top: 10px;
`;
//const StyledFilterButtonContainer = styled()``;

function CardGallery() {
  const [count, setCount] = useState("전체");

  console.log("card initialized");
  const router = useRouter();
  let univLocation;
  let useData;
  let typeData;

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  console.log("sort function initialized");

  switch (router.pathname) {
    case "/seoul":
      univLocation = "seoul";
      shuffle(seoulClubs);
      useData = seoulClubs;
      typeData = [
        "전체",
        "평면예술",
        "연행예술",
        "봉사",
        "취미교양",
        "스포츠",
        "종교분과",
        "학술분과",
        "인문사회",
      ];
      break;
    case "/suwon":
      univLocation = "suwon";
      shuffle(suwonClubs);
      useData = suwonClubs;
      typeData = [
        "전체",
        "연행예술",
        "평면예술",
        "과학기술",
        "취미교양",
        "사회",
        "종교",
        "학술",
        "건강체육",
      ];
      break;
    default:
      univLocation = "undefined";
  }
  console.log("sorted use Data");

  if (count === "전체") {
    return (
      <div>
        <StyledFilterButtonContainer size="lg" className="mb-2">
          {typeData.map((name) => {
            return (
              <StyledButton type="submit" onClick={() => setCount(name)}>
                {name}
              </StyledButton>
            );
          })}
        </StyledFilterButtonContainer>
        <StyledCardDeck>
          {useData.map((club) => {
            return (
              <CardNoSSR
                name={club.동아리명}
                category={club.중분류1}
              ></CardNoSSR>
            );
          })}
        </StyledCardDeck>
      </div>
    );
  } else {
    return (
      <div>
        <StyledFilterButtonContainer size="lg" className="mb-2">
          {typeData.map((name) => {
            return (
              <StyledButton type="submit" onClick={() => setCount(name)}>
                {name}
              </StyledButton>
            );
          })}
        </StyledFilterButtonContainer>
        <StyledCardDeck>
          {useData
            .filter((club) => club.중분류1 == count)
            .map((club) => {
              return (
                <CardNoSSR
                  name={club.동아리명}
                  category={club.중분류1}
                ></CardNoSSR>
              );
            })}
        </StyledCardDeck>
      </div>
    );
  }
}

export default CardGallery;
