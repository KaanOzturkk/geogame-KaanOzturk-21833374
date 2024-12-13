https://kaanozturkk.github.io/geogame-KaanOzturk-21833374/


Overview:
The project, GeoGame, is a map-based interactive game where the user aims to locate a target city on the map. It employs Leaflet.js to render the map and provides dynamic gameplay elements, such as scoring, lives, and a timer.

Structure:
1.	HTML File:
o	Title: GeoGame.
o	Utilizes Leaflet.js, a robust library for creating interactive web maps.
o	Main sections:
	Header: Displays the game title.
	Main:
	Includes an information panel that displays the target city, score, remaining lives, and a countdown timer.
	The map is rendered in a <div id="map">.
	Footer: Contains copyright information.
2.	External Resources:
o	A styles.css file is used for layout and design.
o	The game logic and interactivity are handled by the script.js file, which presumably includes city selection, map interactions, and scoring mechanics.
________________________________________
Technologies Used:
•	Leaflet.js: A powerful JavaScript library for interactive maps. The script is imported from https://unpkg.com/leaflet@1.9.4/dist/leaflet.js.
•	HTML5 and CSS3: For game structure and styling.
•	JavaScript: To implement game mechanics and handle user interactions.
________________________________________
Game Mechanics:
•	The user is tasked with finding a specific target city on the map.
•	Scoring System: Successful guesses increase the score.
•	Lives System: Incorrect guesses decrease the player's remaining lives.
•	Time Limit: The player has 60 seconds to find the target city.

