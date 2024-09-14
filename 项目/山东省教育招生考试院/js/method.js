var banner = {
    //图片切换
    img: index => {
        doms.banner.forEach(li => {
            li.classList.remove("on");
        });
        doms.banner[index].classList.add("on");
    },
    //指示器切换
    indicator: index => {
        doms.bannerBtn.forEach(li => {
            li.style.backgroundColor = "#fff";
        });
        doms.bannerBtn[index].style.backgroundColor = "#2c80de";
    },
}

var newsLeft = {
    //内容切换
    news: index => {
        doms.news.style.left = -doms.locations[index] + "px";
    },
    //指示器切换
    indicator: index => {
        doms.newsBtn.forEach(li => {
            li.classList.remove("bg");
        });
        doms.newsBtn[index].classList.add("bg");
    }
}

var newsRight = {
    //内容切换
    main: index => {
        if (index == 0) {
            doms.main1.style.display = "block";
            doms.main2.style.display = "none";
        } else {
            doms.main1.style.display = "none";
            doms.main2.style.display = "block";
        }
    },
    //指示器切换
    title: index => {
        doms.newsTitle.forEach(li => {
            li.classList.remove("bg");
        });
        doms.newsTitle[index].classList.add("bg");
    }
}

//pic 轮播
function changePic(){
    if(doms.picIndex >= 1){
        doms.pic.style.top = -doms.pics[doms.picIndex] + "px";
        doms.pic.style.transition = "all .3s";
    }
    if(doms.picIndex == 5){
        setTimeout(() => {
            doms.picIndex = 1;
            doms.pic.style.top = -doms.pics[doms.picIndex] + "px";
            doms.pic.style.transition = "none";
        }, 300);
    }
    doms.picIndex++;
}