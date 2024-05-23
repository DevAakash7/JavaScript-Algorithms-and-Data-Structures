const mean = document.getElementById("mean");
const median = document.getElementById("median");
const mode = document.getElementById("mode");
const range = document.getElementById("range");
const variance = document.getElementById("variance");
const standardDeviation = document.getElementById("standard-deviation");
const inputValues = document.getElementById("numbers");

const form = document.getElementById("form");
const convertBtn = document.getElementById("convert-btn");


const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    const sorted = array.slice().sort((a, b) => a - b);
    const median =
        array.length % 2 === 0
        ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
        : sorted[Math.floor(array.length / 2)];
    return median;
}

const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1;
    })
    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    const highest = Object.keys(counts).sort(
        (a, b) => counts[b] - counts[a]
    )[0];
    const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
    );
    return mode.join(", ");
}

const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
    }

    const getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
}

const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
}

const calculate = () => {
    const array = inputValues.value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    mean.textContent = getMean(numbers);
    median.textContent = getMedian(numbers);
    mode.textContent = getMode(numbers);
    range.textContent = getRange(numbers);
    variance.textContent = getVariance(numbers);
    standardDeviation.textContent = getStandardDeviation(numbers);
}

form.addEventListener("submit", e => {
    e.preventDefault();
    calculate();
});

convertBtn.addEventListener("click", calculate);