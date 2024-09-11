let newstitle = document.querySelectorAll("#newstitle li");
let main1 = document.getElementById("main1");
let main2 = document.getElementById("main2");

// 修改new内容函数
function newstitlenavbg(index) {
    newstitle.forEach((li) => {
        li.classList.remove("bg");
    });
    
    newstitle[index].classList.add("bg");
    
    if (index == 0 ){
        main1.style.display = "block";
        main2.style.display = "none";
    } else {
        main1.style.display = "none";
        main2.style.display = "block";
    }
  }
  
  // 鼠标悬停修改news nav
  newstitle.forEach((li, index) => {
    li.addEventListener("mousemove", function () {

      newstitlenavbg(index);

    });
  });