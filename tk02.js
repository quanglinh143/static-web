$(document).ready(function(){
    $("#bars").click(function(){
      $(".nav-items").slideToggle("slow");
    });
  });
let data_food=[
    {
        img: 'pic/rice.jpg', //lưu link ảnh
        content: '5 VIETNAMESE RECIPES TO TRY AT HOME'//c
    },
    {
        img: 'pic/picm3.jpg', //lưu link ảnh
        content: '7 SUPER BANH MI TO TRY IN VIET NAM'//c
    },
    {
        img: 'pic/foods.jpg', //lưu link ảnh
        content: 'EATING LIKE A LOCAL IN HO CHI MINH CITY'//c
    }



]

let data_city=[
    {
        img: 'pic/cantho.jpg',
        content: 'Floating Market Can Tho'
    },
    {
        img: 'pic/landmark1.jpg',
        content: 'Observe Ho Chi Minh from above'
    },
    {
        img: 'pic/dalat.jpg',
        content:'Nice area for a lunch picnic in Da Lat'
    }
    
]

let data_beach=[
    {
        img: 'pic/beachnorth.jpg',
        content: '5 beach North Viet Nam'
    },
    {
        img: 'pic/beachcenter2.jpg',
        content: '5 beach Center Viet Nam'
    },
    {
        img: 'pic/beachsouth.jpg',
        content:'5 beach South Viet Nam'
    }
    
]

let data_nature=[
    {
        img: 'pic/landmark1.jpg',
        content: 'Observe Ho Chi Minh from above'
    },
    {
        img: 'pic/w5.jpg',
        content: '5 beach Center Viet Nam'
    },
    {
        img: 'pic/rice.jpg',
        content:'5 VIETNAMESE RECIPES TO TRY AT HOME'
    }
    
]






document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.foodsu').onclick=foodmess;
    document.querySelector('.citysu').onclick=citymess;
    document.querySelector('.beachsu').onclick=beachmess;
    document.querySelector('.naturesu').onclick=naturemess;

});

function foodmess(){
    document.querySelector('.content-a').innerHTML=`
        <div class="img-content">
            <img src="${data_food[0].img}" alt="">
            <div class="alpha">${data_food[0].content}</div>
        </div>
    `

    document.querySelector('.content-b').innerHTML=`
    <div class="img-content">
        <img src="${data_food[1].img}" alt="">
        <div class="alpha">${data_food[1].content}</div>
    </div>
    `

    document.querySelector('.content-c').innerHTML=`
    <div class="img-content">
        <img src="${data_food[2].img}" alt="">
        <div class="alpha">${data_food[2].content}</div>
    </div>
    `
}


function citymess(){
    document.querySelector('.content-a').innerHTML=`
    <div class="img-content">
        <img src="${data_city[0].img}" alt="">
        <div class="alpha">${data_city[0].content}</div>
    </div>
    `

    document.querySelector('.content-b').innerHTML=`
    <div class="img-content">
        <img src="${data_city[1].img}" alt="">
        <div class="alpha">${data_city[1].content}</div>
    </div>
    `

    document.querySelector('.content-c').innerHTML=`
    <div class="img-content">
        <img src="${data_city[2].img}" alt="">
        <div class="alpha">${data_city[2].content}</div>
    </div>
    `

}


function beachmess(){
    document.querySelector('.content-a').innerHTML=`
    <div class="img-content">
        <img src="${data_beach[0].img}" alt="">
        <div class="alpha">${data_beach[0].content}</div>
    </div>
    `

    document.querySelector('.content-b').innerHTML=`
    <div class="img-content">
        <img src="${data_beach[1].img}" alt="">
        <div class="alpha">${data_beach[1].content}</div>
    </div>
    `
    document.querySelector('.content-c').innerHTML=`
    <div class="img-content">
        <img src="${data_beach[2].img}" alt="">
        <div class="alpha">${data_beach[2].content}</div>
    </div>
    `
}

// Chuyển thể cho Nature
function naturemess(){
    document.querySelector('.content-a').innerHTML=`
    <div class="img-content">
        <img src="${data_nature[0].img}" alt="">
        <div class="alpha">${data_nature[0].content}</div>
    </div>
    `

    document.querySelector('.content-b').innerHTML=`
    <div class="img-content">
        <img src="${data_nature[1].img}" alt="">
        <div class="alpha">${data_nature[1].content}</div>
    </div>
    `

    document.querySelector('.content-c').innerHTML=`
    <div class="img-content">
        <img src="${data_nature[2].img}" alt="">
        <div class="alpha">${data_nature[2].content}</div>
    </div>
    `

}

function realtimeClock(){
    var rtC=new Date();

    var hours =rtC.getHours();
    var minutes =rtC.getMinutes();
    var seconds =rtC.getSeconds();


    var amPm =(hours< 12)? "AM" :"PM";
    
    hours=(hours>12)?hours-12 : hours;

    hours=("0"+hours).slice(-2);
    minutes=("0"+minutes).slice(-2);
    seconds=("0"+seconds).slice(-2);
    document.querySelector('#oclock').innerHTML=hours+ ":"+ minutes +":"+ seconds + " "+ amPm;
    
    var t=setTimeout(realtimeClock,1000);
}