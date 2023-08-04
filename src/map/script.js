const divisions = [
  {
    title: '1사단',
    latlng: new kakao.maps.LatLng(37.8667237706048, 126.81644491571821),
  },
  { title: '3사단', latlng: new kakao.maps.LatLng(38.2004119, 127.423857) },
  // Add more division data as needed
];

const trainings = [
  { title: '해병9여단', latlng: new kakao.maps.LatLng(33.2303972, 126.262397) },
  {
    title: '해군 기초군사학교',
    latlng: new kakao.maps.LatLng(35.1472139, 128.684309),
  },
  // Add more training data as needed
];

const judgments = [
  {
    title: '서울병역판정검사장',
    latlng: new kakao.maps.LatLng(/* Latitude , /* Longitude */),
  },
  {
    title: '대구·경북지방병무청',
    latlng: new kakao.maps.LatLng(35.8772064, 128.734582),
  },
  // Add more judgment data as needed
];

// Code to create and show the map and markers
// ...

// Function to show markers of a specific category
function showMarkers(markers) {
  hideAllMarkers();
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

const division = document.querySelector('.sadan');
const training = document.querySelector('.gnsfusth');
const judgement = document.querySelector('.tlsrja');

// Event listeners for navigation buttons
document.querySelector('.division').addEventListener('click', function (e) {
  division.style.display = 'block';
  e.preventDefault();
  showMarkers(markersDivision);
});

document.querySelector('.training').addEventListener('click', function (e) {
  e.preventDefault();
  showMarkers(markersTraining);
});

document.querySelector('.judgment').addEventListener('click', function (e) {
  e.preventDefault();
  showMarkers(markersJudgment);
});

// Function to add buttons dynamically
function addButtons(data, containerId) {
  const container = document.getElementById(containerId);
  data.forEach((item) => {
    const button = document.createElement('button');
    button.innerText = item.title;
    button.onclick = function () {
      moveToLocation(item.latlng);
    };
    container.appendChild(button);
  });
}

// Add buttons for divisions, trainings, and judgments
addButtons(divisions, 'divisionsButtons');
addButtons(trainings, 'trainingsButtons');
addButtons(judgments, 'judgmentsButtons');
