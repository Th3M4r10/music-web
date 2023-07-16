
var myMusic = document.getElementById("myMusic");
var icon = document.getElementById("icon");

 icon.onclick = function(){
    if(myMusic.paused){
        myMusic.play();
        icon.src = "media\\pause.png";
    }else{
        myMusic.pause();
        icon.src = "media\\play.png";
    }
}

icon.ondblclick = function(){
    if(Music.paused){
        Music.play();
        icon.src = "media\\pause.png";
    }else{
        Music.pause();
        icon.src = "media\\play.png";
    }
}
