let mylisToChangeColor = document.querySelectorAll(".colors li");
let myList = document.querySelectorAll(".list .links li")
let myAnchor = document.querySelectorAll(".list .links li a");
let mySetting = document.querySelector(".setting");
let mySpansToChangeBg = document.querySelectorAll(".change-bg span");
let myNav = document.querySelector("nav");





myAnchor.forEach((a,index) => {
  a.addEventListener("click" , (e)=>{
    myList.forEach((li,i) => {
      li.classList.remove("active");
      if (i === index) {
        li.classList.add("active")
      }
    });
  });
});



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

// let o = window.
let programBox =document.querySelector(".programs");
let myProgramsBoxes =document.querySelectorAll(".programs .container .programs-info .box");
console.log(programBox);
console.log(myProgramsBoxes);

window.onscroll = function () {
  // console.log(programBox.offsetTop);
  // console.log(window.scrollY);
  if (window.scrollY >= programBox.offsetTop-400) {
      myProgramsBoxes.forEach(box => {
          box.style.left = 0;
          
        });
      } else {
        myProgramsBoxes.forEach(box => {
        box.style.left = "-10000px";
      });
  }
}



let myImgs = document.querySelectorAll(".slider-container img");
// console.log(myImgs);
let imgsCount = myImgs.length;
// console.log(imgsCount);
let slideNumber = document.querySelector(".slider-container .slide-number");
// console.log(slideNumber);
let nextButton = document.querySelector(".next");
// console.log(nextButton);
let prevButton = document.querySelector(".prev");
// console.log(prevButton);

let myIndicators = document.querySelector(".indicators");

let currentSlide ;

if (localStorage.getItem("slide")) {
  console.log(`yes and the value is ${localStorage.getItem("slide")}`);
  currentSlide = localStorage.getItem("slide");
} else {
  console.log(`No and the value is`);
  currentSlide =1 ;
}

nextButton.onclick = nextSlide ; 
prevButton.onclick = prevSlide ; 

//create ul 
let myUl = document.createElement("ul");
myUl.id = "counting";
// console.log(myUl);
//create the LIs according to the length of the img 
for (let i = 1; i <= imgsCount; i++) {
    let myLi = document.createElement("li");
    myLi.innerHTML = i;
    //set custom attribute
    myLi.setAttribute("data-i" , i);
    // console.log(myLi);
    //append li to ul
    myUl.appendChild(myLi);
}
myIndicators.appendChild(myUl);


//get the new ul that we created and its children
let ulAfterCreate = document.querySelector("#counting");
let newLis = document.querySelectorAll("#counting li");

newLis.forEach((li) => {
    li.addEventListener("click" , ()=>{
        currentSlide = li.dataset.i;
        localStorage.setItem("slide",currentSlide)
        checkData();
    })
});
// console.log(ulAfterCreate);

//invoke check function
checkData();

let fff = setInterval(() => {
  if (currentSlide < imgsCount) {
    currentSlide++;
    localStorage.setItem("slide",currentSlide)
  } else {
    currentSlide = 0;
    currentSlide++;
  }
  checkData();
}, 5000);
//next function
function nextSlide () {
    // console.log("next");
    //مشان ما فينا نكبس شي لما منوصل لهي المرحلة لان بالكونسول بيكون عم يعطي اخطاء
    if (nextButton.classList.contains("disable")) {
        return false;
    } else {
        currentSlide++;
        localStorage.setItem("slide",currentSlide)
        checkData();
    }
};
//next function
function prevSlide () {
    // console.log("prev");
    if (prevButton.classList.contains("disable")) {
        return false;
    } else {
        currentSlide--;
        localStorage.setItem("slide",currentSlide)
        checkData();
    }
};


//check function 
function checkData () {
    slideNumber.innerHTML = `Image# ${currentSlide} of ${imgsCount}`;
    
    //remove active class from all imgs and li
    newLis.forEach(li => {
      li.classList.remove("active");
    })
    myImgs.forEach(img => {
      img.classList.remove("active");
    })
    
    //set active class on img with index currentSlide - 1 
    myImgs[currentSlide - 1 ].classList.add("active");
    //set active to li element that match the img with active class
    ulAfterCreate.children[currentSlide - 1 ].classList.add("active");
    
    //check if the slide is the first one or last one to add disable class to previous or next button
    if (currentSlide == 1) {
        prevButton.classList.add("disable");
    } else {
        prevButton.classList.remove("disable");
    }
    if (currentSlide == imgsCount) {
        nextButton.classList.add("disable");
    } else {
        nextButton.classList.remove("disable");
    }
  }



