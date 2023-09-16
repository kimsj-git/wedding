import { ReactNode, useEffect, useState } from "react";

import green5 from "../assets/images/green_5.jpg";
import flowerImg from "../assets/icons/flower.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="header-text">
        <img src={flowerImg} width="15%" style={{ animation: "fadein 3s" }} />
        <p>신희창</p>
        <p>김서정</p>
        <p>결혼합니다</p>
      </div>
      <img src={green5} width="100%" />
      {children}
    </>
  );
};

export default Layout;
