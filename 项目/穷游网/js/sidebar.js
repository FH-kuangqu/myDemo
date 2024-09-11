let sidebar = document.querySelector(".sidebar");


window.addEventListener('scroll', function() {
    // 计算滚动距离
    var scrollTop = document.documentElement.scrollTop;

    if (scrollTop >= 400) {
        sidebar.style.display = "block";
    }

    if (scrollTop < 400) {
        sidebar.style.display = "none";
    }

  });