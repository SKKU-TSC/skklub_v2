import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CardDeck from "react-bootstrap/CardDeck";
import { Tabs } from "antd";
import { Card } from "antd";

const { Meta } = Card;

const CardNoSSR = dynamic(() => import("../global/card"), { ssr: false });

const { TabPane } = Tabs;
const CardHangerDiv = styled.div`
  margin-top: 30px;
`;

const Title = {
  left: <h1 style={{ marginRight: "30px" }}>오늘의 추천 동아리</h1>,
};

const StyledCardDeck = styled.ul`
  padding: 1rem;
  display: flex;
  overflow-x: scroll;
  scroll-padding: 0 50%;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;

  scrollbar-width: none;
`;

export default function CardHanger() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  async function getData(campus) {
    await fetch(`https://admin.skklub.com/api/central-clubs/${campus}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  useEffect(() => {
    getData("seoul");
  }, []);

  function callback(key) {
    console.log(key);
    if (key === "1") {
      getData("seoul");
    } else {
      getData("suwon");
    }
  }

  return (
    <CardHangerDiv>
      <Tabs
        size={"large"}
        defaultActiveKey="1"
        onChange={callback}
        tabBarExtraContent={Title}
      >
        <Tabs.TabPane tab="명륜" key="1">
          <StyledCardDeck>
            {data.slice(0, 10).map((club, i) => {
              return (
                <Card
                  hoverable
                  style={{ width: 240, marginRight: "20px", scrollSnapAlign: "center" }}
                  cover={
                    <img
                      alt="example"
                      src={`https://admin.skklub.com/img/logo/${club.logo_path}`}
                    />
                  }
                >
                  <Meta
                    title={club.name}
                    description={club.category2}
                  />
                </Card>
              );
            })}
          </StyledCardDeck>
        </Tabs.TabPane>
        <Tabs.TabPane tab="율전" key="2">
          <StyledCardDeck>
            {data.slice(0, 8).map((club, i) => {
              return (
                <CardNoSSR
                  key={i}
                  id={club.cid}
                  name={club.cname}
                  category3={club.category3}
                  category2={club.category2}
                  category1={club.category1}
                  campus={club.campus}
                  campusData={"seoul"}
                  logoPath={club.logo_path}
                ></CardNoSSR>
              );
            })}
          </StyledCardDeck>
        </Tabs.TabPane>
      </Tabs>
    </CardHangerDiv>
  );
}
