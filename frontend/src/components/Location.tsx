import { useEffect } from "react";
import elegantBorder from "../assets/icons/elegant_leaf.png";

const Location = () => {
  useEffect(() => {
    const mapDiv = document.getElementById("map");
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.484908, 127.095163),
      zoom: 14,
    };
    const map = new window.naver.maps.Map(mapDiv, mapOptions);

    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(37.484908, 127.095163),
      map: map,
    });
    console.log(marker)
  }, []);

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
      style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#f9f9f9", padding: "1rem 0" }}
    >
      <img src={elegantBorder} width="12%" />
      <p style={{ fontSize: "1.5rem" }}>오시는 길</p>
      <p style={{ fontSize: "1.2rem", margin: "0" }}>필경재 충효당</p>
      <p style={{ color: "gray" }}>서울특별시 강남구 수서동 광평로 205</p>
      <div id="map" style={{ width: "90%", height: "20rem" }} />
      <div style={{ display: "flex" }}>
        <div
          onClick={naverMapHandler}
          style={{ padding: "0.5rem", cursor: "pointer" }}
        >
          네이버 지도
        </div>
        <div style={{ padding: "0.5rem" }}>|</div>
        <div
          onClick={kakaoMapHandler}
          style={{ padding: "0.5rem", cursor: "pointer" }}
        >
          카카오 맵
        </div>
      </div>
    </div>
  );
};

export default Location;
