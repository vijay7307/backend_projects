import express from 'express';
const app = express();

function dateInIsoFormat() {
    return new Date().toISOString();
}

const PORT = process.env.PORT || 3000;

app.get('/date', (req, res) => {
    res.send({ date: dateInIsoFormat() });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
});