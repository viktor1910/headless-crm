import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../../public/img/download.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../index.module.scss';
import Link from 'next/link';
const Header = () => {
  const [scrollY, setScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid className={scrollY > 200 ? styles.scrolled : styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

          <Navbar.Brand href="#">
            <Image src={logo} alt="" width={130} height={100} />
          </Navbar.Brand>
          <span className={styles.headerSearchIcon}></span>
        </div>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="start"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className={styles.headerMenu}>
              <Link href="/">Trang Chủ</Link>
              <Link href="/dich-vu">Dịch Vụ</Link>
              <Link href="/khuyen-mai">Khuyến Mãi</Link>
              <Link href="/dat-lich">Đặt Lịch</Link>
              <Link href="/lien-he">Liên Hệ</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
