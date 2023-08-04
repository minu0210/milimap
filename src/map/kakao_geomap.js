var currentLatLon = {}; // 전역 변수로 현재 위치 정보를 저장할 객체

function currentLocation() {
	// HTML5의 geolocation으로 사용할 수 있는지 확인합니다
	if (navigator.geolocation) {

		// GeoLocation을 이용해서 접속 위치를 얻어옵니다
		navigator.geolocation.getCurrentPosition(function (position) {

			var lat = position.coords.latitude, // 위도
				lon = position.coords.longitude; // 경도

			var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
			var message = '<div style="padding:5px;">현위치</div>'; // 인포윈도우에 표시될 내용입니다

			// 마커와 인포윈도우를 표시합니다
			displayMarker(locPosition, message);
		});
	} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

		var locPosition = new kakao.maps.LatLng(37.4812845080678, 126.952713197762);
		var message = '현재 위치를 알 수 없어 기본 위치로 이동합니다.';

		currentLatLon['lat'] = 33.450701;
		currentLatLon['lon'] = 126.570667;

		displayMarker(locPosition, message);
	}
	return true;
}

currentLocation();

function displayMarker(locPosition, message) {
	var imageSize = new kakao.maps.Size(24, 35);
	var markerImage = new kakao.maps.MarkerImage("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", imageSize);

	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
		map: map,
		position: locPosition,
		image: markerImage,
	});

	var iwContent = message; // 인포윈도우에 표시할 내용
	var iwRemovable = true;

	// 인포윈도우를 생성합니다
	var infowindow = new kakao.maps.InfoWindow({
		content: iwContent,
		removable: iwRemovable,
	});

	// 인포윈도우를 마커 위에 표시합니다
	infowindow.open(map, marker);

	// 지도 중심 좌표를 접속 위치로 변경합니다
	map.setCenter(locPosition);
}

// 나머지 코드 (마커 생성 등)는 생략