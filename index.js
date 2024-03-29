// let progress=document.getElementById("progress");
//         let song=document.getElementById("song");
//         let ctrlIcon=document.getElementById("ctrlIcon");


//         song.onloadedmetadata = function(){
//         progress.max=song.duration;
//         progress.value=song.currentTime;
//         }

//     function playPause(){
//         if(ctrlIcon.classList.contains("fa-pause")){
//             song.pause();
//             ctrlIcon.classList.remove("fa-pause");
//             ctrlIcon.classList.add("fa-play");
//         }else{
//             song.play();
//             ctrlIcon.classList.remove("fa-play");
//             ctrlIcon.classList.add("fa-pause");
//         }
//     }
    
//     if(song.play()){
//         setInterval(()=>{
//             progress.value=song.currentTime;
//         },500);
//     }

//     progress.onchange()=function(){
//         song.play();
//         song.currentTime=progress.value;
//         ctrlIcon.classList.remove("fa-play");
//         ctrlIcon.classList.add("fa-pause");
//     }

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}

song.addEventListener("timeupdate", function () {
    progress.value = song.currentTime;
});

progress.oninput = function () {
    song.currentTime = progress.value;
};

ctrlIcon.onclick = playPause;
