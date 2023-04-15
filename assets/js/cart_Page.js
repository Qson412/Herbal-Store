
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseInt(cartCost);

    let productContainer = document.querySelector(".product-item");
    
    // console.log(cartItems);
    if(cartItems && productContainer){
       productContainer.innerHTML = '';
       Object.values(cartItems).map((value, index) => {
        productContainer.innerHTML += `
        <div class="product-cart">
            <div class="product">
                <a>
                    <img src="../uploads/product/${value.image}" alt="">
                    <span>${value.name}</span>
                </a>
            </div>
            <div class="price">$${value.price},00</div>
            <div class="quantity">
            <ion-icon class="decrease" name="remove-outline"></ion-icon>
                    <span>${value.id}</span>
                <ion-icon class="increase" name="add-outline"></ion-icon>
            </div>
            <div class="total">
                $${value.id * value.price},00
            </div>
            <button class="remove-item" data-codeitem="${value.code}"><ion-icon name="close-outline"></ion-icon></button>
        </div>
        `;
       })

       productContainer.innerHTML += `
       <div class="basketTotal">
            <h4 class="basketTotalTitle">Cart Total</h4>
            <h4 class="basketTotal">$${cartCost},00</h4>
        </div>`;
        deleteButtons();
        manageQuantity();
    }
}


function manageQuantity(){
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for (let i = 0; i < increaseButtons.length; i++){
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(currentProduct);

            if(cartItems[currentProduct].id > 1){
                cartItems[currentProduct].id -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;


            cartItems[currentProduct].id += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }


};

// let cartItems = localStorage.getItem("productsInCart");
// cartItems = JSON.parse(cartItems);

// const removeItemCart = document.querySelectorAll(".remove-item");
// Array.from(removeItemCart).forEach((node) => {
//     node.addEventListener("click", (ex) => {
//       console.log(node);
//       console.log(ex.target.dataset.codeitem)
//     Object.values(cartItems).filter(
//         (item) => {
//           console.log(item.idcart, e.target.dataset.iditem);
//           return item.idcart !== e.target.dataset.iditem;
//         }
//       );
//         displayCart();
//         onLoadCartNumbers();
//         cartItems = JSON.parse(localStorage.getItem("productsInCart")) || [];
//     });
//   });

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.remove-item');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);
    if(deleteButtons.value === undefined){
        return
    }
    for(let i=0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.textContent;
           
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].id);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].id));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
            onLoadCartNumbers();
        })
    }
}
displayCart();