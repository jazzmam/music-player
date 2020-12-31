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
let songIndex = 1;

// Initially load song details into DOM
laodSong(songs[songIndex]);

// Update song details
function laodSong(songTitle) {
	title.innerText = songTitle;
	audio.src = `music/${songTitle}.mp3`;

	fetch(`https://dog.ceo/api/breeds/image/random`)
	.then(res => res.json()
	.then(data => {
		const image = data.message;
		songImage.src = `${image}`;
	}));
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

function previousSong() {
	songIndex--;

	if(songIndex < 0) {
		songIndex = songs.length - 1;
	}

	laodSong(songs[songIndex]);
	playSong();
}

function nextSong() {
	songIndex++;

	if(songIndex > songs.length - 1) {
		songIndex = 0;
	}

	laodSong(songs[songIndex]);
	playSong();
}

// Progress bar update
function updateProgress(e) {
	const {duration, currentTime} = e.srcElement;
	const progressPercent = currentTime * 100 / duration;
	progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e){
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const songDuration = audio.duration;
	
	audio.currentTime = clickX * songDuration / width;
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

// Change song
previousButton.addEventListener('click', previousSong);
nextButton.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);