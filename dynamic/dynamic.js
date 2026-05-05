function createcard(title,cname,views,month,duration,thumbnail) {
     
    // let viewstr= Math.floor(0+Math.random()*10000000);
    // let monthsold= Math.floor(0+Math.random()*300);
    

    // let title = ["hey this is the trail video ",
    //     "hey this is the another trail video ",
    //     "hey this is the jst for random ",
    // ];
        
    // let thumbnail=[
    //         "https://i.ytimg.com/vi/Ft4x7yDJtRc/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDWnegEhGIOI9ObxQhtiu18S-lFRw",
    //         "https://i.ytimg.com/vi/CvU-5JI0_wg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLALX8U5-lvxL3m9fnMiaIXTM_GTqA",
    //         "https://i.ytimg.com/vi/Uys3kwYCA8E/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDp1Kmg7Snq734F3XhZrVFyGNU02A",
    //         "https://i.ytimg.com/vi/-DVlT35zFdQ/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBhekT1mSzCCASaOq67KU7qPaCPcQ",

    // ];
    // let displaytitle= title[Math.floor(Math.random()*title.length)];
    // let displaythumbnail= title[Math.floor(Math.random()*thumbnail.length)];

    
    if (viewstr < 1000) {
        views = viewstr;
    }
    else if (viewstr < 1000000) {
        views = (viewstr / 1000) + 'k';
    }
    else {
        views = (viewstr / 1000000) + 'M';
    }
    if (monthsold < 12) {
        month = monthsold + 'months ago';
    }
    else {
        month = Math.floor(monthsold / 12) + 'year';
    }
    let html = ` <div class="cards">
        <div class="card-img">
             <img src="${thumbnail}" alt="">
        </div>
        <div class="card-content">

            <h1 id="title">${title}</h1>
            <div class="stats">

                <h4 id="cname">${cname}</h4>
                <h5 id="views">${views} views</h5>
                <h5 id="monthsold">${month}</h5>
                <h5 id="duration">${duration}</h5>

            </div>
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
        "https://lh3.googleusercontent.com/pGt0oteEnnEE1jgc4I1hFeM6LT6v5yT1qShk_LcwBS6oDcDFovhqmH15v77LanZqDv4bpH8=s151"
    );
    createcard(
        "this is monkey D luffy",
        "pirate king",
        560000000,
        111,
        "24:12",
        "https://i.ytimg.com/vi/nhr0igKYIMQ/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGCUgSyh_MA8=&rs=AOn4CLB86b2EGIfAi1MPkGDio5Uu9rsH6A "
    );
    createcard("this is roronoa zoro",
        "onigiri",
        190000000,
        111,
        "24:22",
        "https://i.ytimg.com/vi/Zuu6ClXRabE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDhFS17tvrvw2DuK7PCcJc_9Hp2Wg"
    );
});




// butn.addEventListener("click", () => {

//     createcard(
//         "cook",
//         "23:44",
//         );

// });
