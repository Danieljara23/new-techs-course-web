import { css } from "@emotion/core";
import  Layout  from "../src/Layout/index";
import { device } from "../shared/mediaqueries";
import Link from 'next/link';


const homeHeroContainerCss = css`
  @media ${device.mobileS}{
    display: flex;
    flex-direction: column;
  }

  @media ${device.tablet}{
    display: grid;
    grid-template-columns: 50% 50%;
  }

  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  z-index: 0;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: url('/images/Homehero.jpg') no-repeat;
    filter: grayscale(75%) brightness(0.5);
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const homeHeroItemCss = css`
  @media ${device.mobileS} {
    padding: 0 4%;

    & h1 {
      margin-top: 40px;
      font-size: 40px;
    }

    & p {
      font-size: 16px;
    }
  }

  @media ${device.tablet} {
    padding-left: 10%;

    & h1 {
      margin-top: 0;
      font-size: 50px;
      text-align: left;
    }

    & p {
      font-size: 16px;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  
  
  & h1 {
    color: white;
    font-weight: bold;
  }
  
  & p {
    color: white;
  }
`;

const seeMoreCss = css`
  color: #ec4941;
  text-decoration: none;

  &:hover{
    color: #ec4941;
    text-decoration: none;
  }
`;

function Home() {
  return (
    <Layout title="Curso de Nuevas Tecnologías">
        <div css={homeHeroContainerCss}>
          <div/>
          <div css={homeHeroItemCss}>
            <h1>Curso de Nuevas <br/> Tecnologías</h1>
            <p>Ad minim veniam amet labore officia sint esse exercitation. Veniam esse irure occaecat elit Lorem. Occaecat laborum qui pariatur ullamco consequat nisi duis veniam sint qui ut occaecat cupidatat. Anim et anim minim eu ullamco non exercitation ut. Eiusmod id aute fugiat veniam aute nostrud incididunt. Duis commodo esse deserunt dolor id cupidatat aliqua elit labore do. Eu dolore anim incididunt consequat deserunt...<Link href="/prologo"><a css={seeMoreCss}>ver más</a></Link></p>
          </div>
        </div>
    </Layout>
  )
}

export default  Home
