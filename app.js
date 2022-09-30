let catfat=document.getElementById("qt");
let btnfact=document.getElementById("btn");
let imgCat = document.getElementById("cat");
let context = document.getElementById("cnt")


btnfact.addEventListener("click",getFact);
btnfact.addEventListener("click",getPict);

window.onload = () =>{
    getFact();
    getPict();
}

async function getFact(){

    await fetch('https://meowfacts.herokuapp.com/').then(response =>{ return response.json()
}).then(data =>{
    let phQuote = data;
    catfat.innerHTML = `<p>"${phQuote.data}"</p>`;
}).catch( error =>{
    console.log(error);
});
}

async function getPict(){
    await fetch('https://cataas.com/cat?json=true').then(response => {return response.json()
 }).then( catData =>{
        let showCat = catData;
        let direction="https://cataas.com/"//tomar parte de la url original
        let fullurl = direction+showCat.url //añadir la direcion que el archivo json nos da
       console.log(fullurl)
       //context.innerHTML =fullurl
       imgCat.src=fullurl
       
       
        
}).catch( catError =>{
    console.log(catError);
});
}


//https://cataas.com/#/
//https://meowfacts.herokuapp.com/
//cat <a href="https://www.flaticon.es/iconos-gratis/gato" title="gato iconos">Gato iconos creados por AomAm - Flaticon</a>
//https://www.online-convert.com/result#j=d8b9c7b2-a4ca-488a-b85e-9d343134f4ff
//https://www.w3schools.com/html/html5_audio.asp
