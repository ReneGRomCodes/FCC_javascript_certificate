const questions = [
    {
        category: "JavaScript",
        question: "Which keyword is used to declare a constant in JavaScript?",
        choices: ["var", "let", "const"],
        answer: "const"
    },
    {
        category: "Python",
        question: "Which data type is used to store key-value pairs in Python?",
        choices: ["list", "tuple", "dict"],
        answer: "dict"
    },
    {
        category: "General Programming",
        question: "What does CPU stand for?",
        choices: ["Central Processing Unit", "Computer Power Unit", "Central Program Utility"],
        answer: "Central Processing Unit"
    },
    {
        category: "Computer Science",
        question: "What does RAM stand for?",
        choices: ["Read Access Memory", "Random Access Memory", "Rapid Allocation Module"],
        answer: "Random Access Memory"
    },
    {
        category: "Databases",
        question: "Which SQL command is used to retrieve data from a table?",
        choices: ["SELECT", "INSERT", "UPDATE"],
        answer: "SELECT"
    }
];

function getRandomQuestion(questions) {
    return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(answers) {
    return answers[Math.floor(Math.random() * 3)]
}

function getResults(question, chosenAnswer) {
    if (chosenAnswer === question.answer) {
        return "The computer's choice is correct!"
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`
    }
}
