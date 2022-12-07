import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/img/download.png';
import styles from '../index.module.scss';
const Footer = () => {
  return (
    <>
      <div className="bg-light p-5 ">
        <div className="row">
          <div className={`col-sm mx-auto text-center ${styles.footerAddress}`}>
            <h2>Công ty TNHH Shynh House</h2>
            <p>591 Sư Vạn Hạnh, Phường 13, Quận 10</p>
            <p>Email:cskh@shynhpremium.vn | 1900989800</p>
          </div>
          <div className="col-sm  mx-auto text-center">
            <Image src={logo} objectFit="cover" alt="" width={180} height={150} />
            <p>Mã Số Thuế :111111111 do Sở Kế Hoạch đầu tư TP.HCM cấp ngày 13/02/2015</p>
          </div>
          <div className={`col-sm text-center ${styles.footerForm}`}>
            {' '}
            <h4>Đăng Ký Nhận Thông Tin Khuyến Mãi</h4>
            <input type="text" className="form-control m-2" placeholder="HOVATEN" />
            <input type="text" className="form-control m-2" placeholder="SDT" />
            <button type="button" className="btn btn-secondary btn-lg w-100 m-2">
              Đăng Ký
            </button>
          </div>
        </div>
      </div>

      <div className="col d-flex justify-content-center pb-5">
        <div className="text-center pt-5  ">
          <h2>Shynh Premium 3 Tháng 2</h2>
          <p>326 Đường 3 Tháng 2, Phường 12, Quận 10</p>
        </div>
      </div>

      <div className={`col d-flex justify-content-center bg-dark p-2`}>
        <p className="text-white">© 2021 SHYNH PREMIUM.</p>
      </div>
    </>
  );
};

export default Footer;
