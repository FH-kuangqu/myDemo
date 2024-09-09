
setInterval(() => {
    var user = document.querySelector("#user")
    var userlist = document.querySelectorAll("#user li")
    userlist.forEach((li) => {
        li.style.left = "-38px";
        li.style.transition = "all 1s linear";
        setTimeout(() => {
            userlist[0].remove();
            li.style.left = "0";
            li.style.transition = "none";
        }, 1000)
    });
    var i = document.createElement('li');
    var img = document.createElement('img');
    img.src = "./img/plan/user/1.jpg";
    i.appendChild(img);
    user.appendChild(i);
}, 3000);