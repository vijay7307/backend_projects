import express from 'express';
const app = express();

function myRandomNumber() {
    return Math.floor(Math.random() * 101);
}

const PORT = process.env.PORT || 3000;

app.get('/random', (req, res) => {
    res.send({ number: myRandomNumber() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
});