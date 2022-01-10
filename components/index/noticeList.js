import { Skeleton, List, Avatar } from "antd";
import styled from "styled-components";
import { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const StyledList = styled(List)`
  
  height: 400px;
  overflow: auto;
`;

export default function NoticeList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function getData() {
      await fetch(
        `https://admin.skklub.com/api/${props.clubType}/${props.campus}`
      )
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

  if (props.clubType == "notice") {
    return (
      <ListDiv>
        <h1>{props.title}</h1>
        <StyledList
          header={<div>{props.name}</div>}
          bordered
          dataSource={info}
          renderItem={(i) => (
            <List.Item key={i.cname}>
              <Skeleton loading={!isLoaded} active avatar>
                <List.Item.Meta
                  title={<a href="https://ant.design">{i.cname}</a>}
                  description={`${i.category2}`}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </ListDiv>
    );
  } else {
    return (
      <ListDiv>
        <h1>{props.title}</h1>
        <StyledList
          header={<div>{props.name}</div>}
          size="large"
          bordered
          dataSource={info}
          renderItem={(i) => (
            <List.Item key={i.cname}>
              <Skeleton loading={!isLoaded} active avatar>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://admin.skklub.com/img/logo/${i.logo_path}`}
                    />
                  }
                  title={
                    <a href={`/${props.clubType}/${i.campus}/${i.id}`}>
                      {i.cname}
                    </a>
                  }
                  description={`${i.category3}`}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </ListDiv>
    );
  }
}
