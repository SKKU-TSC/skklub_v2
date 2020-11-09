import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import styled from "styled-components";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { Dropdown } from "semantic-ui-react";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";

import Loading from "../loading";

const CardNoSSR = dynamic(() => import("../card"), { ssr: false });
const AlertNoSSR = dynamic(() => import("../alert"), { ssr: false });

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

let LoadingDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  padding: 0 10%;
  margin-top: 20px;
`;

function CardGallery() {
  const router = useRouter();
  let univLocation;
  let useData;
  let typeData;
  let univColor;
  let category;

  let LikedClubsArray = [];

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  switch (router.pathname) {
    case "/central-clubs/seoul":
      category = "중앙동아리";
      univLocation = "명륜";
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
        "찜한 동아리",
      ];
      break;
    case "/central-clubs/suwon":
      category = "중앙동아리";
      univLocation = "율전";
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
        "찜한 동아리",
      ];
      break;
    default:
      univLocation = "undefined";
  }

  let [type, setType] = useLocalStorage(univLocation, "전체");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch(`https://admin.skklub.com/api/${category}/${univLocation}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setInfo(result);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }
    getData();
  }, []);

  useData = info;
  shuffle(useData);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <LoadingDiv>
        <Loading />
      </LoadingDiv>
    );
  } else {
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
            onClick={() => setType("찜한 동아리")}
          >
            찜한 동아리
          </LikeMenuButton>

          <StyledCardDeck>
            {useData.map((club, i) => {
              return (
                <CardNoSSR
                  key={i}
                  id={useData[i].cid}
                  name={club.cname}
                  category1={club.category1}
                  category3={club.category3}
                  campus={club.campus}
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
            onClick={() => setType("찜한 동아리")}
          >
            찜한 동아리
          </LikeMenuButton>
          <AlertNoSSR type={type}></AlertNoSSR>
          <StyledCardDeck>
            {useData
              .filter((club) => club.중분류1 == type)
              .map((club) => {
                return (
                  <CardNoSSR
                    key={i}
                    name={club.cname}
                    category3={club.category3}
                    category1={club.category1}
                    campus={club.campus}
                  ></CardNoSSR>
                );
              })}
            {LikedClubsArray.map((clubId, i) => {
              for (let i = 0; i < useData.length; i++) {
                if (useData[i].cid == clubId) {
                  return (
                    <CardNoSSR
                      key={i}
                      id={useData[i].cid}
                      name={useData[i].cname}
                      category3={useData[i].category3}
                      category1={useData[i].category1}
                      campus={useData[i].campus}
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
            onClick={() => setType("찜한 동아리")}
          >
            찜한 동아리
          </LikeMenuButton>
          <AlertNoSSR type={type}></AlertNoSSR>
          <StyledCardDeck>
            {useData
              .filter((club, i) => useData[i].category2 == type)
              .map((club, i) => {
                return (
                  <div>
                    <CardNoSSR
                      key={i}
                      id={useData[i].cid}
                      name={useData[i].cname}
                      category3={useData[i].category3}
                      category1={useData[i].category1}
                      campus={useData[i].campus}
                    ></CardNoSSR>
                  </div>
                );
              })}
          </StyledCardDeck>
        </div>
      );
    }
  }
}

export default CardGallery;
