
let node_1 = 0;
let node_2 = 60;
let node_3 = 120;
let node_4 = 180;
let node_5 = 240;
let node_6 = 300;
var music_1 = false
var music_2 = false
var music_3 = false
var music_4 = false
var music_5 = false
var music_6 = false
var music_7 = false
var music_8 = false
var music_9 = false
var music_10 = false
var music_11 = false
var music_12 = false
var music_13 = false
var music_14 = false
var music_15 = false
var music_16 = false
var track_1 = document.getElementById("track_1")
var track_2 = document.getElementById("track_2")
var track_3 = document.getElementById("track_3")
var track_4 = document.getElementById("track_4")
var track_5 = document.getElementById("track_5")
var track_6 = document.getElementById("track_6")
var track_7 = document.getElementById("track_7")
var track_8 = document.getElementById("track_8")
var track_9 = document.getElementById("track_9")
var track_10 = document.getElementById("track_10")
var track_11 = document.getElementById("track_11")
var track_12 = document.getElementById("track_12")
var track_13 = document.getElementById("track_13")
var track_14 = document.getElementById("track_14")
var track_15 = document.getElementById("track_15")
var track_16 = document.getElementById("track_16")
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
let m1 = 0;
function showtext() {
    if (m1 === 0) {
        m1 = 1;
    }
    if (m1 === 1) {
        m1 = 0;
    }
    return(m1)
}
console.log(m1)
function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();1
    console.log(music_2)
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0.1;
}

// I dont care
function musicbutton_1() {
    music_1 = music_1 === false;
    if (music_1 === true) {
        document.getElementById("track_1").style.backgroundColor = "#a30547"
    }
    else {
        document.getElementById("track_1").style.backgroundColor = "#F94892"
    }
}
function musicbutton_2() {
    music_2 = music_2 === false;
    if (music_2 === true) {
        document.getElementById("track_2").style.backgroundColor = "#a30547"
    }
    else {
        document.getElementById("track_2").style.backgroundColor = "#F94892"
    }
}
function musicbutton_3() {
    music_3 = music_3 === false;
    if (music_3 === true) {
        document.getElementById("track_3").style.backgroundColor = "#a30547"
    }
    else {
        document.getElementById("track_3").style.backgroundColor = "#F94892"
    }
}
function musicbutton_4() {
    music_4 = music_4 === false;
    if (music_4 === true) {
        document.getElementById("track_4").style.backgroundColor = "#a30547"
    }
    else {
        document.getElementById("track_4").style.backgroundColor = "#F94892"
    }
}
function musicbutton_5() {
    music_5 = music_5 === false;
    if (music_5 === true) {
        document.getElementById("track_5").style.backgroundColor = "#a33600"
    }
    else {
        document.getElementById("track_5").style.backgroundColor = "#FF7F3F"
    }
}
function musicbutton_6() {
    music_6 = music_6 === false;
    if (music_6 === true) {
        document.getElementById("track_6").style.backgroundColor = "#a33600"
    }
    else {
        document.getElementById("track_6").style.backgroundColor = "#FF7F3F"
    }
}
function musicbutton_7() {
    music_7 = music_7 === false;
    if (music_7 === true) {
        document.getElementById("track_7").style.backgroundColor = "#a33600"
    }
    else {
        document.getElementById("track_7").style.backgroundColor = "#FF7F3F"
    }
}
function musicbutton_8() {
    music_8 = music_8 === false;
    if (music_8 === true) {
        document.getElementById("track_8").style.backgroundColor = "#a33600"
    }
    else {
        document.getElementById("track_8").style.backgroundColor = "#FF7F3F"
    }
}
function musicbutton_9() {
    music_9 = music_9 === false;
    if (music_9 === true) {
        document.getElementById("track_9").style.backgroundColor = "#695d02"
    }
    else {
        document.getElementById("track_9").style.backgroundColor = "#FBDF07"
    }
}
function musicbutton_10() {
    music_10 = music_10 === false;
    if (music_10 === true) {
        document.getElementById("track_10").style.backgroundColor = "#695d02"
    }
    else {
        document.getElementById("track_10").style.backgroundColor = "#FBDF07"
    }
}
function musicbutton_11() {
    music_11 = music_11 === false;
    if (music_11 === true) {
        document.getElementById("track_11").style.backgroundColor = "#695d02"
    }
    else {
        document.getElementById("track_11").style.backgroundColor = "#FBDF07"
    }
}
function musicbutton_12() {
    music_12 = music_12 === false;
    if (music_12 === true) {
        document.getElementById("track_12").style.backgroundColor = "#695d02"
    }
    else {
        document.getElementById("track_12").style.backgroundColor = "#FBDF07"
    }
}
function musicbutton_13() {
    music_13 = music_13 === false;
    if (music_13 === true) {
        document.getElementById("track_13").style.backgroundColor = "#048ce7"
    }
    else {
        document.getElementById("track_13").style.backgroundColor = "#89CFFD"
    }
}
function musicbutton_14() {
    music_14 = music_14 === false;
    if (music_14 === true) {
        document.getElementById("track_14").style.backgroundColor = "#048ce7"
    }
    else {
        document.getElementById("track_14").style.backgroundColor = "#89CFFD"
    }
}
function musicbutton_15() {
    music_15 = music_15 === false;
    if (music_15 === true) {
        document.getElementById("track_15").style.backgroundColor = "#048ce7"
    }
    else {
        document.getElementById("track_15").style.backgroundColor = "#89CFFD"
    }
}
function musicbutton_16() {
    music_16 = music_16 === false;
    if (music_16 === true) {
        document.getElementById("track_16").style.backgroundColor = "#048ce7"
    }
    else {
        document.getElementById("track_16").style.backgroundColor = "#89CFFD"
    }
}

setInterval(playsong, 4001)
function playsong() {
    sound_1.currentTime = 4;
    sound_2.currentTime = 4;
    sound_3.currentTime = 4;
    sound_4.currentTime = 4;
    sound_5.currentTime = 4;
    sound_6.currentTime = 4;
    sound_7.currentTime = 4;
    sound_8.currentTime = 4;
    sound_9.currentTime = 4;
    sound_10.currentTime = 4;
    sound_11.currentTime = 4;
    sound_12.currentTime = 4;
    sound_13.currentTime = 4;
    sound_14.currentTime = 4;
    sound_15.currentTime = 4;
    sound_16.currentTime = 4;
    if (music_1 === true) {
        sound_1.play();
        console.log('ok')
    }
    else {
        sound_1.pause()
        sound_1.currentTime = 0;
    }

    if (music_2 === true) {
        sound_2.play()
        console.log('ok2')
    }
    else {
        sound_2.pause()
        sound_2.currentTime = 0;
    }
    if (music_3 === true) {
        sound_3.play()
        console.log('ok3')
    }
    else {
        sound_3.pause()
        sound_3.currentTime = 0;
    }
    if (music_4 === true) {
        sound_4.play()
        console.log('ok4')
    }
    else {
        sound_4.pause()
        sound_4.currentTime = 0;
    }
    if (music_5 === true) {
        sound_5.play()
        console.log('ok5')
    }
    else {
        sound_5.pause()
        sound_5.currentTime = 0;
    }
    if (music_6 === true) {
        sound_6.play()
        console.log('ok6')
    }
    else {
        sound_6.pause()
        sound_6.currentTime = 0;
    }
    if (music_7 === true) {
        sound_7.play()
        console.log('ok7')
    }
    else {
        sound_7.pause()
        sound_7.currentTime = 0;
    }
    if (music_8 === true) {
        sound_8.play()
        console.log('ok8')
    }
    else {
        sound_8.pause()
        sound_8.currentTime = 0;
    }
    if (music_9 === true) {
        sound_9.play()
        console.log('ok9')
    }
    else {
        sound_9.pause()
        sound_9.currentTime = 0;
    }
    if (music_10 === true) {
        sound_10.play()
        console.log('ok10')
    }
    else {
        sound_10.pause()
        sound_10.currentTime = 0;
    }
    if (music_11 === true) {
        sound_11.play()
        console.log('ok11')
    }
    else {
        sound_11.pause()
        sound_11.currentTime = 0;
    }
    if (music_12 === true) {
        sound_12.play()
        console.log('ok12')
    }
    else {
        sound_12.pause()
        sound_12.currentTime = 0;
    }
    if (music_13 === true) {
        sound_13.play()
        console.log('ok13')
    }
    else {
        sound_13.pause()
        sound_13.currentTime = 0;
    }
    if (music_14 === true) {
        sound_14.play()
        console.log('ok14')
    }
    else {
        sound_14.pause()
        sound_14.currentTime = 0;
    }
    if (music_15 === true) {
        sound_15.play()
        console.log('ok15')
    }
    else {
        sound_15.pause()
        sound_15.currentTime = 0;
    }
    if (music_16 === true) {
        sound_16.play()
        console.log('ok16')
    }
    else {
        sound_16.pause()
        sound_16.currentTime = 0;
    }


}