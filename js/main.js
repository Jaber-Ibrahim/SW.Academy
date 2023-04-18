let mylisToChangeColor = document.querySelectorAll(".colors li");
let mySetting = document.querySelector(".setting");
let mySpansToChangeBg = document.querySelectorAll(".change-bg span");
let myNav = document.querySelector("nav");





// localStorage.clear();






//variables 
let setIntervalBg;
let changeBgOp;
let myImages = ["landing1.jpg","landing2.jpg","landing3.jpg","landing4.jpg","landing5.jpg"];
let randomIndex ;
// localStorage.setItem("changebg",changeBgOp);



document.querySelector(".fa-gear").onclick = function () {
  // console.log(this);
  this.classList.toggle("fa-spin");
  mySetting.classList.toggle("opened");
};

//check if there is color in local storage and set it to root if true
if (window.localStorage.getItem("color")) {
  // console.log("goooo");
  // console.log(localStorage.getItem("color"));
  document.documentElement.style.setProperty("--main-color",localStorage.getItem("color"));

  //add active class to the li ralted to the color in local storage and remove from other li
  mylisToChangeColor.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color == localStorage.getItem("color")) {
      // console.log(" dsfssssss");
      li.classList.add("active");
    }
  });
}



//check of local storage has an option to change bg or not
if (localStorage.getItem("changebg")) {

    // console.log(`yes there is a value in local storage to changeBg ${localStorage.getItem("changebg")}`);
    changeBgOp = localStorage.getItem("changebg");
    
    changeBg(changeBgOp);
    mySpansToChangeBg.forEach((span) => {
        if (span.dataset.bg == changeBgOp) {
            span.classList.add("active");
        }else {
            span.classList.remove("active");
        }
    });
} else {
    changeBgOp = "true";
    changeBg(changeBgOp);
}

//set the background to last image stored in local storage
if (localStorage.getItem("randomNumber")) {
    console.log("sdfsdfsfsdf");
    myNav.style.backgroundImage = `url("images/${myImages[localStorage.getItem("randomNumber")]}")`;
}


    //change the background or not 
mySpansToChangeBg.forEach((span) => {
    span.addEventListener("click" , (e) => {
        if (e.target.dataset.bg == "true") {
            console.log(e.target.dataset.bg);
            changeBgOp = "true";
            localStorage.setItem("changebg" , changeBgOp);
            changeBg(changeBgOp);
        }
        else {
            console.log(e.target.dataset.bg);
            changeBgOp = "false";
            localStorage.setItem("changebg" , changeBgOp);
            changeBg(changeBgOp);
        }
        mySpansToChangeBg.forEach(span => {
            span.classList.remove("active");
        });
        e.target.classList.add("active")
    })
});






mylisToChangeColor.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(li);
    // console.log(e.target);  they are the same

    //loop to remove active class from all li
    //and change the root main color
    mylisToChangeColor.forEach((li) => {
      li.classList.remove("active");
      document.documentElement.style.setProperty(
        "--main-color",
        e.target.dataset.color
      );
    });
    //save the color in local storage
    window.localStorage.setItem("color", e.target.dataset.color);
    //add active class to clicked li
    e.target.classList.add("active");
  });
});







// start change the bg image
function changeBg (changeOrNot) {
    if (changeOrNot == "true" ) {
        setIntervalBg = setInterval(() => {
            randomIndex = Math.floor(Math.random() * myImages.length);
            localStorage.setItem("randomNumber",randomIndex);
            // mySpansToChangeBg.forEach((span) =>{
            //     span.classList.remove("active");
            // })
            myNav.style.backgroundImage = `url("images/${myImages[randomIndex]}")`;
            
        
        }, 3000);
    } else {
        clearInterval(setIntervalBg);

    }
};
//end change the bg image

let barsIcon = document.querySelector(".fa-bars");
let myLinks = document.querySelector(".links");

barsIcon.onclick = function () {
  myLinks.classList.toggle("opened");
  this.classList.toggle("clicked");
};


//DONT FORGET TO un clear the local storage 


//start show a popup when click on staff photo
let myBoxPopUp = document.querySelectorAll(".staff .box .info span");
let myPop = document.querySelector(".pop");
console.log(myBoxPopUp);

myBoxPopUp.forEach((element,i) => {
    element.addEventListener("click",(e)=>{
        myPop.innerHTML += `
        <div class="pop-up">
           <div class="image-box">
           <img src="images/about${i+1}.jpg" alt="person photo">
           </div>
           <div class="info-person">
           <h1>Age : 22</h1>
            <h3>years of experience : 33</h3>
            <p>description :Lorem ipsum dolor sitrem ipsum dolor sitrem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
            </div>
            <span class="close">X</span>
       </div>`;
       document.querySelector(".close").addEventListener("click",()=>{
        myPop.innerHTML = "";
       })
    })
});
