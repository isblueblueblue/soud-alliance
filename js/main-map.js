var mapContainer = document.getElementById("m-map"), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.54444263501081, 127.05262636014902), // 지도의 중심좌표
    level: 9, // 지도의 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마우스 드래그와 모바일 터치를 이용한 지도 이동을 막는다
map.setDraggable(false);

// 마우스 휠과 모바일 터치를 이용한 지도 확대, 축소를 막는다
map.setZoomable(false);

// 마커를 표시할 위치와 title 객체 배열입니다
var positions = [
  {
    content:
      '<div class ="label"><span class="left"></span><span class="center">Sound Alliance Studio</span><span class="right"></span></div>',
    latlng: new kakao.maps.LatLng(37.582735405365995, 127.00311340299743),
  },
  {
    content:
      '<div class ="label"><span class="left"></span><span class="center">Equipment Center</span><span class="right"></span></div>',
    latlng: new kakao.maps.LatLng(37.54444263501081, 127.05262636014902),
  },
  {
    content:
      '<div class ="label"><span class="left"></span><span class="center">Headquarter</span><span class="right"></span></div>',
    latlng: new kakao.maps.LatLng(37.48530176879906, 127.11707285596601),
  },
];

// 마커 이미지의 이미지 주소입니다
var imageSrc =
  "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

for (var i = 0; i < positions.length; i++) {
  // 마커 이미지의 이미지 크기 입니다
  var imageSize = new kakao.maps.Size(28.8, 42);

  // 마커 이미지를 생성합니다
  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    image: markerImage, // 마커 이미지
  });

  marker.setMap(map);

  // kakao.maps.event.addListener(marker, "click", function () {
  //   var position = this.getPosition();
  //   var url = "https://map.kakao.com/link/map/" + place.id;
  //   window.open(url, "_blank");
  // });

  // 마커에 표시할 인포윈도우를 생성합니다
  var customOverlay = new kakao.maps.CustomOverlay({
    map: map,
    position: positions[i].latlng, // 인포윈도우를 표시할 위치
    content: positions[i].content, // 인포윈도우에 표시할 내용
    yAnchor: 0.6,
  });

  customOverlay.setMap(map);
}
