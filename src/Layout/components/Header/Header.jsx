import { useState } from "react";
import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import Hamburguer from "../../../../public/svg/icons/hamburguer_menu.svg";
import Close from "../../../../public/svg/icons/close.svg";
import { device } from '../../../../shared/mediaqueries';

const headerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 7px 25px -25px rgb(0 0 0 / 73%);
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
`;
  
const navCss = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  z-index: 2;
  background-color: white;

  @media ${device.mobileS} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media ${device.tablet}{
    display: grid;
    grid-template-columns: 30%  auto;
    align-items: center;
    
  }
`;

const BrandCss = styled.div`
  & a {
    color: #ec4941;
    font-weight: bold;
  }
  @media ${device.mobileS}{
    display: none;
  }

  @media ${device.tablet}{
    display: block;
  }
`;

const MenuCss = styled.div`
  @media ${device.mobileS} {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    width: 100%;
    background-color: white;
    transition: all 0.3s linear;
    transform: translateX(-100%);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
  }

  @media ${device.tablet}{
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 30px;
    justify-content: flex-end;
    height: 100%;
    position: relative;
    width: auto;
    top: unset;
    transform: translateX(0);

    & a {
      font-size: 15px;
      color: #3A3A3A;
    }

  }
`;

const mobileContainerCss = css`
  @media ${device.mobileS} {
    display: flex;
    justify-content: center;
    align-items:center;
  }

  & svg {
    width: 30px;
    height: 30px;
  }

  @media ${device.tablet}{
    display: none;
  }
`;

function Header(){
  const [ showMenu, setShowMenu ] = useState(false);

  function handleMenuClick(){
    setShowMenu(!showMenu);
  }
  return(
    <header css={headerCss}>
      <nav css={navCss}>
        <BrandCss show={showMenu}>
          <a href="#">CNT</a>
        </BrandCss>
        <div css={mobileContainerCss} onClick={handleMenuClick}>
          {!showMenu ? <Hamburguer/>:<Close/>}
        </div>
        <MenuCss show={showMenu}>
          <a href="#">📝 Presentación </a>
          <a href="#">📩 Título 2</a>
          <a href="#">🐱 Título 3</a>
        </MenuCss>
      </nav>
    </header>
  )
}

export default Header;