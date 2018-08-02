/* OTHER FUNCTIONS*/
var menu = document.querySelector(".showMenu");
document.querySelector(".hamburger").addEventListener("click", function(){
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});

function showMenu () {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}




document.querySelectorAll(".hamLi").forEach(function(el,index){
    if(index>0){
        el.addEventListener("click", function() {
          if(!document.querySelector(".hamburger").classList.contains("hidden")){
            showMenu();
          }

        });

    }
  });

  document.querySelectorAll(".hamLiSub").forEach(function(el,){
      el.addEventListener("click", function(){
        el.addEventListener("click", showMenu);
      });
  });

  document.querySelector(".secondMenu").addEventListener("click", function(){
    document.querySelector(".hamLiSub").classList.toggle("hidden");
  });


  var inter1 = setInterval(function(){
    if(chairFirstSection==0){
      document.querySelector(".chairImage").style.backgroundImage="url('./images/orange_chair.png')";
      chairFirstSection=1;
    }else{
      document.querySelector(".chairImage").style.backgroundImage="url('./images/black_chair.png')";
      chairFirstSection=0;
    }
  }, 7000);

  var inter2 = setInterval(function(){
        if(chairSecondSection==0){
          document.querySelector(".transparentChair").style.backgroundImage="url('./images/box2_img.jpg')";
          document.querySelector(".transparentText").innerText="Chair MARGARITA";
          chairSecondSection=1;
        }else {
          document.querySelector(".transparentChair").style.backgroundImage="url('./images/box1_img.jpg')";
          document.querySelector(".transparentText").innerText="Chair CLAIR";
          chairSecondSection=0;
        }
  },4000);


  document.querySelectorAll(".nextPlan").forEach(function(el,index){
    el.addEventListener("click", function(){
      console.log(index);
      if(index==0){
        this.parentElement.parentElement.classList.add("hidden");
        document.querySelector(".card2").classList.remove("hidden");
      } else if (index==1){
        this.parentElement.parentElement.classList.add("hidden");
        document.querySelector(".card3").classList.remove("hidden");
      } else {
        this.parentElement.parentElement.classList.add("hidden");
        document.querySelector(".card1").classList.remove("hidden");
      }
    });
  });



  var rArrow = document.querySelector(".rigthArrow"),
      lArrow = document.querySelector(".leftArrow");


        lArrow.addEventListener("click", function(){
            if(desktopChair==0){
              document.querySelector(".chairImage").style.backgroundImage="url('./images/orange_chair.png')";
              desktopChair=1;
            }else {
              document.querySelector(".chairImage").style.backgroundImage="url('./images/black_chair.png')";
              desktopChair=0;
            }
        });

        rArrow.addEventListener("click", function(){
          if(desktopChair==0){
            document.querySelector(".chairImage").style.backgroundImage="url('./images/orange_chair.png')";
            desktopChair=1;
          }else {
            document.querySelector(".chairImage").style.backgroundImage="url('./images/black_chair.png')";
            desktopChair=0;
          }
        });



        document.querySelectorAll(".transparentChair").forEach(function (el, index) {
          if(index==0){
            el.addEventListener("mouseover",function (){
              document.querySelector(".clair p").classList.add("hidden");
            });
            el.addEventListener("mouseout", function () {
              document.querySelector(".clair p").classList.remove("hidden");
            });
          } else {
            el.addEventListener("mouseover",function (){
              document.querySelector(".margarita p").classList.add("hidden");
            });
            el.addEventListener("mouseout", function () {
              document.querySelector(".margarita p").classList.remove("hidden");
            });
          }
        });









var mqls = [
    window.matchMedia("(max-width: 690px)"),
    window.matchMedia("(min-width: 691px) and (max-width: 1049px)"),
    window.matchMedia("(min-width: 1050px)")
];


for (var i=0; i<mqls.length; i++){
    mobileFunctions(mqls[i]); // call listener function explicitly at run time
    mqls[i].addListener(mobileFunctions); // attach listener function to listen in on state changes
}


var chairFirstSection=0,
    chairSecondSection=0,
    desktopChair=0;




function mobileFunctions (mql) {
if(mqls[0].matches ){
  document.querySelector(".logo").classList.add("hidden");
  document.querySelector(".showMenu").classList.add("hidden");
  document.querySelector(".hamLiSub").classList.add("hidden");
  document.querySelector(".description p").classList.add("hidden");
  document.querySelector(".description button").classList.add("hidden");
  document.querySelector(".margarita").classList.add("hidden");
  document.querySelector(".card2").classList.add("hidden");
  document.querySelector(".card3").classList.add("hidden");
  document.querySelectorAll(".nextPlan").forEach(function (e) {
    e.classList.remove("hidden");
  });
  document.querySelector(".sendDiv img").classList.add("hidden");
  document.querySelector(".footerP").classList.add("hidden");
  document.querySelector(".logos a").classList.add("hidden");
  document.querySelector(".hamburger").classList.remove("hidden");




} else if (mqls[1].matches){
  clearInterval(inter2);
  document.querySelector(".showMenu").classList.remove("hidden");
  document.querySelector(".logo").classList.remove("hidden");
  document.querySelector(".description p").classList.remove("hidden");
  document.querySelector(".description button").classList.remove("hidden");
  document.querySelector(".margarita").classList.remove("hidden");
  document.querySelector(".card1").classList.remove("hidden");
  document.querySelector(".card2").classList.remove("hidden");
  document.querySelector(".card3").classList.add("hidden");
  document.querySelectorAll(".nextPlan").forEach(function (e) {
    e.classList.add("hidden");
  });
  document.querySelector(".sendDiv img").classList.remove("hidden");
  document.querySelector(".footerP").classList.remove("hidden");
  document.querySelector(".logos a").classList.remove("hidden");
  document.querySelector(".findInputs").classList.add("hidden");
  document.querySelector(".card3").classList.add("hidden");
  document.querySelector(".leftArrow").classList.add("hidden");
  document.querySelector(".rigthArrow").classList.add("hidden");
  document.querySelector("#thirdSection .underlinedText").classList.add("hidden");
  document.querySelector("#fourthSection .underlinedText").classList.add("hidden");

  document.querySelector(".hamburger").classList.add("hidden");



    document.querySelector(".secondMenu").addEventListener("mouseover", function(){
if(document.querySelector(".hamburger").classList.contains("hidden")) {
      document.querySelector(".hamLiSub").classList.remove("hidden");
    }
    });

    document.querySelector(".secondMenu").addEventListener("mouseout", function(){
      if(document.querySelector(".hamburger").classList.contains("hidden")) {
      document.querySelector(".hamLiSub").classList.add("hidden");
    }
    });
  




} else if (mqls[2].matches){
  var rArrow = document.querySelector(".rigthArrow"),
      lArrow = document.querySelector(".leftArrow");
  clearInterval(inter2);
  clearInterval(inter1);
  document.querySelector(".showMenu").classList.remove("hidden");
  document.querySelector(".logo").classList.remove("hidden");
  document.querySelector(".description p").classList.remove("hidden");
  document.querySelector(".description button").classList.remove("hidden");
  document.querySelector(".margarita").classList.remove("hidden");
  document.querySelector(".card1").classList.remove("hidden");
  document.querySelector(".card2").classList.remove("hidden");
  document.querySelector(".card3").classList.add("hidden");
  document.querySelectorAll(".nextPlan").forEach(function (e) {
    e.classList.add("hidden");
  });
  document.querySelector(".sendDiv img").classList.remove("hidden");
  document.querySelector(".footerP").classList.remove("hidden");
  document.querySelector(".logos a").classList.remove("hidden");
  document.querySelector(".findInputs").classList.remove("hidden");
  document.querySelector(".card3").classList.remove("hidden");
  lArrow.classList.remove("hidden");
  rArrow.classList.remove("hidden");
  document.querySelector("#thirdSection .underlinedText").classList.remove("hidden");
  document.querySelector("#fourthSection .underlinedText").classList.remove("hidden");
  document.querySelector(".hamburger").classList.add("hidden");
  if(document.querySelector(".hamburger").classList.contains("hidden")) {
    document.querySelector(".secondMenu").addEventListener("mouseover", function(){
      document.querySelector(".hamLiSub").classList.remove("hidden");
    });

    document.querySelector(".secondMenu").addEventListener("mouseout", function(){
      document.querySelector(".hamLiSub").classList.add("hidden");
    });
  }






}
}
