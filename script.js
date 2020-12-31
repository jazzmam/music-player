console.log("works");

const musicContainer = document.getElementById('music-continer');
const previousButton = document.getElementById('previous');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const songImage = document.getElementById('song-image');


const songs = ['hey', 'summer', 'ukulele'];

// Keeping track of song
let songIndex = 2;

// Initially load song details into DOM
laodSong(songs[songIndex]);

// Update song details
function laodSong(songTitle) {
	title.innerText = songTitle;
	audio.src = `music/${songTitle}.mp3`;
	cover.src = `img/${songTitle}.mp3`;
}


// Event listeners
playButton.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong();
	}
});
