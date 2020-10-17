const navbar = document.getElementById("navbar");
const body = document.getElementsByTagName("body")[0];

mobileNavbar.onclick = function(){
   navbar.classList.toggle("mobile");
   body.classList.toggle("overflow-hidden"); 
}


