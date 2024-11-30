let score = 0;
let lives = 3;
let timeLeft = 60;

const cities = [
    { name: "Istanbul", lat: 41.0082, lng: 28.9784 },
    { name: "Ankara", lat: 39.9208, lng: 32.8541 },
    { name: "Izmir", lat: 38.4192, lng: 27.1287 }
];

const cityNameElement = document.getElementById("city-name");
const scoreBoard = document.getElementById("score-board");
const livesDisplay = document.getElementById("lives");
const timer = document.getElementById("timer");

const map = L.map('map').setView([39.9208, 32.8541], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let currentCity = null;

// Rastgele bir şehir seç
function chooseRandomCity() {
    currentCity = cities[Math.floor(Math.random() * cities.length)];
    cityNameElement.textContent = currentCity.name;
}

// Zamanlayıcı başlat
function startTimer() {
    const countdown = setInterval(() => {
        if (timeLeft <= 0 || lives <= 0) {
            clearInterval(countdown);
            alert(`Game Over! Final Score: ${score}`);
            location.reload(); // Oyunu yenile
        } else {
            timeLeft--;
            timer.textContent = `Time Left: ${timeLeft}s`;
        }
    }, 1000);
}

// Haritada tıklamaları işle
map.on('click', (e) => {
    const distance = map.distance(
        [currentCity.lat, currentCity.lng],
        [e.latlng.lat, e.latlng.lng]
    );

    if (distance < 50000) {
        score += 10;
        alert("Correct!");
    } else {
        lives--;
        alert("Wrong!");
    }

    updateUI();
    chooseRandomCity();
});

// Skor ve hakları güncelle
function updateUI() {
    scoreBoard.textContent = `Score: ${score}`;
    livesDisplay.textContent = `Lives: ${lives}`;
}

// Oyunu başlat
chooseRandomCity();
startTimer();
