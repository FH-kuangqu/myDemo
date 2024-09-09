let search = document.querySelector(".home-search");

window.addEventListener('scroll', function() {
    // 计算滚动距离
    var scrollTop = document.documentElement.scrollTop;

    if (scrollTop >= 1000) {
        search.style.display = "block";
    }

    if (scrollTop < 1000) {
        search.style.display = "none";
    }

  });