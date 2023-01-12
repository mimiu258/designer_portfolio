console.log("Your js.js file is loaded correctly");
//Scroll to top
var myButton=document.getElementById("upButton")
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (window.pageYOffset>250){
            myButton.style.display="block"
        }
        else{
            myButton.style.display="none"
        }
    }
    myButton.addEventListener("click",backToTop)
    function backToTop(){
        window.scrollTo(0,0);
    }