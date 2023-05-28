console.log("Welcome to spotify");
let index = 1;
let audioElement = new Audio('3.mp3');
let play = document.getElementById('play');
let myprogressbar = document.getElementById('myprogressbar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {filePath: "1.mp3", coverPath: "1.jpg"},
    {filePath: "2.mp3", coverPath: "2.jpg"},
    {filePath: "3.mp3", coverPath: "3.jpg"},
    {filePath: "4.mp3", coverPath: "4.jpg"},
    {filePath: "5.mp3", coverPath: "5.jpg"},
    {filePath: "6.mp3", coverPath: "6.jpg"},
    {filePath: "7.mp3", coverPath: "7.jpg"},
    {filePath: "8.mp3", coverPath: "8.jpg"},
    {filePath: "9.mp3", coverPath: "9.jpg"},
    {filePath: "10.mp3", coverPath: "10.jpg"},
]
play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{ 
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(index>=10){
        index = 1;
        
    }
    else{
        index += 1;
    }
        audioElement.src=`${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=1){
        index = 1;
    }
    else{
        index -= 1;
    }
    audioElement.src=`${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
})