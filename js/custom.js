let arrOfObj = [
    {
        img : "images/trending-01.jpg" ,
        p:"action",
        h3:"Assian Creed"
    },
    {
        img : "images/trending-02.jpg" ,
        p:"Drama",
        h3:"eurobian Creed"
    },
    {
        img : "images/trending-03.jpg" ,
        p:"war",
        h3:"african Creed"
    },
    {
        img : "images/trending-04.jpg" ,
        p:"politics",
        h3:"American Creed"
    }

]

let game1 =document.querySelector(".game1");
let p1=document.querySelector(".game1 p");
let game1H3=document.querySelector(".game1 h3")
let game1Img=document.querySelector(".game1 img")

p1.innerHTML = arrOfObj[0].p;
game1Img.setAttribute("src",arrOfObj[0].img)
game1H3.innerHTML = arrOfObj[0].h3;


let game2 =document.querySelector(".game2");
let p2=document.querySelector(".game2 p")
let game2H3=document.querySelector(".game2 h3")
let game2Img=document.querySelector(".game2 img")

p2.innerHTML = arrOfObj[1].p;
game2Img.setAttribute("src",arrOfObj[1].img)
game2H3.innerHTML = arrOfObj[1].h3;


let game3 =document.querySelector(".game3");
let p3=document.querySelector(".game3 p")
let game3H3=document.querySelector(".game3 h3")
let game3Img=document.querySelector(".game3 img")

p3.innerHTML = arrOfObj[2].p;
game3Img.setAttribute("src",arrOfObj[2].img)
game3H3.innerHTML = arrOfObj[2].h3;


let game4 =document.querySelector(".game4");
let p4=document.querySelector(".game4 p")
let game4H3=document.querySelector(".game4 h3")
let game4Img=document.querySelector(".game4 img")

p4.innerHTML = arrOfObj[3].p;
game4Img.setAttribute("src",arrOfObj[3].img)
game4H3.innerHTML = arrOfObj[3].h3;



let topGames = [
    {
        imgT : "images/top-game-01.jpg",
        pT : "Adventure",
        hT: "Assian Creed",
    },
    {
        imgT : "images/top-game-02.jpg",
        pT : "War",
        hT: "Assian Creed",
    },
    {
        imgT : "images/top-game-03.jpg",
        pT : "politics",
        hT: "Assian Creed",
    },
    {
        imgT : "images/top-game-04.jpg",
        pT : "Drama",
        hT: "Assian Creed",
    },  
    {
        imgT : "images/top-game-05.jpg",
        pT : "Monsters",
        hT: "Assian Creed",
    }
]

let Top1 =document.getElementById("1")
let TopImg1 = document.querySelector(".img1")
let topP1 =document.querySelector(".p1")

topP1.innerHTML = topGames[0].pT;
TopImg1.setAttribute("src",topGames[0].imgT);


let Top2 =document.getElementById("2");
let TopImg2 = document.querySelector(" .img2")
let topP2 =document.querySelector(".p2")

topP2.innerHTML = topGames[1].pT;
TopImg2.setAttribute("src",topGames[1].imgT);

let Top3 =document.getElementById("3");
let TopImg3 = document.querySelector(".img3")
let topP3 =document.querySelector(".p3")

topP3.innerHTML = topGames[2].pT;
TopImg3.setAttribute("src",topGames[2].imgT);

let Top4 =document.getElementById("4");
let TopImg4 = document.querySelector(".img4")
let topP4 =document.querySelector(".p4")

topP4.innerHTML = topGames[3].pT;
TopImg4.setAttribute("src",topGames[3].imgT);

let Top5 =document.getElementById("5");
let TopImg5 = document.querySelector(".img5")
let topP5 =document.querySelector(".p5")

topP5.innerHTML = topGames[4].pT;
TopImg5.setAttribute("src",topGames[4].imgT);



