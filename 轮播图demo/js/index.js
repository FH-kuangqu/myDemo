//数据的绑定和逻辑
const doms = {
    cur: document.querySelector('.cur'),
    next: document.querySelector('.next'),
    pre: document.querySelector('.pre'),
    curImg: document.querySelector('.cur img'),
    nextImg: document.querySelector('.next img'),
    preImg: document.querySelector('.pre img'),
    nextControl: document.querySelector('.nextControl'),
    preControl: document.querySelector('.preControl'),
    arr: [
        "/images/1.png",
        "/images/2.png",
        "/images/3.png",
        "/images/4.png"
    ],
    index: 0,
    nextIndex: () => {
        return doms.index == doms.arr.length - 1 ? 0 : doms.index + 1;
    },
    preIndex: () => {
        return doms.index == 0 ? doms.arr.length - 1 : doms.index - 1;
    },
};

// 切换逻辑
const change = {
    lock: true,

    /**
     * 切换图片显示状态
     * 
     * 此函数负责切换图片的显示状态，包括当前图片、下一张图片和上一张图片
     * 它更新了图片源，调整了图片的位置和样式，以准备展示下一张或上一张图片
     */
    changeImg: () => {
        doms.curImg.src = doms.arr[doms.index];

        doms.nextImg.src = doms.arr[doms.nextIndex()];
        doms.nextImg.style.transform = "translateX(50%)";
        doms.nextImg.style.transition = "none";
        doms.next.style.transition = "none";
        doms.next.style.width = "0";

        doms.preImg.src = doms.arr[doms.preIndex()];
        doms.preImg.style.transform = "translateX(-50%)";
        doms.preImg.style.transition = "none";
        doms.pre.style.transition = "none";
        doms.pre.style.width = "0";
    },

    /**
     * 切换到下一张图片
     */
    nextImg: () => {
        if (!change.lock) return;
        change.lock = false;
        doms.next.style.transition = "all 1s";
        doms.next.style.width = "100%";
        doms.nextImg.style.transition = "all 1s";
        doms.nextImg.style.transform = "translateX(0)";

        if (timer) clearTimeout(timer);
        var timer = setTimeout(() => {
            doms.index = doms.nextIndex();
            change.changeImg();
            change.lock = true;
        }, 1000);
    },

    /**
     * 切换到上一张图片
     */
    preImg: () => {
        if (!change.lock) return;
        change.lock = false;
        doms.pre.style.transition = "all 1s";
        doms.pre.style.width = "100%";
        doms.preImg.style.transition = "all 1s";
        doms.preImg.style.transform = "translateX(0)";

        if (timer) clearTimeout(timer);
        var timer =  setTimeout(() => {
            doms.index = doms.preIndex();
            change.changeImg();
            change.lock = true;
        }, 1000);
    },
}

//事件监听
doms.nextControl.onclick = () => {
    change.nextImg();
};
doms.preControl.onclick = () => {
    change.preImg();
};