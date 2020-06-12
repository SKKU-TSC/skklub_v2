import Head from 'next/head';
import TopContainer from '../components/topContainer'
import CardGallery from "../components/cardGallery"
import dynamic from 'next/dynamic';
import styled from 'styled-components'

const NavbarWithNoSSR = dynamic(
  () => import('../components/navbar'),
  { ssr: false }
)

const Main = styled.main`
width: 100%;
background-color: #fff;
`

export default function Seoul() {


  return (
    <div>
      <Head>
        <title>SKKLUB - 명륜</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <NavbarWithNoSSR></NavbarWithNoSSR>
        <TopContainer></TopContainer>
        <CardGallery></CardGallery>
      </Main>
    </div>
  )
}
