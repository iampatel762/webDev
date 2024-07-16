let music=new Audio('RAB_KARE.mp3');
let play=document.getElementById('masterplay');
let progessBar=document.getElementById('rangef');

play.addEventListener('click',()=>{
    console.log("music is playing");
    if(music.paused || music.currentTime<=0){
        music.play();
        play.src="circle-pause-solid.svg";
    }
    else{
        music.pause();
        play.src="circle-play-solid.svg";
    }
});

music.addEventListener('timeupdate',()=>{
    let progess=parseInt((music.currentTime/music.duration)*100);
    progessBar.value=progess;
});

progessBar.addEventListener('input',updateme=()=>{
    music.currentTime=((progessBar.value * music.duration)/100);
})
