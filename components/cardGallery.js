import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

import styled from "styled-components";

import seoulClubs from "../data/seoul.json";
import suwonClubs from "../data/suwon.json";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Dropdown } from "semantic-ui-react";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

const CardNoSSR = dynamic(() => import("../components/card"), { ssr: false });
const AlertNoSSR = dynamic(() => import("../components/alert"), { ssr: false });

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
    display: none !important;
  }
`;

let LikeMenuButton = styled(Button)`
  margin-left: 10px;
  @media (min-width: 426px) {
    display: none;
  }
`;

function CardGallery() {
  

  const router = useRouter();
  let univLocation;
  let useData;
  let typeData;
  let univColor;

  let LikedClubsArray = [];

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

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
        "찜한 동아리 ❤️",
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
        "찜한 동아리 ❤️",
      ];
      break;
    default:
      univLocation = "undefined";
  }

  let [type, setType] = useLocalStorage(univLocation, "전체");

  if (type === "전체") {
    return (
      <div>
        <StyledFilterButtonContainer>
          {typeData.map((name, i) => {
            return (
              <StyledButton
                key={i}
                type="submit"
                univcolor={univColor}
                onClick={() => setType(name)}
              >
                {name}
              </StyledButton>
            );
          })}
        </StyledFilterButtonContainer>

        <StyledDropdown text={type} selection>
          <Dropdown.Menu>
            {typeData.map((name, i) => {
              return (
                <Dropdown.Item
                  key={i}
                  type="submit"
                  univcolor={univColor}
                  onClick={() => setType(name)}
                  text={name}
                ></Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </StyledDropdown>

        <LikeMenuButton
          variant="secondary"
          onClick={() => setType("찜한 동아리 ❤️")}
        >
          찜한 동아리
        </LikeMenuButton>

        <StyledCardDeck>
          {useData.map((club, i) => {
            return (
              <CardNoSSR
                key={i}
                name={club.동아리명}
                category={club.소분류}
                campus={club.캠퍼스}
              ></CardNoSSR>
            );
          })}
        </StyledCardDeck>
      </div>
    );
  } else if (type === "찜한 동아리 ❤️") {
    let likedClubs = () => {
      for (let key in localStorage) {
        if (JSON.parse(localStorage.getItem(`${key}`)) === "❤️") {
          LikedClubsArray.push(key);
        }
      }
    };
    likedClubs();
    return (
      <div>
        <StyledFilterButtonContainer>
          {typeData.map((name, i) => {
            return (
              <StyledButton
                key={i}
                type="submit"
                univcolor={univColor}
                onClick={() => {
                  setType(name);
                }}
              >
                {name}
              </StyledButton>
            );
          })}
        </StyledFilterButtonContainer>
        <StyledDropdown text={type} selection>
          <Dropdown.Menu>
            {typeData.map((name, i) => {
              return (
                <Dropdown.Item
                  key={i}
                  type="submit"
                  univcolor={univColor}
                  onClick={() => setType(name)}
                  text={name}
                ></Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </StyledDropdown>

        <LikeMenuButton
          variant="secondary"
          onClick={() => setType("찜한 동아리 ❤️")}
        >
          찜한 동아리
        </LikeMenuButton>
        <AlertNoSSR type={localStorage.getItem("Type")}></AlertNoSSR>
        <StyledCardDeck>
          {useData
            .filter((club) => club.중분류1 == type)
            .map((club) => {
              return (
                <CardNoSSR
                  key={i}
                  name={club.동아리명}
                  category={club.소분류}
                  campus={club.캠퍼스}
                ></CardNoSSR>
              );
            })}
          {LikedClubsArray.map((clubName, i) => {
            for (let i = 0; i < useData.length; i++) {
              if (useData[i].동아리명 == clubName) {
                return (
                  <CardNoSSR
                    key={i}
                    name={useData[i].동아리명}
                    category={useData[i].소분류}
                    campus={useData[i].캠퍼스}
                  ></CardNoSSR>
                );
              }
            }
          })}
        </StyledCardDeck>
      </div>
    );
  } else {
    return (
      <div>
        <StyledFilterButtonContainer>
          {typeData.map((name, i) => {
            return (
              <StyledButton
                key={i}
                type="submit"
                univcolor={univColor}
                onClick={() => setType(name)}
              >
                {name}
              </StyledButton>
            );
          })}
        </StyledFilterButtonContainer>
        <StyledDropdown text={type} selection>
          <Dropdown.Menu>
            {typeData.map((name, i) => {
              return (
                <Dropdown.Item
                  type="submit"
                  univcolor={univColor}
                  onClick={() => setType(name)}
                  text={name}
                ></Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </StyledDropdown>

        <LikeMenuButton
          variant="secondary"
          onClick={() => setType("찜한 동아리 ❤️")}
        >
          찜한 동아리
        </LikeMenuButton>
        <AlertNoSSR type={type}></AlertNoSSR>
        <StyledCardDeck>
          {useData
            .filter((club) => club.중분류1 == type)
            .map((club, i) => {
              return (
                <div>
                  <CardNoSSR
                    name={club.동아리명}
                    category={club.소분류}
                    campus={club.캠퍼스}
                  ></CardNoSSR>
                </div>
              );
            })}
        </StyledCardDeck>
      </div>
    );
  }
}

export default CardGallery;
