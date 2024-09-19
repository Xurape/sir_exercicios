window.addEventListener('load', function() {
    let keySpan = document.getElementById("key");
    keySpan.innerText = generateEuromilhoesKey();
})

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateEuromilhoesKey() {
    let finalString = [];

    for (i = 0; i < 5; i++) {
        finalString.push(generateRandomNumber(1,50));
    }

    finalString.push("-");
    
    for (j = 0; j < 2; j++) {
        finalString.push(generateRandomNumber(1,12));
    }

    return finalString.join(" ");
}