const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function checkForPalindrome(input) {
    const originalInput = input;

    if(!input) {
        alert("Please input a value");
        return;
    }

    //Remove the previous result
    resultDiv.replaceChildren();

    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    let resultMsg = `<strong>${originalInput}</strong> ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? "is" : "is not"} a palindrome.`;

    const pTag = document.createElement("p");
    pTag.className = "user-input";
    pTag.innerHTML = resultMsg;
    resultDiv.appendChild(pTag);

    resultDiv.classList.remove("hidden");
};

checkButton.addEventListener("click", () => {
    checkForPalindrome(userInput.value);
    userInput.value = "";
});

userInput.addEventListener("keydown", e => {
    if (e.key === 'Enter') {
        checkForPalindrome(userInput.value);
        userInput.value = "";
    }
});