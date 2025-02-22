const musicKeys = ["./sounds/tom-4.mp3","./sounds/tom-3.mp3","./sounds/tom-2.mp3","./sounds/tom-4.mp3","./sounds/snare.mp3","./sounds/kick-bass.mp3","./sounds/crash.mp3"];
const musicPlay = ["w","a","s","d","j","k","l"];
const musicPlayCaps = ["W","A","S","D","J","K","L"];

for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", function () {
        playSound(i);
        buttonPress(i);
    });
}

document.addEventListener("keydown",function (event){
    for(var i=0;i<musicPlay.length;i++){
        if(event.key==musicPlay[i]){
            playSound(i);
            buttonPress(i);
        }
        else if(event.key==musicPlayCaps[i]){
            playSound(i);
            buttonPress(i);
        }
    }    
})

function playSound(i){
    var audio = new Audio(musicKeys[i]);
    audio.play();
    var selector = document.getElementsByClassName("drum")[i].classList.add("pressed");
    setTimeout(function(){
        var selector = document.getElementsByClassName("drum")[i].classList.remove("pressed");
    },100)
}
