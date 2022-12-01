const descContainer = document.getElementById("description");
const refContainer = document.getElementById("reference");

let interval = setInterval(() => {
    let random = parseInt((Math.random()*11))
    fetch("citations.json").then(result=>result.json()).then(result=>{
        descContainer.innerHTML = result[random].citation;
        refContainer.innerHTML = result[random].reference;
    })
}, 8000);
