const form = document.getElementById("form");
const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = num => {
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const result = [];
    
    romanNumerals.forEach(arr => {
        while (num >= arr[1]) {
            result.push(arr[0]);
            num -= arr[1];
        }
    });
    return result.join('');
};

const isValid = (str, int) => {
    let errText = "";

    if (!str || str.match(/[e.]/g)) {
        errText = "Please enter a valid number.";
    } else if (int < 1) {
        errText = "Please enter a number greater than or equal to 1.";
    } else if (int > 3999) {
        errText = "Please enter a number less than or equal to 3999.";
    } else {
        return true;
    }

    output.innerText = errText;
    output.classList.add('alert');

    return false;
};

const clearOutPut = () => {
    output.innerText = "";
    output.classList.remove('alert');
};

form.addEventListener("submit", e => {
    e.preventDefault();
    updateUI();
});

convertBtn.addEventListener("click", () => {
    updateUI();
});

const updateUI = () => {
    const numStr = input.value;
    const inputInt  = parseInt(input.value, 10);

    output.classList.remove("hidden");

    clearOutPut();

    if (isValid(numStr, inputInt)) {
        output.innerText = convertToRoman(inputInt);
    }
};