import styled from "styled-components";
import { useRouter } from "next/router";

function Card(props) {
  const router = useRouter();
  let univLocation;

  switch (router.pathname) {
    case "/seoul":
      univLocation = "seoul";
      break;
    case "/suwon":
      univLocation = "suwon";
      break;
    default:
      univLocation = "undefined";
  }

  const CardImg = styled.div`
    background-image: url(${props.imgURL}), url(../alt.jpg);
    visibility: hidden;
    background-size: cover;
    background-position: 50% 50%, 0 0;
    background-repeat: no-repeat, repeat;
    width: 100%;
    height: 235px;
    border-top-left-radius: 12px;
  `;

  const CardImgHover = styled.div`
    background-image: url(${props.imgURL}), url(../alt.jpg);
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: 50% 50%, 0 0;
    background-repeat: no-repeat, repeat;
    width: 100%;
    position: absolute;
    height: 235px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;
  `;

  const CardInfo = styled.div`
    z-index: 2;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
  `;

  const CardCategory = styled.span`
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
  `;

  const CardTitle = styled.h3`
    margin-top: 5px;
    margin-bottom: 10px;
  `;

  const Card = styled.div`
    margin: 25px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: #fff;
    width: 280px;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 5px 10px 8px 10px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
      transform: scale(1.1, 1.1);
    }

    &:hover ${CardImgHover} {
      height: 100%;
      opacity: 0.3;
    }

    &:hover ${CardInfo} {
      background-color: transparent;
      position: relative;
    }
  `;

  return (
    <div>
      <Card>
        <CardImg></CardImg>
        <a href="#" className="card_link">
          <CardImgHover></CardImgHover>
        </a>
        <CardInfo>
          <CardCategory>{props.category}</CardCategory>
          <CardTitle>{props.name}</CardTitle>
        </CardInfo>
      </Card>
    </div>
  );
}

console.log("initialized");

export default Card;
