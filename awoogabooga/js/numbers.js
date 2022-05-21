function getTrivia(){
    fetch("http://numbersapi.com/random/trivia")
    .then((response) => response.text())
    .then(data => {
        document.getElementById("number-fact").innerHTML = data;
        document.getElementById("number-fact").style.visibility = "visible";
        console.log(data);

        const first = data.split(' ').shift();
        console.log(first);

        document.getElementById("number-title").innerHTML = first;
        document.getElementById("number-title").style.visibility = "visible";
    });
}

function getYear(){
    fetch("http://numbersapi.com/random/year")
    .then((response) => response.text())
    .then(data => {
        document.getElementById("number-fact").innerHTML = data;
        document.getElementById("number-fact").style.visibility = "visible";
        console.log(data);

        const first = data.split(' ').shift();
        console.log(first);

        document.getElementById("number-title").innerHTML = first;
        document.getElementById("number-title").style.visibility = "visible";
    });
}

function getDate(){
    fetch("http://numbersapi.com/random/date")
    .then((response) => response.text())
    .then(data => {
        document.getElementById("number-fact").innerHTML = data;
        document.getElementById("number-fact").style.visibility = "visible";
        console.log(data);

        const first = data.split(' ').shift();
        console.log(first);

        const second = data.split(' ')[1];
        console.log(second);

        document.getElementById("number-title").innerHTML = first + " " + second;
        document.getElementById("number-title").style.visibility = "visible";

    });
}

function getMath(){
    fetch("http://numbersapi.com/random/math")
    .then((response) => response.text())
    .then(data => {
        document.getElementById("number-fact").innerHTML = data;
        document.getElementById("number-fact").style.visibility = "visible";
        console.log(data);

        const first = data.split(' ').shift();
        console.log(first);

        document.getElementById("number-title").innerHTML = first;
        document.getElementById("number-title").style.visibility = "visible";
    });
}