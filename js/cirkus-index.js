var logoImgMinWidth=64.0;
var windowMinWidth=360.0;
var logoImgMaxWidth=165.0;
var windowMaxWidth=1000; //640.0;

var logoImgMinHight=69.0;
var logoImgMaxHight=177.0;

var m=(logoImgMaxWidth-logoImgMinWidth)/(windowMaxWidth-windowMinWidth);
var b=logoImgMinWidth-m*windowMinWidth;

window.onscroll = function() {scrollFunction()};
window.addEventListener("resize", resizeFuntion);
window.addEventListener("load", loadFunction);


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("cirkusNavBar").style.opacity = 1;
    document.getElementById("logoImg").style.opacity = 0.10;
  } else {
    document.getElementById("cirkusNavBar").style.opacity = 0.60;
    document.getElementById("logoImg").style.opacity = 1;
  }
}

function resizeFuntion() {
    let width=window.innerWidth;
    if(width<windowMinWidth) {
        document.getElementById("logoImg").width=logoImgMinWidth;
        document.getElementById("logoImg").hight=logoImgMinHight;
    }
    if((windowMinWidth<=width) && (width<=windowMaxWidth)) {
        let newWidth=m*width+b;
        document.getElementById("logoImg").width=newWidth;
        document.getElementById("logoImg").hight=newWidth*logoImgMaxHight/logoImgMaxWidth;
    }
    if(width>windowMaxWidth) {
        document.getElementById("logoImg").width=logoImgMaxWidth;
        document.getElementById("logoImg").hight=logoImgMaxHight;
    }
}
function loadFunction() {
    resizeFuntion();
    scrollFunction();
}

