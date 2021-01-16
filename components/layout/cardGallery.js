import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import styled from "styled-components";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Dropdown } from "semantic-ui-react";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import IECheck from "../../hooks/isIE"

const CardNoSSR = dynamic(() => import("../global/card"), { ssr: false });
const AlertNoSSR = dynamic(() => import("../global/alert"), { ssr: false });

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
  font-size: 16px;
  font-weight: lighter;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 25px;
  color: black;
  padding: 0.5rem 3rem;
  margin-right: 20px;
  margin-top: 10px;
  -webkit-appearance: none;

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

function CardGallery(props) {
  const router = useRouter();
  let typeData;
  let LikedClubsArray = [];
  let campusData;

  if (router.pathname.includes("groups")) {
    switch (router.pathname.includes("seoul")) {
      case true:
        campusData = "seoul";
        typeData = [
          "전체",
          "경영대학",
          "경제대학",
          "문과대학",
          "사범대학",
          "사회과학대학",
          "예술대학",
          "유학대학",
          "기타",
          "찜한 동아리",
        ];
        break;
      case false:
        campusData = "suwon";
        typeData = [
          "전체",
          "공과대학",
          "생명공학대학",
          "소프트웨어대학",
          "스포츠과학대학",
          "약학대학",
          "자연과학대학",
          "정보통신대학",
          "기타",
          "찜한 동아리",
        ];
        break;
      default:
        console.log("error");
    }
  } else {
    switch (router.pathname.includes("seoul")) {
      case true:
        campusData = "seoul";
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
          "찜한 동아리",
        ];
        break;
      case false:
        campusData = "suwon";
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
          "찜한 동아리",
        ];
        break;
      default:
        console.log("error");
    }
  }

  let [type, setType] = useLocalStorage(props.univLocation, "전체");

  if (type === "전체") {
    return (
      <div>
        <IECheck></IECheck>
        <StyledFilterButtonContainer>
          {typeData.map((name, i) => {
            return (
              <StyledButton
                key={i}
                type="submit"
                univcolor={props.theme}
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
                  univcolor={props.theme}
                  onClick={() => setType(name)}
                  text={name}
                ></Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </StyledDropdown>

        <LikeMenuButton
          variant="secondary"
          onClick={() => setType("찜한 동아리")}
        >
          찜한 동아리
        </LikeMenuButton>

        <StyledCardDeck>
          {props.data.map((club, i) => {
            return (
              <CardNoSSR
                key={i}
                id={club.cid}
                name={club.cname}
                category3={club.category3}
                category2={club.category2}
                category1={club.category1}
                campus={club.campus}
                campusData={campusData}
                logoPath={club.logo_path}
              ></CardNoSSR>
            );
          })}
        </StyledCardDeck>
      </div>
    );
  } else if (type === "찜한 동아리") {
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
        <IECheck></IECheck>
        <StyledFilterButtonContainer>
          {typeData.map((name, i) => {
            return (
              <StyledButton
                key={i}
                type="submit"
                univcolor={props.theme}
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
                  univcolor={props.theme}
                  onClick={() => setType(name)}
                  text={name}
                ></Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </StyledDropdown>

        <LikeMenuButton
          variant="secondary"
          onClick={() => setType("찜한 동아리")}
        >
          찜한 동아리
        </LikeMenuButton>
        <AlertNoSSR type={type}></AlertNoSSR>
        <StyledCardDeck>
          {props.data
            .filter((club) => club.category2 == type)
            .map((club) => {
              return (
                <CardNoSSR
                  key={i}
                  id={props.data[i].cid}
                  name={club.cname}
                  category2={club.category2}
                  category1={club.category1}
                  category3={club.category3}
                  campus={club.campus}
                  campusData={campusData}
                  logoPath={club.logo_path}
                ></CardNoSSR>
              );
            })}
          {LikedClubsArray.map((clubId, i) => {
            for (let i = 0; i < props.data.length; i++) {
              if (props.data[i].cid == clubId) {
                return (
                  <CardNoSSR
                    key={i}
                    id={props.data[i].cid}
                    name={props.data[i].cname}
                    category2={props.data[i].category2}
                    category3={props.data[i].category3}
                    campus={props.data[i].campus}
                    campusData={campusData}
                    logoPath={club.logo_path}
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
        <IECheck></IECheck>
        <StyledFilterButtonContainer>
          {typeData.map((name, i) => {
            return (
              <StyledButton
                key={i}
                type="submit"
                univcolor={props.theme}
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
                  univcolor={props.theme}
                  onClick={() => setType(name)}
                  text={name}
                ></Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </StyledDropdown>

        <LikeMenuButton
          variant="secondary"
          onClick={() => setType("찜한 동아리")}
        >
          찜한 동아리
        </LikeMenuButton>
        <AlertNoSSR type={type}></AlertNoSSR>
        <StyledCardDeck>
          {props.data
            .filter((club, i) => props.data[i].category2 == type)
            .map((club, j) => {
              return (
                <div>
                  <CardNoSSR
                    key={j}
                    id={club.cid}
                    name={club.cname}
                    category2={club.category2}
                    category1={club.category1}
                    category3={club.category3}
                    campus={club.campus}
                    campusData={campusData}
                    logoPath={club.logo_path}
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
