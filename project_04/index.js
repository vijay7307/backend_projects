import express from 'express';
const app = express();

const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "It's not whether you get knocked down, it's whether you get up.",
    "If you are working on something exciting, it will keep you motivated.",
    "Success is not in what you have, but who you are.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don't watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you.",
];

function randomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index]
}

const PORT = process.env.PORT || 3000;

app.get('/quote', (req, res) => {
    res.send({ quote : randomQuote() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
});