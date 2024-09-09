let carobtn = document.querySelectorAll("#carobtn li");
let banner = document.querySelectorAll("#banner li")

let bannerindex = 0;

// 修改banner nav函数
function navbg(index) {
  carobtn.forEach((li) => {
    li.style.backgroundColor = "#fff";
  });

  carobtn[index].style.backgroundColor = "#2c80de";

  banner.forEach((li) => {
    li.classList.remove("on");
  });

  banner[index].classList.add("on");
}

// 鼠标悬停修改banner nav
carobtn.forEach((li, index) => {
  li.addEventListener("mousemove", function () {

    navbg(index);

  });
});

// 轮播图函数
function changeImage() {
  bannerindex = (bannerindex + 1) % carobtn.length;

  navbg(bannerindex);
}

// 轮播图定时器
const intervalId = setInterval(changeImage, 5000);
