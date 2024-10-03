window.addEventListener('load', function() {
    updateHtml();
})

function updateHtml() {
    let numbers = document.getElementById("numbers");
    let stars = document.getElementById("stars");

    json = generateEuromilhoesKey();

    numbers.innerHTML = JSON.parse(json).key.numbers;
    stars.innerHTML = JSON.parse(json).key.stars;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateEuromilhoesKey() {
    numbers = [];
    stars = [];
    finalJson = {};

    for (let i = 0; i < 5; i++) {
        let number = generateRandomNumber(1, 51);

        while (numbers.includes(number)) {
            number = generateRandomNumber(1, 51);
        }

        numbers.push(number);
    }

    for (let i = 0; i < 2; i++) {
        let number = generateRandomNumber(1, 13);

        while (stars.includes(number)) {
            number = generateRandomNumber(1, 13);
        }

        stars.push(number);
    }

    return JSON.stringify({
        "key": {
            "numbers": numbers,
            "stars": stars
        }
    });
}