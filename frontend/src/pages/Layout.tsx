import { ReactNode, useEffect, useState } from "react";

import PhotoGallery from "../components/PhotoGallery";
import Loader from "../components/Loader";
import Location from "../components/Location";
import Account from "../components/Account";

import green5 from "../assets/images/green_5.jpg";
import flowerImg from "../assets/icons/flower.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoad, setIsLoad] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const isLocation = ["/invitation", "/inform"].includes(
    window.location.pathname
  )
    ? true
    : false;
  const isAccount = ["/invitation", "/inform"].includes(
    window.location.pathname
  )
    ? true
    : false;

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoad(true);
    }, 1000);

    if (isLoad) {
      const showImageTimer = setTimeout(() => {
        setShowImage(true);
      }, 500);
      return () => clearTimeout(showImageTimer);
    }
    return () => clearTimeout(loadTimer);
  }, [isLoad]);

  return (
    <>
      {!isLoad && <Loader />}
      {isLoad && (
        <div className={`layout ${showImage ? "show" : ""}`}>
          <div className="header-text">
            <img
              src={flowerImg}
              width="15%"
              style={{ animation: "fadein 3s" }}
            />
            <p>신희창</p>
            <p>김서정</p>
            <p>결혼합니다</p>
          </div>
          <div className="container">
            <img src={green5} width="100%" />
          </div>

          {children}
          {isLocation && <Location />}
          {isAccount && <Account />}
          <PhotoGallery />
        </div>
      )}
    </>
  );
};

export default Layout;
