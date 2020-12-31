const musicContainer = document.getElementById('music-container');
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
	songImage.src = `img/${songTitle}.jpg`;
}

function playSong() {
	musicContainer.classList.add('play');
	playButton.querySelector('i.fas').classList.remove('fa-play');
	playButton.querySelector('i.fas').classList.add('fa-pause');

	audio.play();
}

function pauseSong() {
	musicContainer.classList.remove('play');
	playButton.querySelector('i.fas').classList.add('fa-play');
	playButton.querySelector('i.fas').classList.remove('fa-pause');

	audio.pause();
}

// Event listeners
playButton.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});
