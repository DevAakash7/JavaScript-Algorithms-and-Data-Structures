const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');
const countrySelect = document.getElementById('country-select');

function validateUSNumber(input) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
    return regex.test(input);
}

function validateIndianNumber(input) {
    const regex = /^(91|91\s|\+91|\+91\s)?[6-9]\d{9}$/;
    return regex.test(input);
}

const checkValidNumber = input => {
    if (input === '') {
        alert('Please provide aphone number')
        return;
    }

    const country = countrySelect.value;
    let isValid = false;
    let resultText = '';

    if (country === 'us') {
        isValid = validateUSNumber(input);
        resultText = `${isValid ? 'Valid' : 'Invalid'} US number: ${input}`;
    } else if (country === 'india') {
        isValid = validateIndianNumber(input);
        resultText = `${isValid ? 'Valid' : 'Invalid'} Indian number: ${input}`;
    }

    const pTag = document.createElement('p');
    pTag.className = 'results-text';
    pTag.style.color = isValid ? '#00471b' : '#dc3545';
    pTag.appendChild(document.createTextNode(resultText));
    resultsDiv.appendChild(pTag);
}

// Event listener for the check button
checkBtn.addEventListener('click', () => {
    checkValidNumber(userInput.value);
    userInput.value = '';
});

// Event listener for the Enter key in the input field
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkValidNumber(userInput.value);
        userInput.value = '';
    }
});

// Event listener for the clear button
clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
});
