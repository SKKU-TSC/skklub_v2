import styled from "styled-components";
import Head from "next/head";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const FirstContainer = styled.section`
  .first-container {
    text-align: center;
  }

  .first-title {
    font-size: 12em;
  }
`;

function Home() {
  return (
    <div className="container">
      <Head>
        <title>SKKLUB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FirstContainer>
        <h5 className="first-desc">
          우리 학교의 모든 동아리/학회를 볼 수 있는 플랫폼
        </h5>
      </FirstContainer>

      <section className="second-container"></section>
    </div>
  );
}

export default Home;
