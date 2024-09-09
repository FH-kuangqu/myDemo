
var preControl = document.querySelector('.preControl');
var nextControl = document.querySelector('.nextControl');
var pre = document.querySelector('.pre');
var cur = document.querySelector('.cur');
var next = document.querySelector('.next');
var preImg = document.querySelector('.pre img');
var curImg = document.querySelector('.cur img');
var nextImg = document.querySelector('.next img');


var arr = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png"
]

var index = 0;

// 获取下标
function getPreIndex() {
    return index == 0 ? arr.length - 1 : index - 1;
}
function getNextIndex() {
    return index == arr.length - 1 ? 0 : index + 1;
}


// 切换数据
function change() {
    var preIndex = getPreIndex();
    var nextIndex = getNextIndex();

    preImg.src = arr[preIndex];
    curImg.src = arr[index];
    nextImg.src = arr[nextIndex];
    preImg.style.transform = "translateX(-50%)";
    nextImg.style.transform = "translateX(50%)";
}

// 切换函数
var lock = true;

function getNextImg() {
    if (!lock) return;
    lock = false;
    next.style.transition = "all 1s";
    next.style.width = "100%";
    nextImg.style.transition = "all 1s";
    nextImg.style.transform = "translateX(0)";

    clearTimeout(nextTimer);
    var nextTimer = setTimeout(function () {
        next.style.transition = "none";
        next.style.width = "0";
        nextImg.style.transition = "none";
        index == arr.length - 1 ? index = 0 : index++;
        change();
        lock = true;
    }, 1000)

}
function getPreImg() {
    if (!lock) return;
    lock = false;
    pre.style.transition = "all 1s";
    pre.style.width = "100%";
    preImg.style.transition = "all 1s";
    preImg.style.transform = "translateX(0)";

    clearTimeout(preTimer);
    var preTimer = setTimeout(function () {
        pre.style.transition = "none";
        pre.style.width = "0";
        preImg.style.transition = "none";
        index == 0 ? index = arr.length - 1 : index--;
        change();
        lock = true;
    }, 1000)
}

var timer = setInterval(function () {
    getNextImg();
}, 5000)

// 点击事件
nextControl.onclick = function () {
    getNextImg();
    clearInterval(timer);
    timer = setInterval(function () {
        getNextImg();
    }, 5000)
}
preControl.onclick = function () {
    getPreImg();
    clearInterval(timer);
    timer = setInterval(function () {
        getNextImg();
    }, 5000)
}