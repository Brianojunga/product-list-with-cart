import { updateDesertSection } from "./dom.js";
import { updatecart, cartTotal } from "./cart.js";

async function data(){
    try{
        const request = await fetch('./data.json');
        if(!request.ok){
            throw new Error(`HTTP error! Status: ${request.status}`);
        }
        const response = await request.json()
        return response
    }catch(error){
        console.error("Error fetching data:", error);
    }
}

async function updateDom(){
    const dataArray = await data()
    updateDesertSection(dataArray);
}

updateDom()
updatecart()
export {data}





