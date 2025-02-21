import { data } from "./script.js";
import { updateCartDOM, orderTotal, removeProductInCart } from "./dom.js";

const body = document.querySelector('body')
const totalSpan = document.querySelector('.cart-quantity');
const emptyCart = document.querySelector('.empty-product-quantity');
const productCart = document.querySelector('.product-quantity');
const cartBtn = document.querySelector('.btn')
const cartTotal = document.querySelector('header span')
const closeBtn = document.querySelector('h3 img')



async function updatecart(){
     cartTotal.addEventListener('click', ()=>{ 
        body.classList.toggle('showCart')
     })
     closeBtn.addEventListener('click', ()=>{
        body.classList.toggle('showCart')
    })
    const dataArr = await data()
    let cart = [];

    function setCart(dataId, position, quantity){
        if(quantity > 0){
            if(position < 0){
                cart.push({
                    "product_Id" : dataId,
                    "Quantity" : quantity
                })
            }else{
                cart[position].Quantity = quantity
            }
        }else{
            cart.splice(position, 1)
            removeProductInCart(dataId)
        }
        localStorage.setItem('Cart', JSON.stringify(cart))
        reshFreshHTML()
    }

    function reshFreshHTML(){
        productCart.replaceChildren()
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach(item =>{
            if(!item) return
            totalQuantity += item.Quantity
            const product = dataArr.find(product => product.id == item.product_Id);
            totalPrice += (item.Quantity * product.price)
            updateCartDOM(item, product, productCart)
        })

        if(totalQuantity > 0){
            cartBtn.style.display = 'grid';
            emptyCart.style.display = 'none';
            orderTotal(totalPrice, productCart)
        }else{
            cartBtn.style.display = 'none';
            emptyCart.style.display = 'block'
        }
        totalSpan.textContent = totalQuantity
        cartTotal.textContent = totalQuantity
    }
    
    document.addEventListener('click', (e) =>{
        const buttonClick = e.target.closest("[data-id]");
        const dataId = buttonClick.dataset.id
        const position = cart.findIndex(item => item.product_Id == dataId)
        let quantity = position < 0 ? 0 : cart[position].Quantity

        if(buttonClick.classList.contains('add') || buttonClick.classList.contains('addProduct')){
            quantity++
            setCart(dataId, position, quantity)
        }else if(buttonClick.classList.contains('delete')){
            quantity = 0;
            setCart(dataId, position, quantity)
        }else if(buttonClick.classList.contains('remove')){
            quantity--
            setCart(dataId, position, quantity)
        }
    })
    cart = JSON.parse(localStorage.getItem('Cart'))
    reshFreshHTML()

}

export { updatecart, cartTotal }