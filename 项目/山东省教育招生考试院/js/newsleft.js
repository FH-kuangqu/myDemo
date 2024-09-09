let newsbtn = document.querySelectorAll("#newsbtn li");
let news = document.getElementById("news");

let newsarr = ["0", "380", "760", "1140"];
let newsindex = 0;

// 修改news nav函数
function newsnavbg(index) {
    newsbtn.forEach((li) => {
      li.classList.remove("bg");
    });
  
    newsbtn[index].classList.add("bg");

    news.style.left = -newsarr[index] + "px"
  }
  
  // 鼠标悬停修改news nav
  newsbtn.forEach((li, index) => {
    li.addEventListener("mousemove", function () {
  
      newsnavbg(index);
  
    });
  });
  

  // 轮播图函数
function changenews() {
    newsindex = (newsindex + 1) % newsarr.length;
    news.style.postion = "relative";
    news.style.left = -newsarr[newsindex] + "px";
    news.style.transition = "all .3s linear 0s"

    newsnavbg(newsindex);
  
  }
  
  // 轮播图定时器
  const intervalNews = setInterval(changenews, 5000);