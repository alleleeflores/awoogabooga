function getFact(){
    fetch("https://catfact.ninja/fact")
    .then(a => a.json())
    .then(response => {
        document.getElementById("fact").innerHTML = response.fact;
        document.getElementById("fact").style.visibility = "visible";
        console.log(response);
    });
}