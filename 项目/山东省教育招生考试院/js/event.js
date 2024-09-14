//banner 事件
doms.bannerBtn.forEach((li, index) => {
    li.onmousemove = () => {
        if(bannerTimer) clearInterval(bannerTimer);

        banner.indicator(index);
        banner.img(index);
        doms.bannerIndex = index;

        bannerTimer = setInterval(()=>{
            doms.bannerIndex == 1 ? doms.bannerIndex = 0 : doms.bannerIndex++;
            banner.img(doms.bannerIndex);
            banner.indicator(doms.bannerIndex);
        }, 5000);
    }
});

//banner 定时轮播
let bannerTimer = setInterval(()=>{
    doms.bannerIndex == 1 ? doms.bannerIndex = 0 : doms.bannerIndex++;
    banner.img(doms.bannerIndex);
    banner.indicator(doms.bannerIndex);
}, 5000);


//newsLeft 事件
doms.newsBtn.forEach((li, index) => {
    li.onmousemove = () => {
        if(newsTimer) clearInterval(newsTimer);
        newsLeft.news(index);
        newsLeft.indicator(index);
        doms.newsIndex = index;
        newsTimer = setInterval(()=>{
            doms.newsIndex == 3 ? doms.newsIndex = 0 : doms.newsIndex++;
            newsLeft.news(doms.newsIndex);
            newsLeft.indicator(doms.newsIndex);
        }, 5000);
    }
});

//newsLeft 定时轮播
let newsTimer = setInterval(()=>{
    doms.newsIndex == 3 ? doms.newsIndex = 0 : doms.newsIndex++;
    newsLeft.news(doms.newsIndex);
    newsLeft.indicator(doms.newsIndex);
}, 5000);


//newsRight 事件
doms.newsTitle.forEach((li, index) => {
    li.onmousemove = () => {
        newsRight.main(index);
        newsRight.title(index);
    }
});


//pic 定时轮播
let picTimer = setInterval(changePic, 3000);