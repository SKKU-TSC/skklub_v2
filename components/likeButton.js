import { useLocalStorage } from "../hooks/useLocalStorage";

import styled from "styled-components";

let Heart = styled(MdHeart)`
  z-index: 100;
`;

let HeartOutline = styled(MdHeartOutline)`
  z-index: 100;
`;

let StyledA = styled.a``;

let likedClubs = () => {
  for (let key in localStorage) {
    if (JSON.parse(localStorage.getItem(`${key}`)) === "❤️") {
      LikedClubsArray.push(key);
    }
  }
};

let LikeButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: white;
  z-index: 100;
  border: none;
  position: absolute;
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

export default function LikeButtons(props) {
  const [like, setLike] = useLocalStorage(`${props.name}`, "🤍");
  likedClubs();
  return (
    <LikeButton
      onClick={() => {
        if (like === "❤️") {
          setLike("🤍");
          localStorage.removeItem(props.name);
        } else {
          setLike("❤️");
        }
      }}
      likeState={like}
    >
      {like}
    </LikeButton>
  );
}
