console.log("Welcome to Spotify by Jeet");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Downers At Dusk-1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Drowners At Dusk - [Talha Anjum]", filePath: "Downers At Dusk-1.mp3", coverPath: "Talha-anjum-c1.jpeg"},
    {songName: "Afsanay - [Talha Anjum]", filePath: "AFSANAY-4.mp3", coverPath: "Talha-anjum-c2.jpeg"},
    {songName: "Happy Hour - [Talha Anjum]", filePath: "Happy Hour-2.mp3", coverPath: "Talha-anjum-c3.jpeg"},
    {songName: "Gumaan - [Talha Anjum]", filePath: "Gumaan-10.mp3", coverPath: "Talha-anjum-c4.jpg"},
    {songName: "At The Top - [Talha Anjum]", filePath: "At The Top-5.mp3", coverPath: "Talgha-anjum-c6.jpg"},
    {songName: "Been a While - [Talha Anjum X Kr$na]", filePath: "Been a While-3.mp3", coverPath: "Talha-krshna-c5.jpg"},
    {songName: "Desperation - [Talha Anjum]", filePath: "Desperation-7.mp3", coverPath: "Talha-anjum-c7.jpg"},
    {songName: "Studio Gangster - [Talha Anjum]", filePath: "Studio Gangsters-9.mp3", coverPath: "Talha-Anjum-c8.jpg"},
    {songName: "Secrets - [Talha Anjum]", filePath: "Secrets-Talha-Anjum-8.mp3", coverPath: "Talha-anjum-c9.jpg"},
    {songName: "Two Tone - [Talha Anjum]", filePath: "TWO TONE-6.mp3", coverPath: "Talha-anjum-c10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})