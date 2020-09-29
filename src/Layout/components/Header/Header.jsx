import { useState } from "react";
import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import Hamburguer from "../../../../public/svg/icons/hamburguer_menu.svg";
import Close from "../../../../public/svg/icons/close.svg";
import { device } from '../../../../shared/mediaqueries';
import { Menu } from 'antd';
import Link from 'next/link';

const headerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 7px 25px -25px rgb(0 0 0 / 73%);
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  z-index: 10;
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
    color: #ff5200;
    font-weight: bold;
    font-size: 24px;
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
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transform: ${({ show }) => show ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
  }

  @media ${device.tablet}{
    display: none;
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

const antMenuStyles = css`

  font-size: 16px;

  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.tablet}{
    display: block;
    border-bottom-color: transparent;

    & > .ant-menu-item:hover, & > .ant-menu-item a:hover, & > .ant-menu-submenu:hover, & > .ant-menu-submenu a:hover  {
      border-bottom-color: transparent !important;
    }

    & > .ant-menu-item-selected{
      border-bottom-color: transparent !important;
    }
  }
  
`;

const { SubMenu } = Menu;

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [ menuState, setMenuState ] = useState('')

  function handleClick(e) {
    console.log('click ', e);
    setMenuState(e.key);
  };
  
  function handleMenuClick() {
    setShowMenu(!showMenu);
  }
  return (
    <header css={headerCss}>
      <nav css={navCss}>
        <BrandCss show={showMenu}>
          <Link href="/">
            <a href="#">INFANTIC</a>
          </Link>
        </BrandCss>
        <Menu onClick={handleClick} selectedKeys={[menuState]} mode="horizontal" css={antMenuStyles}>
          <Menu.Item key="prologue" >
            <Link href="/prologo">
              <a href="#">Prólogo</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="title-2" >
            Título 2
          </Menu.Item>
          <SubMenu  title="Capítulos">
            <Menu.ItemGroup>
              <Menu.Item key="chapther:1">
                <Link href="/chapter1">
                  <a href="#">Capítulo 1</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="chapther:2">
                <Link href="/chapter2">
                  <a href="#">Capítulo 2</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="chapther:3">
                <Link href="/chapter3">
                  <a href="#">Capítulo 3</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="chapther:4">
                <Link href="/chapter4">
                  <a href="#">Capítulo 4</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="chapther:5">
                <Link href="/prologo">
                  <a href="#">Capítulo 5</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="chapther:6">
                <Link href="/chapter6">
                  <a href="#">Capítulo 6</a>
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          {/* <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item> */}
        </Menu>

        <div css={mobileContainerCss} onClick={handleMenuClick}>
          {!showMenu ? <Hamburguer /> : <Close />}
        </div>
        <MenuCss show={showMenu}>
          <Link href="/prologo">
            <a href="#">Prólogo</a>
          </Link>
          <Link href="/chapter1">
            <a href="#">Capítulo 1</a>
          </Link>
          <Link href="/chapter2">
            <a href="#">Capítulo 2</a>
          </Link>
          <Link href="/chapter3">
            <a href="#">Capítulo 3</a>
          </Link>
          <Link href="/chapter4">
            <a href="#">Capítulo 4</a>
          </Link>
        </MenuCss>
      </nav>
    </header>
  )
}

export default Header;