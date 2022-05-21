function getBored(){
    fetch("http://www.boredapi.com/api/activity/")
    .then(a => a.json())
    .then(response => {
        document.getElementById("activity").innerHTML = response.activity;
        document.getElementById("activity").style.visibility = "visible";
        console.log(response);
    });
}

function getExcuse(){
    fetch("https://excuser.herokuapp.com/v1/excuse")
    .then(a => a.json())
    .then(response => {
        document.getElementById("excuse").innerHTML = response[0].excuse;
        document.getElementById("excuse").style.visibility = "visible";
        console.log(response);
    });
}