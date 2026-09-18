// Semester 3 Notes — Quiz Engine

const quizFiles = {
    "digital-laws": "quizzes/Digital_Laws_and_Ethics_Quiz.html",
    "ott": "quizzes/OTT_Advertising_Quiz.html",
    "media-planning": "quizzes/Digital_Media_Planning_and_Buying_Quiz.html",
    "ecommerce": "quizzes/E-Commerce_and_Digital_Marketing_Quiz.html",
    "mobile": "quizzes/Mobile_Advertising_Quiz.html",
    "analytics": "quizzes/Web_Analytics_and_Strategy_Formulation_Quiz.html",
    "affiliate": "quizzes/Affiliate_Marketing_Quiz.html",
    "ai": "quizzes/AI_in_Digital_Marketing_Quiz.html"
};

async function loadQuiz(subject) {
    const file = quizFiles[subject];

    if (!file) {
        console.error("Quiz file not found.");
        return [];
    }

    const response = await fetch(file);

    if (!response.ok) {
        console.error("Could not load:", file);
        return [];
    }

    const html = await response.text();

    const parser = new DOMParser();
    const document = parser.parseFromString(html, "text/html");

    const elements = document.querySelectorAll("main p, main li");

    const questions = [];
    let current = null;

    elements.forEach(element => {
        const text = element.textContent.trim();

        const questionMatch = text.match(/^Q\d+\.\s*(.+)$/);

        if (questionMatch) {
            if (
                current &&
                current.options.length === 4 &&
                current.answer
            ) {
                questions.push(current);
            }

            current = {
                question: questionMatch[1].trim(),
                options: [],
                answer: "",
                explanation: ""
            };

            return;
        }

        if (!current) return;

        const optionMatch = text.match(/^([A-D])\.\s*(.+)$/);

        if (optionMatch) {
            current.options.push({
                letter: optionMatch[1],
                text: optionMatch[2].trim()
            });

            return;
        }

        const answerMatch = text.match(/^Answer:\s*([A-D])/i);

        if (answerMatch) {
            current.answer = answerMatch[1].toUpperCase();
            return;
        }

        const explanationMatch =
            text.match(/^Explanation:\s*(.+)$/i);

        if (explanationMatch) {
            current.explanation = explanationMatch[1].trim();
        }
    });

    if (
        current &&
        current.options.length === 4 &&
        current.answer
    ) {
        questions.push(current);
    }

    return questions;
}