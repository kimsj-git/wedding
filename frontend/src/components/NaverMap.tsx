import { useEffect } from "react";

const NaverMap = () => {
  useEffect(() => {
    const mapDiv = document.getElementById("map");
    const mapOptions = {
      center: new window.naver.maps.LatLng(37.484908, 127.095163),
      zoom: 14,
      draggable: false,
    };
    const map = new window.naver.maps.Map(mapDiv, mapOptions);

    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(37.484908, 127.095163),
      map: map,
    });
    console.log(marker);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f9f9f9",
        padding: "1rem 0 0 0",
        width: "100%"
      }}
    >
      <div id="map" style={{ width: "90%", height: "20rem" }} />
    </div>
  );
};

export default NaverMap;
