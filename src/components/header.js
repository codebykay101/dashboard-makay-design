/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./../images/logo.png";
import unionico from "./../images/Union.svg";
import squareico from "./../images/Frame 30.svg";
import questionico from "./../images/question.svg";
import notification from "./../images/Vector (6).svg";
function Header() {
  return (
    <header className="header w-full">
      <div className="inner_header w-full">
        <div className="top-header flex align-middle justify-between">
          <div className="logo_side">
            <img src={logo} alt="makay-logo" width={114} height={27} />
          </div>
          <div className="right_side flex flex-row gap-[24px]">
            <div className="menu_links_main flex flex-row items-center justify-center">
                  <a href="#" className="menu_link">
                    <img src={unionico} alt="menu-ico" width={23.06} height={23.91} />
                  </a>
                  <a href="#" className="menu_link">
                    <img src={squareico} alt="menu-ico" width={23.06} height={23.91} />
                  </a>
                  <a href="#" className="menu_link">
                    <img src={questionico} alt="menu-ico" width={23.06} height={23.91} />
                  </a>
                  <a href="#" className="menu_link">
                    <img src={notification} alt="menu-ico" width={23.06} height={23.91} />
                  </a>
            </div>
            <div className="profile_icon">
                <div className="user-name-later d-flex align-middle content-center">W</div>
            </div>
          </div>
        </div>
        <div className="line" />
        <div className="bottom_header" style={{marginBottom:'-1px'}}>
            <div className="bottom_inner flex flex-row flex-wrap">
                <a href="#" className="menu_link active"> Home </a>
                <a href="#" className="menu_link"> People </a>
                <a href="#" className="menu_link"> Timeoff </a>
                <a href="#" className="menu_link"> Benefits </a>
                <a href="#" className="menu_link"> Documents  </a>
                <a href="#" className="menu_link"> Payslips </a>
                <a href="#" className="menu_link"> Performance Review </a>
                <a href="#" className="menu_link"> Discipline </a>
                <a href="#" className="menu_link"> Assets </a>
                <a href="#" className="menu_link"> Tasks </a>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
