import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/img/download.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from '../index.module.scss';
const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />

          <Navbar.Brand href="#">
            <Image src={logo} alt="" width={130} height={100} />
          </Navbar.Brand>
          <span className={styles.headerSearchIcon}>Search</span>
        </div>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">LOGO</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className={styles.headerMenu}>
              <Nav.Link href="#trang-chu">Trang Chủ</Nav.Link>
              <Nav.Link href="#dich-vu">Dịch Vụ</Nav.Link>
              <Nav.Link href="#khuyen-mai">Khuyến Mãi</Nav.Link>
              <Nav.Link href="#dat-lich">Đặt Lịch</Nav.Link>
              <Nav.Link href="#lien-he">Liên Hệ</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
