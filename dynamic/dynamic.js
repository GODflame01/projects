function createcard(title,cname,views,month,duration,thumbnail,url) {
    
    let viewstr;
    if (views < 1000) {
        viewstr = views;
    }
    else if (views < 1000000) {
        viewstr = (views / 1000) + 'k';
    }
    else {
        viewstr = (views / 1000000) + 'M';
    }
    let monthsold;
    if (month < 12) {
        monthsold = month + 'months ago';
    }
    else {
        monthsold = Math.floor(month / 12) + 'year';
    }
    let html = ` <div class="cards">
    <div class="card-img">
    <img src="${thumbnail}" alt="">
    <div class="time">${duration}</div>
    </div>
    <div class="card-content">
    <a href="${url}" class="card-link">
    
    <h1 id="title">${title}</h1>
    <div class="stats">
    
    <h4 id="cname">${cname}</h4>
    <h5 id="views">${viewstr} views</h5>
    <h5 id="monthsold">${monthsold}</h5>
    </div>
    </a>
    </div>
    </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    
}
const butn = document.querySelector("#btn");
butn.addEventListener('click', () => {
    createcard(
        "this is black leg sanji",
        "cook",
        180000000,
        55,
        "23:44",
        "https://lh3.googleusercontent.com/pGt0oteEnnEE1jgc4I1hFeM6LT6v5yT1qShk_LcwBS6oDcDFovhqmH15v77LanZqDv4bpH8=s151",
        "https://www.youtube.com/watch?v=HAckZ28ylNc"
    );
    createcard(
        "this is monkey D luffy",
        "pirate king",
        560000000,
        111,
        "24:12",
        "https://i.ytimg.com/vi/nhr0igKYIMQ/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGCUgSyh_MA8=&rs=AOn4CLB86b2EGIfAi1MPkGDio5Uu9rsH6A ",
        "https://www.youtube.com/watch?v=nhr0igKYIMQ"
    );
    createcard("this is roronoa zoro",
        "onigiri",
        190000000,
        111,
        "24:22",
        "https://i.ytimg.com/vi/Zuu6ClXRabE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDhFS17tvrvw2DuK7PCcJc_9Hp2Wg",
        "https://www.youtube.com/watch?v=Zuu6ClXRabE"
    );
});
