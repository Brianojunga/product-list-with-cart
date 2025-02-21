
const desertMenu = document.querySelector('.desert-menu');



function updateDesertSection(array){
    array.forEach(item =>{
        const div = document.createElement('div');
        //update the image div dom
        div.classList.add('item');
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('item-image')
        imgDiv.classList.add(`item-image-${item.id}`);
        const img = document.createElement('img');
        img.src = item.image.desktop
        const btn = document.createElement('button');
        btn.classList.add('add')
        btn.dataset.id = item.id
        const imgSvg = document.createElement('img')
        imgSvg.src = "./assets/images/icon-add-to-cart.svg" 
        const span = document.createElement('span')
        span.textContent = 'Add to Cart'
        btn.append(imgSvg, span);
        imgDiv.append(img, btn)
        //update the paragraph dom
        const paraDiv = document.createElement('div');
        paraDiv.classList.add('para');
        const para1 = document.createElement('p');
        para1.textContent = item.category;
        const para2 = document.createElement('p');
        para2.textContent = item.name
        const para3 = document.createElement('p')
        para3.textContent = `$${item.price.toFixed(2)}`;
        paraDiv.append(para1, para2, para3)
        //update the outer div carrying the two divs
        div.append(imgDiv, paraDiv)
        desertMenu.appendChild(div)
    })
}

function updateCartDOM(item, product, main){
    const div = document.createElement('div');
    const ParaDiv = document.createElement('div');
    const para1 = document.createElement('p');
    para1.textContent = product.name
    const span1 = document.createElement('span')
    span1.classList.add('quantity-span')
    span1.textContent = `${item.Quantity}x`
    const span2 = document.createElement('span')
    span2.classList.add('price')
    span2.textContent = `@ $${product.price.toFixed(2)}`
    const span3 = document.createElement('span')
    span3.classList.add('total-product-price')
    span3.textContent = `$${(product.price * item.Quantity).toFixed(2)}`;
    ParaDiv.append(para1, span1, span2, span3)
    const deleteBtn = document.createElement('img');
    deleteBtn.src = '/assets/images/icon-remove-item.svg'
    deleteBtn.dataset.id = item.product_Id
    deleteBtn.classList.add('delete');
    div.append(ParaDiv, deleteBtn)
    main.append(div)
    productInCart(item)
}

function orderTotal(total, main){
    const div = document.createElement('div');
    const span1 = document.createElement('span')
    span1.textContent = 'Order Total';
    const span2 = document.createElement('span');
    span2.textContent = `$${total.toFixed(2)}`;
    div.append(span1, span2)
    main.appendChild(div)
}

function productInCart(item){
    const productImgDiv = document.querySelector(`.item-image-${item.product_Id}`);
    const productBtn = document.querySelector(`.item-image button[data-id="${item.product_Id}"]`)
    productBtn.replaceChildren()
    productBtn.className = 'productButton'
    productImgDiv.style.border = '3px solid hsl(14, 86%, 42%)';
    const removeBtn = document.createElement('img')
    removeBtn.classList.add('remove')
    removeBtn.src ='/assets/images/icon-decrement-quantity.svg';
    removeBtn.dataset.id = item.product_Id
    const span1 = document.createElement('span')
    span1.textContent = item.Quantity
    const addBtn = document.createElement('img')
    addBtn.classList.add('addProduct')
    addBtn.src = '/assets/images/icon-increment-quantity.svg'
    addBtn.dataset.id = item.product_Id
    productBtn.append(removeBtn, span1, addBtn)
}

function removeProductInCart(dataId){
    const productImgDiv = document.querySelector(`.item-image-${dataId}`);
    const productBtn = document.querySelector(`.item-image button[data-id="${dataId}"]`)
    productBtn.replaceChildren()
    productBtn.className = 'add'
    productImgDiv.style.border = 'none';
    const cartImg = document.createElement('img')
    cartImg.src= "./assets/images/icon-add-to-cart.svg"
    const span1 = document.createElement('span')
    span1.textContent = 'Add to Cart';
    productBtn.append(cartImg, span1)
}


export {updateDesertSection, updateCartDOM, orderTotal, removeProductInCart}