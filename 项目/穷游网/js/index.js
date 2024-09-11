// 图片盒子
let imgprebox = document.querySelector("#img .imgpre");
let imgcurbox = document.querySelector("#img .imgcur");
let imgnextbox = document.querySelector("#img .imgnext");

// 点击按钮
let left = document.getElementById("left");
let right = document.getElementById("right");

// banner标题轮播
let nownum = document.getElementById("nownum");
let title = document.getElementById("title");
let username = document.getElementById("username");

// 定时器
let setid;

// 轮播内容
let bannerArr = [
    {
        img: "../img/banner/banner1.jpg",
        title: "【西班牙游记攻略】我的加那利群岛7天跳岛之旅",
        username: "汉堡包包"
    },
    {
        img: "../img/banner/banner2.jpg",
        title: "【中国内地游记攻略】山野之夏，最动人心——新疆伊犁旅行攻",
        username: "KK叫阿KEN"
    },
    {
        img: "../img/banner/banner3.jpg",
        title: "穷游锦囊 | 赫尔辛基",
        username: "躺在波罗的海旁享受日不落的阳光"
    },
    {
        img: "../img/banner/banner4.jpg",
        title: "【中国内地游记攻略】从现实版纪念碑谷到梵高的金色麦田，从千年古寺到江南最后秘境",
        username: "rain_chenyu"
    }
]

let curIndex = 0;


function getpreIndex() {
    return curIndex == 0 ? bannerArr.length - 1 : curIndex - 1;
}

function getnextIndex() {
    return curIndex == bannerArr.length - 1 ? 0 : curIndex + 1;
}

function imgshow(pre, cur, next) {
    imgprebox.children[0].src = bannerArr[pre]["img"];
    imgcurbox.children[0].src = bannerArr[cur]["img"];
    imgnextbox.children[0].src = bannerArr[next]["img"];
}

function reset() {
    var preIndex = getpreIndex();
    var nextIndex = getnextIndex();
    imgshow(preIndex, curIndex, nextIndex);
}

function next() {
    imgnextbox.classList.add("reset");
    setTimeout(function () {
        curIndex = getnextIndex();
        reset();
        imgnextbox.classList.remove("reset");
    }, 500)
}

function pre() {
    imgprebox.classList.add("reset");
    setTimeout(function () {
        curIndex = getpreIndex();
        reset();
        imgprebox.classList.remove("reset");
    }, 500)
}


let num = 1;
function getnextnum() {
    return num == 4 ? 1 : num + 1;
}

function getprenum() {
    return num == 1 ? 4 : num - 1;
}

function nexttitle() {
    num = getnextnum();
    nownum.innerHTML = num;
    title.innerHTML = bannerArr[num - 1]["title"];
    username.innerHTML = bannerArr[num - 1]["username"];
}

function pretitle() {
    num = getnextnum();
    nownum.innerHTML = num;
    title.innerHTML = bannerArr[num - 1]["title"];
    username.innerHTML = bannerArr[num - 1]["username"];
}



right.addEventListener("click", function () {
    next();
    nexttitle();
    clearInterval(setid);
    setid = setInterval(function() {
        next();
        nexttitle();
    }, 5000)
})

left.addEventListener("click", function () {
    pre();
    pretitle();
    clearInterval(setid);
    setid = setInterval(function() {
        next();
        nexttitle();
    }, 5000)
})


setid = setInterval(function() {
    next();
    nexttitle();
}, 5000)