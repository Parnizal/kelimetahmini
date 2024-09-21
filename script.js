const words = {
    "apple": "elma",
    "book": "kitap",
    "cat": "kedi",
    "dog": "köpek",
    "house": "ev",
};

let currentWord;

function getRandomWord() {
    const keys = Object.keys(words);
    currentWord = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById("wordDisplay").textContent = currentWord;
    displayOptions();
}

function displayOptions() {
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ''; // Mevcut seçenekleri temizle
    const correctAnswer = words[currentWord];
    const options = [correctAnswer];

    // Yanlış seçenekler ekle
    while (options.length < 4) {
        const randomWord = words[Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]];
        if (!options.includes(randomWord)) {
            options.push(randomWord);
        }
    }

    // Seçenekleri karıştır
    options.sort(() => Math.random() - 0.5);

    // Seçenekleri ekle
    options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option, correctAnswer);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("Doğru cevap!");
        getRandomWord();
    } else {
        alert("Yanlış cevap! Doğru cevap: " + correct);
    }
}

document.getElementById("nextWord").onclick = getRandomWord;

// Sayfa yüklendiğinde ilk kelimeyi göster
getRandomWord();
