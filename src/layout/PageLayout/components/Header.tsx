import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/img/download.png';
import styles from '../index.module.scss';
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row d-flex justify-content-center text-center ">
          <div className="col-sm">
            <h2>Col-1</h2>
          </div>
          <div className="col-sm">
            <Image src={logo} alt="" width={180} height={150} />
          </div>
          <div className="col-sm">
            <h2>Col-2</h2>
          </div>
          {/* <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button> */}

          {/* <button type="button" className="btn btn-secondary">
          <i className="bi-search"></i>
        </button> */}
        </div>

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
  );
};

export default Header;
