let pic = document.getElementById("piclist");

let picarr = ["0", "70", "140", "210", "280", "350"];
let picindex = 0;

//   轮播图函数
function changepic() {
  picindex = (picindex + 1) % picarr.length;

  if (picindex >= 1) {
    pic.style.top = -picarr[picindex] + "px";
    pic.style.transition = "all .3s linear 0s";

    if (picindex == 5) {
      setTimeout(function () {
        picindex = 1;
        pic.style.top = -picarr[picindex] + "px";
        pic.style.transition = "none";
      }, 300);
    }
  }
}

// 轮播图定时器
const intervalPic = setInterval(changepic, 3000);
