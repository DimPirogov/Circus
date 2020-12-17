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
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("cirkusNavBar").style.opacity = 1;
    document.getElementById("logoImg").style.opacity = 1;
  } else {
    document.getElementById("cirkusNavBar").style.opacity = 0.90;
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
    changeFooter();
}
function loadFunction() {
    resizeFuntion();
    scrollFunction();
}

function changeFooter() {
    let extraPadding=180;

    let d=document.getElementById("cirkusMain").scrollHeight + extraPadding-document.body.clientHeight;
    if(d<0)
        document.getElementById("cirkusFoot").classList.add("fixed-bottom");
    else
      document.getElementById("cirkusFoot").classList.remove("fixed-bottom");

}