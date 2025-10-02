import express from 'express';
const app = express();

let count = 0;

function incrementCounter() {
    return count = count + 1;
}

function decrementCounter() {
    return count = count - 1;
}

const PORT = process.env.PORT || 3000;

app.get('/count', (req, res) => {
    res.json({  "count" : count });
});

app.post('/increment', (req, res) => {
    res.json({  message: "Counter incremented", "count" : incrementCounter() });
});

app.post('/decrement', (req, res) => {
    res.json({  message: "Counter decremented", "count" : decrementCounter() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
});