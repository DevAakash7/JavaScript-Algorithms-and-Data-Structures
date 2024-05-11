function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }
    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}
// Function to generate a message for the student based on their score
function studentMsg(totalScores, studentScore) {
    return hasPassingGrade(studentScore)? `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.` : `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 38));