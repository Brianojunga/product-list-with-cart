import { data } from "./script.js";


//async 
function updatecart(){
   // const dataArr = await data()
    const cart = [];

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
        }
        reshFreshHTML()
    }

    function reshFreshHTML(){
        const totalSpan = document.querySelector('.cart-quantity')
        let totalQuantity = 0;
        cart.forEach(item =>{
            totalQuantity += item.Quantity
        })
        totalSpan.textContent = totalQuantity
    }
    
    document.addEventListener('click', (e) =>{
        const buttonClick = e.target.closest("[data-id]");
        const dataId = buttonClick.dataset.id
        const position = cart.findIndex(item => item.product_Id == dataId)
        let quantity = position < 0 ? 0 : cart[position].Quantity

        if(buttonClick.classList.contains('add')){
            quantity++
            setCart(dataId, position, quantity)
        }
    })

}

export { updatecart }