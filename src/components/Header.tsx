import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderContainer, HeaderMenu, HeaderLogo, HeaderItem, HeaderLink } from '../pages/style';
import Image from 'next/image';
import logo from '../../public/img/download.png';

const Header = () => {
  return (
    <header>
      <div className="col d-flex justify-content-center">
        <Image src={logo} alt="" width={180} height={150} />
      </div>
      <div className="container ">
        <ul className="nav justify-content-center border-bottom">
          <li className="nav-item">
            <a className="nav-link text-secondary active" aria-current="page" href="#">
              Trang Chủ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              Dịch Vụ
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              Khuyến Mãi
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              Đặt Lịch
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">
              Liên Hệ
            </a>
          </li>
        </ul>
      </div>
    </header>
    // <HeaderContainer>
    //   <HeaderLogo>
    //     <Image src={logo} alt="" />
    //   </HeaderLogo>
    //   <HeaderMenu>
    //     <HeaderItem>
    //       <HeaderLink href="/">Trang Chủ </HeaderLink>
    //     </HeaderItem>
    //     <HeaderItem>
    //       <HeaderLink href="#">Dịch Vụ</HeaderLink>
    //     </HeaderItem>
    //     <HeaderItem>
    //       <HeaderLink href="#">Khuyến Mãi</HeaderLink>
    //     </HeaderItem>
    //     <HeaderItem>
    //       <HeaderLink href="#">Đặt Lịch</HeaderLink>
    //     </HeaderItem>
    //     <HeaderItem>
    //       <HeaderLink href="#">Liên Hệ</HeaderLink>
    //     </HeaderItem>
    //   </HeaderMenu>
    // </HeaderContainer>
  );
};

export default Header;
