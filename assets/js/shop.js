
// Show Product
let listCart = document.querySelector('.list-cart');
let filter = document.querySelector('.products-filter');
let countProductFilter = document.querySelector('.count-filter');
let quantity = document.querySelector('.count');
function initApp(productFilter){
    countProductFilter.innerText =productFilter.length;
    productFilter.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('cart-item');
        newDiv.innerHTML = `
     
        <div class="border-cart" data-product="${value.code}">
      
                <div class="sale-rate">
                    <ion-icon name="star"></ion-icon>
                </div>
                <a href="../html/Detail.html?code=${value.code}"class="detail-link">
                    <img src="../uploads/product/${value.image}" alt="">
                </a>
                <div class="cart-content">
                    <p>${value.name}</p>
                    <div class="rate-cart">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div class="cart-price-shop">$${value.price},00 </div>
                <div class="cart-item--bottom">
                    <p>Stock: ${value.stock}</p>
                <div class="add-cart--shop">Add to cart</div>
                </div>
                </div>
                
        </div>
        `
        listCart.appendChild(newDiv);
    });
}


// Page Breakpoints

let thisPage = 1;
let limit = 6;
let listPage= document.querySelectorAll('.cart-item');


function loadItem(){
    begin = limit * (thisPage - 1);
    let end = limit * thisPage - 1;
    listPage.forEach((item, key) => {
        if(key >= begin && key <= end){
            item.style.display = '';
        }else{
            item.style.display = 'none';
        }
    });
}
loadItem();

function PageBreak(){
    let count = Math.ceil(listPage.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = 'PREV';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }
    for(i = 1; i<= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('.active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}