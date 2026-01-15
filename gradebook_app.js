function getAverage(testScores) {
    const scoreSum = testScores.reduce((sum, value) => sum + value, 0);
    return scoreSum / testScores.length;
}

function getGrade(studentScore) {
    const scoreToGrade = {
        "A+": studentScore === 100,
        "A": studentScore <= 99 && studentScore >= 90,
        "B": studentScore <= 89 && studentScore >= 80,
        "C": studentScore <= 79 && studentScore >= 70,
        "D": studentScore <= 69 && studentScore >= 60,
        "F": studentScore <= 59,
    }

    for (const grade in scoreToGrade) {
        if (scoreToGrade[grade]) return grade;
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(testScores, studentScore) {
    const hasPassed = hasPassingGrade(studentScore);

    if (hasPassed) {
        return `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(studentScore)}. You passed the course.`;
    } else {
        return `Class average: ${getAverage(testScores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`;
    }
}
