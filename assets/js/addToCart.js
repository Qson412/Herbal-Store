
let carts = document.querySelectorAll('.add-cart--shop');

// for (let i = 0; i < carts.length; i++) {
//     carts[i].addEventListener('click', () => {
//         cartNumbers(product[i]);
//         totalCost(product[i]);
//     })
// }
carts.forEach((item,index)=>{
    item.onclick=()=>{
        cartNumbers(product[index]);
        totalCost(product[index]);
    }
})

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.count').textContent = productNumbers;
    }
}



function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.count').textContent = productNumbers - 1;
        // console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.count').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.count').textContent = 1;
        swal({
            title: 'Add to cart successfully',
            icon: 'success',
        }   
        ) 
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    
    if(cartItems != null) {
        let currentProduct = product.name;
        if(cartItems[currentProduct] == undefined) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        }
        cartItems[currentProduct].id += 1;
    }else{
        product.id = 1;
        cartItems = {
            [product.name]: product
        }
    }
    
    localStorage.setItem('productsInCart', JSON.stringify( cartItems));
}


// TOTAL MONEY
function totalCost(product, action) {
    // console.log("Total money: ", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    // console.log('my cart cost: ', cartCost);
    // console.log(typeof cartCost);
    if(action){
        cartCost = parseInt(cartCost);

        localStorage.setItem("totalCost", cartCost - product.price);
    }else if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }

}

onLoadCartNumbers();
