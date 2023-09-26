import { ReactNode, useEffect, useState } from "react";

import green5 from "../assets/images/green_5.jpg";
import flowerImg from "../assets/icons/flower.png";
import PhotoGallery from "../components/PhotoGallery";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const showImageTimer = setTimeout(() => {
      setShowImage(true);
    }, 800);
    return () => clearTimeout(showImageTimer);
  }, []);

  return (
    <>
      <div className={`layout ${showImage ? "show" : ""}`}>
        <div className="header-text">
          <img src={flowerImg} width="15%" style={{ animation: "fadein 3s" }} />
          <p>신희창</p>
          <p>김서정</p>
          <p>결혼합니다</p>
        </div>
        <div className="container">
          <img src={green5} width="100%" />
        </div>

        {children}
        <PhotoGallery />
      </div>
    </>
  );
};

export default Layout;
