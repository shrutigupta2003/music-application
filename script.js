console.log("Welcome to Spotify");

//initialize the variables
let songIndex=0;
let audioElement= new Audio('song/1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgessBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName: "SONG 1", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "SONG 2", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "SONG 3", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "SONG 4", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "SONG 5", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "SONG 6", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "SONG 7", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "SONG 8", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "SONG 9", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "SONG 10", filePath: "song/1.mp3", coverPath:"covers/1.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioelement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgessBar.value= progress;
})

myProgessBar.addEventListener('change', ()=>{
    audioElement.currentTime= (myProgessBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `song/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioElement.src= `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=9){
        songIndex=0;
    }
    else{
    songIndex-=1;
    }
    audioElement.src= `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})