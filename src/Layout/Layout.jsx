import Header from "./components/Header";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Head from 'next/head'

const LayoutCss = css`
  min-height: 100vh;
  display: grid;
  grid-template-areas: "header"
  "content"
  "footer";
  grid-template-rows: auto 200px;
`;

const headerCss = css`
  grid-template-area: header;
`;

const ContentContainer = styled.div`
  padding-top: 60px;
  min-height: 100vh;
  align-items: center;
  background-color: ${props => props.theme.colors.bg_main_color};
`;

const footerCss = css`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & img {
    margin-left: 0.5rem;
  }
`;

function Layout({title, children}){
  return(
    <div css={LayoutCss}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header css={headerCss}/>
      <ContentContainer>
        {children}
      </ContentContainer>
      <footer css={footerCss}>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Layout