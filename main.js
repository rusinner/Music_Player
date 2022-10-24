//declare variables
const wrapper = document.querySelector('.wrapper'),
      musicImg = wrapper.querySelector('img'),
      musicName = wrapper.querySelector('.name'),
      musicArtist = wrapper.querySelector('.artist'),
      playPauseBtn = wrapper.querySelector('.play-pause'),
      prevBtn = wrapper.querySelector('#prev'),
      nextBtn = wrapper.querySelector('#next'),
      mainAudio = wrapper.querySelector('#main-audio'),
      progressArea = wrapper.querySelector('.progress-area'),
      progressBar = progressArea.querySelector('.progress-bar');

let musicIndex = Math.floor((Math.random() * allMusic.length) +1); 
isMusicPused = true; 
window.addEventListener('load', () => {
    loadMusic(musicIndex);
}) ;  

function loadMusic(indexNum){
    musicName.innerText = allMusic[indexNum -1].name;
    musicArtist.innerText = allMusic[indexNum -1].artist;
    musicImg.src = `./assets/${allMusic[indexNum - 1].src}.jpg`;
    mainAudio.src = `./assets/${allMusic[indexNum - 1].src}.mp3`;


}

function playMusic(){
    wrapper.classList.add('paused');
    musicImg.classList.add('rotate');
    playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    mainAudio.play();
}

function pauseMusic(){
    wrapper.classList.remove('paused');
    musicImg.classList.remove('rotate');
    playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    mainAudio.pause();
}


function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;

    loadMusic(musicIndex);
    playMusic();
}

playPauseBtn.addEventListener('click', ()=>{
   const isMusicPlay = wrapper.classList.contains('paused');
   isMusicPlay ? pauseMusic() : playMusic();
});

prevBtn.addEventListener('click',()=> {
    prevMusic();
});

nextBtn.addEventListener('click',()=> {
    nextMusic();
});
