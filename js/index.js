// ! element------------------------------------------------------------------------------------------------

/****************************var********************************* */

//!events----------------------------------------------------------------------------------------------------
document.querySelector("#playlingNow").addEventListener("click",function(){
    getNowPlayingApi();
})
document.querySelector("#popular").addEventListener("click",function(){
    getNowPopularApi()
})
document.querySelector("#topRated").addEventListener("click",function(){
    getNTopRatedApi()
})
document.querySelector("#trending").addEventListener("click",function(){
    getTrandingApi()
})
document.querySelector("#upcoming").addEventListener("click",function(){
    getUpComingApi();
})
document.querySelector("#contact").addEventListener("click",function(){

})
//!regex-----------------------------------------------------------------------------

let nameRegex = /^[A-Z]\w{0,20}$/; 
let emailRegex=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; 
let phoneRegex=/^01[0125][0-9]{8}$/; 
let ageRegex =/^[1-9]?[0-9]{1}$|^100$/; 
let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
 
function validation(regex,input){ 
    if(regex.test(input.value)){ 
        input.classList.add("is-valid"); 
        input.classList.remove("is-invalid"); 
        return true; 
    }else{ 
        input.classList.add("is-invalid"); 
        input.classList.remove("is-valid"); 
        return false; 
    } 
} 
 
nameInput.addEventListener("input",function(){ 
    if(validation(nameRegex,nameInput)){ 
        document.querySelector(".name-validation").classList.add("d-none") 
    } 
    else{ 
        document.querySelector(".name-validation").classList.remove("d-none") 
 
    } 
}) 
emailInput.addEventListener("input",function(){ 
    if(validation(emailRegex,emailInput)){ 
        document.querySelector(".email-validation").classList.add("d-none") 
    } 
    else{ 
        document.querySelector(".email-validation").classList.remove("d-none") 
 
    } 
}) 
phoneInput.addEventListener("input",function(){ 
    if(validation(phoneRegex,phoneInput)){ 
        document.querySelector(".phone-validation").classList.add("d-none") 
    } 
    else{ 
        document.querySelector(".phone-validation").classList.remove("d-none") 
 
    } 
}) 
ageInput.addEventListener("input",function(){ 
    if(validation(ageRegex,ageInput)){ 
        document.querySelector(".age-validation").classList.add("d-none") 
    } 
    else{ 
        document.querySelector(".age-validation").classList.remove("d-none") 
 
    } 
}) 
passInput.addEventListener("input",function(){ 
    if(validation(passRegex,passInput)){ 
        document.querySelector(".pass-validation").classList.add("d-none") 
    } 
    else{ 
        document.querySelector(".pass-validation").classList.remove("d-none") 
 
    } 
}) 
 
rePassword.addEventListener("input",function(){ 
    if(passInput.value == rePassword.value){ 
        document.querySelector(".rePass-validation").classList.add("d-none") 
    } 
    else{ 
        document.querySelector(".rePass-validation").classList.remove("d-none") 
    } 
}) 
 
 
const contactInputs = document.querySelectorAll(".contact-input"); 
const contactBtn = document.getElementById("contact-btn"); 
 
function checkInputs() { 
  let allInputsFilled = true; 
 
  contactInputs.forEach(input => { 
    if (input.value === "") { 
      allInputsFilled = false; 
    } 
  }); 
 
  contactBtn.disabled = !allInputsFilled; 
} 
 
contactInputs.forEach(contactInputs => { 
    contactInputs.addEventListener("input", checkInputs); 
});

//!Functions--------------------------------------------------------------------------------------------------
let res;
async function getNowPlayingApi() {
    res = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    res = await res.json();
    console.log(res);
    displayNowPlaying()
}


function displayNowPlaying() {

    let cartona = "";

    for (let i = 0; i < res.results.length; i++) {
        let paragraph = res.results[i].overview;
        let newParagraph=paragraph.slice(0,200);
        if(paragraph.length>200){
            newParagraph= newParagraph+"...";
        }
        else{
            newParagraph= newParagraph;
        }
        // let img_path = res.results[i].backdrop_path; 
        // let new_img_path=img_path.slice(1); 
        // console.log(new_img_path) 
        cartona += ` 
        <div class="col-lg-4  position-relative movi overflow-hidden"> 
        <div class="overflow-hidden rounded-3"> 
           <img src="https://image.tmdb.org/t/p/w500${res.results[i].backdrop_path}" class="w-100 rounded-3 movi-img" alt=""> 
        </div> 
 
        <div class="text-white  position-absolute overlay rounded-3"> 
            <h2>${res.results[i].title}</h2> 
            <p class="move-para">${res.results[i].overview}</p> 
            <p class="">Release Date : ${res.results[i].release_date}</p> 
 
             <ul class="list-unstyled d-flex  text-warning"> 
                <li><i class="fa-solid fa-star fs-4"></i></li> 
                <li><i class="fa-solid fa-star fs-4"></i></li> 
                <li><i class="fa-solid fa-star fs-4"></i></li> 
                <li><i class="fa-solid fa-star fs-4"></i></li> 
             </ul> 
 
            <div class=" rate-move d-flex justify-content-center align-items-center"> 
                <span class="">${res.results[i].vote_average}</span> 
            </div> 
 
        </div> 
    </div> 
         
        `
    }

    document.querySelector(".my-row").innerHTML = cartona;

}





//2

let resp;
async function getNowPopularApi(){
    resp = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    resp = await resp.json();
    console.log(resp.results)
    displayPopular()
}



function displayPopular(){

    let cartona = "";

    for(let i=0 ; i<resp.results.length ; i++){
        let paragraph = resp.results[i].overview;
        let newParagraph=paragraph.slice(0,200);
        if(paragraph.length>200){
            newParagraph= newParagraph+"...";
        }
        else{
            newParagraph= newParagraph;
        }
        // let img_path = res.results[i].backdrop_path;
        // let new_img_path=img_path.slice(1);
        // console.log(new_img_path)
        cartona+= `
        <div class="col-lg-4  position-relative movi overflow-hidden">
        <div class="overflow-hidden rounded-3">
        <img src="https://image.tmdb.org/t/p/w500${resp.results[i].backdrop_path}" class="w-100  rounded-3 movi-img" alt="">
        </div>

        <div class="text-white  position-absolute overlay rounded-3">
            <h3>${resp.results[i].title}</h3>
            <p >${newParagraph}</p>

            <p >Release Date : ${resp.results[i].release_date}</p>

             <ul class="list-unstyled d-flex  text-warning">
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
             </ul>

            <div class=" rate-move d-flex justify-content-center align-items-center">
                <span class="">${resp.results[i].vote_average}</span>
            </div>

        </div>
    </div>
        
        `
    }

    document.querySelector(".my-row").innerHTML=cartona;

}


//3

let respRated;
async function getNTopRatedApi(){
    respRated = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    respRated = await respRated.json();
    console.log(respRated.results)
    displayTopRated()
}



function displayTopRated(){

    let cartona = "";

    for(let i=0 ; i<respRated.results.length ; i++){
        let paragraph = respRated.results[i].overview;
        let newParagraph=paragraph.slice(0,200);
        if(paragraph.length>200){
            newParagraph= newParagraph+"...";
        }
        else{
            newParagraph= newParagraph;
        }
        // let img_path = res.results[i].backdrop_path;
        // let new_img_path=img_path.slice(1);
        // console.log(new_img_path)
        cartona+= `
        <div class="col-lg-4  position-relative movi overflow-hidden">
        <div class="overflow-hidden rounded-3">
        <img src="https://image.tmdb.org/t/p/w500${respRated.results[i].backdrop_path}" class="w-100 rounded-3 movi-img" alt="">
        </div>

        <div class="text-white  position-absolute overlay rounded-3">
            <h3>${respRated.results[i].title}</h3>
            <p >${newParagraph}</p>

            <p >Release Date : ${respRated.results[i].release_date}</p>

             <ul class="list-unstyled d-flex  text-warning">
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
             </ul>

            <div class=" rate-move d-flex justify-content-center align-items-center">
                <span class="">${respRated.results[i].vote_average}</span>
            </div>

        </div>
    </div>
        
        `
    }

    document.querySelector(".my-row").innerHTML=cartona;

}

//4


let respUp;
async function getUpComingApi(){
    respUp = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    respUp = await respUp.json();
    console.log(respUp.results)
    displayUpComing()
}



function displayUpComing(){

    let cartona = "";

    for(let i=0 ; i<respUp.results.length ; i++){
        let paragraph = respUp.results[i].overview;
        let newParagraph=paragraph.slice(0,200);
        if(paragraph.length>200){
            newParagraph= newParagraph+"...";
        }
        else{
            newParagraph= newParagraph;
        }
        // let img_path = res.results[i].backdrop_path;
        // let new_img_path=img_path.slice(1);
        // console.log(new_img_path)
        cartona+= `
        <div class="col-lg-4  position-relative movi overflow-hidden">
        <div class="overflow-hidden rounded-3">
        <img src="https://image.tmdb.org/t/p/w500${respUp.results[i].backdrop_path}" class="w-100 rounded-3 movi-img" alt="">
        </div>

        <div class="text-white  position-absolute overlay rounded-3">
            <h3>${respUp.results[i].title}</h3>
            <p >${newParagraph}</p>

            <p >Release Date : ${respUp.results[i].release_date}</p>

             <ul class="list-unstyled d-flex  text-warning">
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
             </ul>

            <div class=" rate-move d-flex justify-content-center align-items-center">
                <span class="">${respUp.results[i].vote_average}</span>
            </div>

        </div>
    </div>
        
        `
    }

    document.querySelector(".my-row").innerHTML=cartona;

}


//5


let respTrend;
async function getTrandingApi(){
    respTrend = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    respTrend = await respTrend.json();
    console.log(respTrend.results)
    displayTranding()
}



function displayTranding(){

    let cartona = "";

    for(let i=0 ; i<respTrend.results.length ; i++){
        let paragraph = respTrend.results[i].overview;
        let newParagraph=paragraph.slice(0,200);
        if(paragraph.length>200){
            newParagraph= newParagraph+"...";
        }
        else{
            newParagraph= newParagraph;
        }
       
        cartona+= `
        <div class="col-lg-4  position-relative movi overflow-hidden">
        <div class="overflow-hidden rounded-3">
        <img src="https://image.tmdb.org/t/p/w500${respTrend.results[i].backdrop_path}" class="w-100 rounded-3 movi-img" alt="">
        </div>

        <div class="text-white  position-absolute overlay rounded-3">
            <h3>${respTrend.results[i].original_name}</h3>
            <p >${newParagraph}</p>

            <p >Release Date : ${respTrend.results[i].release_date}</p>

             <ul class="list-unstyled d-flex  text-warning">
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
                <li><i class="fa-solid fa-star fs-5"></i></li>
             </ul>

            <div class=" rate-move d-flex justify-content-center align-items-center">
                <span class="">${respTrend.results[i].vote_average}</span>
            </div>

        </div>
    </div>
        
        `
    }

    document.querySelector(".my-row").innerHTML=cartona;

}







//!jQuery---------------------------------------------------------------------------------------------------------
$(".open").click(() => {
    $("nav").removeClass("nav-out")
    $("nav").addClass("nav-in")
    $(".nav-top-links").addClass("animate__fadeInDown")
    $(".nav-top-links").removeClass("animate__fadeOutUp")

    $(".close").removeClass("d-none")
    $(".open").addClass("d-none")


})


$(".close").click(() => {

    $("nav").removeClass("nav-in")
    $("nav").addClass("nav-out")
    $(".nav-top-links").removeClass("animate__fadeInDown")
    $(".nav-top-links").addClass("animate__fadeOutUp")
    $(".close").addClass("d-none")
    $(".open").removeClass("d-none")


})


$(document).ready(function () {
    $(".loadingScreen").fadeOut(1000);
});

$("#categories").click(function () {
    $(".loadingScreen").fadeOut(1000);
});

$("#area").click(function () {
    $(".loadingScreen").fadeOut(1000);
});

$("#ingredients").click(function () {
    $(".loadingScreen").fadeOut(1000);
});

$("#contact").click(function () {
    $(".loadingScreen").fadeOut(1000);
});

$("#searchName").click(function () {
    $(".loadingScreen").fadeOut(1000);
});

/******************************************************************************* */