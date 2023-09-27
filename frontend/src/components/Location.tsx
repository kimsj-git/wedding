import elegantBorder from "../assets/icons/elegant_leaf.png";
import "./Location.css";
import NaverMap from "./NaverMap";

import navermapIcon from "../assets/icons/navermap_icon.png";
import kakaonaviIcon from "../assets/icons/kakaonavi_icon.png";

const Location = () => {
  const path = window.location.pathname;
  const naverMapHandler = () => {
    window.open(
      "https://map.naver.com/p/search/%ED%95%84%EA%B2%BD%EC%9E%AC/place/1117370769?c=15.00,0,0,0,dh&isCorrectAnswer=true"
    );
  };
  const kakaoMapHandler = () => {
    window.open(
      "https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C521063%2C1107069&rt1=&rt2=%ED%95%84%EA%B2%BD%EC%9E%AC&rtIds=%2C8128865&rtTypes=%2CPLACE"
    );
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: "1rem 0",
      }}
    >
      <img src={elegantBorder} width="12%" />
      {path === "/invitation" ? (
        <>
          <p style={{ fontSize: "1.5rem" }}>오시는 길</p>
          <p style={{ margin: "0", width: "65%", wordBreak: "keep-all" }}>
            필경재는 3호선 수서역 1번출구에서 일원역 방향으로 800m 직진
            수서동성당 옆 한옥건물입니다.
          </p>
          <p style={{ color: "gray" }}>서울특별시 강남구 수서동 광평로 205</p>
        </>
      ) : (
        <>
          <p style={{ margin: "1rem 0" }}>2023년 10월 21일 토요일 오후 12시</p>
          <p style={{ margin: 0}}>필경재 충효당</p>
        </>
      )}
      <NaverMap />
      <div className="mapBtnContainer">
        <div className="mapRedirectBtn" onClick={naverMapHandler}>
          <img src={navermapIcon} />
          <p>네이버 지도</p>
        </div>
        <div className="mapRedirectBtn" onClick={kakaoMapHandler}>
          <img src={kakaonaviIcon} />
          <p>카카오 네비</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
