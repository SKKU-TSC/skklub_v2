import styled from "styled-components";
import seoulClubs from "../data/seoul.json";
import suwonClubs from "../data/suwon.json";
import CardDeck from "react-bootstrap/CardDeck";
import AlertType from "../components/alert";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";

const CardNoSSR = dynamic(() => import("../components/card"), { ssr: false });

const StyledCardDeck = styled(CardDeck)`
  list-style: none;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  margin: 0 10%;
  padding-top: 20px;

  @media (max-width: 425px) {
    grid-gap: 10px;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;

const StyledFilterButtonContainer = styled(ButtonToolbar)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  padding: 0 10%;
  margin-top: 20px;
`;

const StyledButton = styled.div`
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 25px;
  color: black;
  padding: 0.5rem 3rem;
  margin-right: 20px;
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.univcolor};
    color: white;
  }

  &:focus {
    background-color: ${(props) => props.univcolor};
    color: white;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

const StyledDropdown = styled(Dropdown)`
  margin-left: 10%;
  @media (min-width: 426px) {
    display: none;
  }
`;

function CardGallery() {
  const [type, setType] = useState("전체");

  console.log("card initialized");
  const router = useRouter();
  let univLocation;
  let useData;
  let typeData;
  let univColor;

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  console.log("sort function initialized");

  switch (router.pathname) {
    case "/seoul":
      univLocation = "seoul";
      shuffle(seoulClubs);
      useData = seoulClubs;
      univColor = "green";
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
      univColor = "#4d5dff";
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
      console.log("undefined");
  }
  console.log("sorted use Data");

  if (type === "전체") {
    return (
      <div>
        <StyledFilterButtonContainer>
          {typeData.map((name) => {
            return (
              <StyledButton
                key={name}
                type="submit"
                univcolor={univColor}
                onClick={() => setType(name)}
              >
                {name}
              </StyledButton>
            );
          })}
        </StyledFilterButtonContainer>
        <StyledDropdown>
          <Dropdown.Toggle>분과 선택하기</Dropdown.Toggle>

          <Dropdown.Menu>
            {typeData.map((name) => {
              return (
                <Dropdown.Item
                  key={name}
                  type="submit"
                  univcolor={univColor}
                  onClick={() => setType(name)}
                >
                  {name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </StyledDropdown>
        <StyledCardDeck>
          {useData.map((club) => {
            return (
              <CardNoSSR
                key={club.동아리명}
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
        <StyledFilterButtonContainer>
          {typeData.map((name) => {
            return (
              <StyledButton
                key={name}
                type="submit"
                univcolor={univColor}
                onClick={() => setType(name)}
              >
                {name}
              </StyledButton>
            );
          })}
        </StyledFilterButtonContainer>
        <StyledDropdown>
          <Dropdown.Toggle>분과 선택하기</Dropdown.Toggle>
          <Dropdown.Menu>
            {typeData.map((name) => {
              return (
                <Dropdown.Item
                  key={name}
                  type="submit"
                  univcolor={univColor}
                  onClick={() => setType(name)}
                >
                  {name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </StyledDropdown>
        <AlertType type={type}></AlertType>
        <StyledCardDeck>
          {useData
            .filter((club) => club.중분류1 == type)
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
