let color_red = 255;
let color_green = 0;
let color_blue = 0;
let state = 1;
setInterval(color_anim, 10)

function color_anim() {
    if (color_red >= 255 && color_green <= 0) {
        state = 1;
    }
    if (color_green >= 255 && color_blue <= 0) {
        state = 2;
    }
    if (color_blue >= 255 && color_red <= 0) {
        state = 3;
    }
    if (state == 1){
        color_red --;
        color_green ++;
    }
    if (state == 2){
        color_green --;
        color_blue ++;
    }
    if (state == 3){
        color_blue --;
        color_red ++;
    }
    console.log(color_red)
    document.getElementById("rgb_slider").style.backgroundImage = "linear-gradient(0deg,rgba("+color_red+", "+color_green+", "+color_blue+",100),rgba("+color_green+", "+color_blue+", "+color_red+",100))"
}

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}