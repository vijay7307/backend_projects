import express from "express";
const app = express();

const PORT = process.env.PORT || 3000;

function checker(req, res) {
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({
            error: "Invalid input, please provide two numbers as query parameters 'a' and 'b'.",
        });
    }
}


app.get("/add", (req, res) => {
    checker(req, res);
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    res.json({ result: a + b });
});
app.get("/subtract", (req, res) => {
    checker(req, res);
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    res.json({ result: a - b });
});
app.get("/multiply", (req, res) => {
    checker(req, res);
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    res.json({ result: a * b });
});
app.get("/divide", (req, res) => {
    checker(req, res);
    let a = parseFloat(req.query.a);
    let b = parseFloat(req.query.b);
    if (b === 0) {
        return res.status(400).json({ error: "Division by zero is not allowed." });
    }
    res.json({ result: a / b });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
