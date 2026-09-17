// Semester 3 Notes — Quiz Engine

const quizFiles = {
    "digital-laws": "quizzes/Digital_Laws_and_Ethics_Quiz.md",
    "ott": "quizzes/OTT_Advertising_Quiz.md",
    "media-planning": "quizzes/Digital_Media_Planning_and_Buying_Quiz.md",
    "ecommerce": "quizzes/E-Commerce_and_Digital_Marketing_Quiz.md",
    "mobile": "quizzes/Mobile_Advertising_Quiz.md",
    "analytics": "quizzes/Web_Analytics_and_Strategy_Formulation_Quiz.md",
    "affiliate": "quizzes/Affiliate_Marketing_Quiz.md",
    "ai": "quizzes/AI_in_Digital_Marketing_Quiz.md"
};

let quizQuestions = [];

async function loadQuiz(subject) {
    const file = quizFiles[subject];

    if (!file) {
        console.error("Quiz file not found.");
        return [];
    }

    const response = await fetch(file);
    const markdown = await response.text();

    return parseQuiz(markdown);
}

function parseQuiz(markdown) {
    const questions = [];

    const blocks = markdown.split(/\n(?=Q\d+\.)/);

    blocks.forEach(block => {
        const questionMatch = block.match(/Q\d+\.\s*(.+)/);

        if (!questionMatch) return;

        const question = questionMatch[1].trim();

        const options = [];
        const optionRegex = /^[A-D]\.\s*(.+)$/gm;
        let optionMatch;

        while ((optionMatch = optionRegex.exec(block)) !== null) {
            options.push({
                letter: optionMatch[0].charAt(0),
                text: optionMatch[1].trim()
            });
        }

        const answerMatch = block.match(/\*\*Answer:\*\*\s*([A-D])/i);

        const explanationMatch = block.match(
            /\*\*Explanation:\*\*\s*(.+?)(?=\n\n|\n###|\n---|$)/is
        );

        if (!answerMatch || options.length !== 4) return;

        questions.push({
            question,
            options,
            answer: answerMatch[1].toUpperCase(),
            explanation: explanationMatch
                ? explanationMatch[1].trim()
                : ""
        });
    });

    return questions;
}