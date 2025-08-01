import React from "react";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../img/logo.png";

function Footer() {
  return (
    <footer className="bg-[#FFC107] py-[30px]">
      <div className="w-[90%] mx-auto">
        <div className="w-full flex items-start justify-between gap-[10px] flex-wrap max-[1030px]:justify-center">
          {/* Logo */}
          <div className="flex items-start gap-[10px]">
            <img
              src={logo}
              alt=""
              className="w-[70px] max-[1320px]:w-[50px] max-[1070px]:w-[40px] max-[660px]:w-[30px]"
            />
            <h1
              className="font-[Arial] font-bold pb-[20px] text-[40px] max-[1320px]:text-[33px] max-[1070px]:text-[25px] max-[660px]:text-[20px]"
            >
              Time School
            </h1>
          </div>

          {/* Mini General */}
          <div className="flex items-start justify-between gap-[20px] flex-wrap max-[500px]:justify-start">
            {/* Pages */}
            <div className="flex flex-col gap-[10px] items-start">
              <h1 className="font-bold text-[32px] max-[1320px]:text-[25px] max-[1070px]:text-[20px] max-[660px]:text-[15px]">
                Sahifalar
              </h1>
              <Link to="/">
                <h3 className="text-[24px] cursor-pointer max-[1320px]:text-[20px] max-[1070px]:text-[16px] max-[660px]:text-[13px]">
                  Bosh sahifa
                </h3>
              </Link>
              <Link to="/courses">
                <h3 className="text-[24px] cursor-pointer max-[1320px]:text-[20px] max-[1070px]:text-[16px] max-[660px]:text-[13px]">
                  Kurslar
                </h3>
              </Link>
              <Link to="/natijalar">
                <h3 className="text-[24px] cursor-pointer max-[1320px]:text-[20px] max-[1070px]:text-[16px] max-[660px]:text-[13px]">
                  Natijalar
                </h3>
              </Link>
              <Link to="/royxatdan-otish">
                <h3 className="text-[24px] cursor-pointer max-[1320px]:text-[20px] max-[1070px]:text-[16px] max-[660px]:text-[13px]">
                  Ro'yhatdan o'tish
                </h3>
              </Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-[10px] items-start">
              <h1 className="font-bold text-[32px] max-[1320px]:text-[25px] max-[1070px]:text-[20px] max-[660px]:text-[15px]">
                Biz bilan bog'laning
              </h1>
              <button
                onClick={() => (window.location.href = 'tel:+998952004422')}
                className="bg-transparent py-[10px] px-[20px] text-[15px] font-bold border-[2px] border-black rounded-[5px] transition-all duration-100 hover:bg-black hover:text-[#FFC107] max-[1300px]:text-[13px] max-[1300px]:px-[10px] max-[1300px]:py-[5px] max-[1070px]:text-[10px] max-[660px]:text-[10px]"
              >
                +998 95 200 44 22
              </button>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-[10px] items-start">
              <h1 className="font-bold text-[32px] max-[1320px]:text-[25px] max-[1070px]:text-[20px] max-[660px]:text-[15px]">
                Ijtimoiy tarmoqlarimiz
              </h1>
              <div className="flex items-center gap-[10px]">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[40px] max-[1320px]:text-[25px] max-[1070px]:text-[20px] max-[660px]:text-[15px]" />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane className="text-[40px] max-[1320px]:text-[25px] max-[1070px]:text-[20px] max-[660px]:text-[15px]" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-[40px] max-[1320px]:text-[25px] max-[1070px]:text-[20px] max-[660px]:text-[15px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
