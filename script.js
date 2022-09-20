
let node_1 = 0;
let node_2 = 60;
let node_3 = 120;
let node_4 = 180;
let node_5 = 240;
let node_6 = 300;
setInterval(color_anim, 50)

function color_anim() {
    if (node_1 < 360) {
        node_1 ++;
    }
    else {
        node_1 = 0
    }
    if (node_2 < 360) {
        node_2 ++;
    }
    else {
        node_2 = 0
    }
    if (node_3 < 360) {
        node_3 ++;
    }
    else {
        node_3 = 0
    }
    if (node_4 < 360) {
        node_4 ++;
    }
    else {
        node_4 = 0
    }
    if (node_5 < 360) {
        node_5 ++;
    }
    else {
        node_5 = 0
    }
    if (node_6 < 360) {
        node_6 ++;
    }
    else {
        node_6 = 0
    }
    document.getElementById("rgb_slider").style.backgroundImage = "linear-gradient(90deg,hsl("+node_1+",100%,50%),hsl("+node_2+",100%,50%),hsl("+node_3+",100%,50%),hsl("+node_4+",100%,50%),hsl("+node_5+",100%,50%),hsl("+node_6+",100%,50%))"
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