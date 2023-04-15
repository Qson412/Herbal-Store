
// Scroll Menu
const containerElement = document.querySelector(".myheader")
function handelScroll() {
    window.scrollY > 100 ? containerElement.classList.add("scroll") : containerElement.classList.remove("scroll")
}
window.addEventListener("scroll", handelScroll);

// Toggle menu

const toggleBtn = document.querySelector('.toggle-menu');
const toggleBtnIcon = document.querySelector('.toggle-menu ion-icon');
const dropdownMenu = document.querySelector('.droptown-menu--mobile');

toggleBtn.onclick = function(){
  dropdownMenu.classList.toggle('active');
}

// ------------ TIM KIEM --------------
function searchFunc(){
  let menusearch = document.querySelector('#search');
  let menuitems = Array.from(document.querySelectorAll('.product-column'));

  menuitems.forEach(function(el){
    let text = el.innerText;
    if(text.indexOf(menusearch.value) > -1)
      el.style.display = "";
    else 
      el.style.display = "none";
  });

  let cartitems = Array.from(document.querySelectorAll('.cart-item'));
  cartitems.forEach(function(se){
    let textCart = se.innerText;
    if(textCart.indexOf(menusearch.value) > -1)
      se.style.display = "";
    else
      se.style.display = "none";
  })
}

// BACK TO TOP
const toTop = document.querySelector(".scroll-to--top");
window.addEventListener("scroll", () => {
  if(window.pageYOffset > 300){
    toTop.classList.add("show");
  }else{
    toTop.classList.remove("show");
  }
})

function backTop(){
  window.scrollTo(0,0);
}

