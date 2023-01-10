console.log('Welcome to spotify');
//Initialize the variables
let audioElement = new Audio('songs/0.mp3');
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let masterName = document.getElementById("masterName");
let myProgressBar = document.getElementById("progressBar");
let gif = document.getElementById("gif");
let songinfo = Array.from(document.getElementsByClassName("songinfo"));
// let songinfo = document.getElementsByClassName('songinfo');

let songs = [
    { songName: "Temporary Pyar", filePath: "songs/0.mp3", coverPath: "covers/0cov.jpg", duration: "04:19" },
    { songName: "Kenhdi Hudi Si", filePath: "songs/1.mp3", coverPath: "covers/1cov.jpg", duration: "02:56" },
    { songName: "Brown Munde", filePath: "songs/2.mp3", coverPath: "covers/2cov.jpg", duration: "04:28" },
    { songName: "Moto song", filePath: "songs/3.mp3", coverPath: "covers/3cov.jpg", duration: "02:56" },
    { songName: "Main Agar Samne", filePath: "songs/4.mp3", coverPath: "covers/4cov.jpg", duration: "05:46" }

]


//Updating the covers and names

songinfo.forEach((element, i) => {


    element.querySelector('img').src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    element.getElementsByClassName('timeStamp')[0].innerText = songs[i].duration;

});


//Handling play/pause click
masterPlay.addEventListener('click', () => {

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;

        makePause();
    }

});
let makePause = () => {
    smallPlay.forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
//Updating Progress bar

audioElement.addEventListener('timeupdate', () => {

    // console.log(audioElement.currentTime);
    let progress = audioElement.currentTime / audioElement.duration * 100;
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {

    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;


})



//playing and pausing through small play button

let smallPlay = Array.from(document.getElementsByClassName('smallPlay'));

let makePlays = () => {
    smallPlay.forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
smallPlay.forEach((element) => {

    element.addEventListener('click', (e) => {


        makePlays();

        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
        masterName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;

        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");

    })

})

//Going to prev and next songs

document.getElementById('next').addEventListener('click', () => {

    if (songIndex >= 4)
        songIndex = 0;
    else
        songIndex += 1;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.play();
    gif.style.opacity = 1;
    masterName.innerText = songs[songIndex].songName;

    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})
document.getElementById('previous').addEventListener('click', () => {

    if (songIndex <= 0)
        songIndex = 4;
    else
        songIndex -= 1;
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.play();
    gif.style.opacity = 1;
    masterName.innerText = songs[songIndex].songName;


    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})