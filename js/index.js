const GetQuotes = ()=> {
    fetch('https://api.kanye.rest/')
        .then(res=>res.json())
        .then(data=>DisplayQuotes(data))
}
const DisplayQuotes = mainQoute => {
    const qoutes = document.getElementById('mainqoutes');
    qoutes.innerText = `" ${mainQoute.quote} "💕`;
    
}