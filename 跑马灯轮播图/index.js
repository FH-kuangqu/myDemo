var doms = {
    img: document.querySelector(".img"),
    list: document.querySelector(".list"),
    root: document.documentElement,
    location: 960,
    index: 0,
    url: [
        "./img/1.png",
        "./img/2.png",
        "./img/3.png",
        "./img/4.png",
    ],
};


//内容初始化
function init() {
    let Img = {
        createImg: i => {
            let li = document.createElement("li");
            let img = document.createElement("img");
            img.src = doms.url[i];
            img.style.width = "100%";
            li.appendChild(img);
            doms.img.appendChild(li);
        },
        initImg: () => {
            for (let i in doms.url) {
                Img.createImg(i);
            }
            Img.createImg(0);
            doms.root.style.setProperty("--imgSumWidth", (doms.url.length + 1) * doms.location + "px");
            doms.root.style.setProperty("--imgWidth", doms.location + "px");
        },
    };

    let list = {
        createList: i => {
            let li = document.createElement("li");
            doms.list.appendChild(li);
            if (i == 0) {
                li.className = "active";
            }
        },
        initList: () => {
            for (let i in doms.url) {
                list.createList(i);
            }
        }
    };
    Img.initImg();
    list.initList();
}
init()


//图片切换
function change(i) {
    if (i == -1) {
        doms.img.style.transition = "all 0.5s";
        doms.img.style.transform = `translateX(${-doms.location * doms.url.length}px)`;
        setTimeout(() => {
            doms.img.style.transition = "none";
            doms.img.style.transform = `translateX(0)`;
        }, 500);
        return;
    }
    doms.img.style.transition = "all 0.5s";
    doms.img.style.transform = `translateX(${-doms.location * i}px)`;
}


// tab 切换
var li = doms.list.querySelectorAll("li");
function tab(i) {
    for (let j in li) {
        li[j].className = "";
    };
    change(i);
    if (i == -1) i = 0;
    li[i].className = "active";
};


// 事件
for (let i in li) {
    li[i].onclick = function () {
        if (timer) clearInterval(timer);
        tab(i);
        doms.index = i;
        timer = setInterval(() => {
            doms.index == li.length - 1 ? doms.index = -1 : doms.index++;
            tab(doms.index);
        }, 3000);
    }
}

// 定时轮播
var timer = setInterval(() => {
    doms.index == li.length - 1 ? doms.index = -1 : doms.index++;
    tab(doms.index);
}, 3000);