
const desertMenu = document.querySelector('.desert-menu');


function updateDesertSection(array){
    array.forEach(item =>{
        const div = document.createElement('div');
        //update the image div dom
        div.classList.add('item');
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('item-image');
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

export {updateDesertSection}