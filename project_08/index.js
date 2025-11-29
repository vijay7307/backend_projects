import express from "express";
const app = express();

app.use(express.json()); 

const PORT = process.env.PORT || 3000;

let teaData = [];
let id = 1;

// adding a new tea
app.post("/teas", (req, res) => {
    const {name, price} = req.body;
    const tea = {
        id: id++,
        name, 
        price
    };
    teaData.push(tea);
    res.status(201).send(tea);
});

// getting all teas
app.get("/teas", (req, res) => {
    res.status(200).send(teaData);
});

// getting a tea by id
app.get("/teas/:id", (req, res) => {
    const tea = teaData.find((tea) => tea.id === parseInt(req.params.id))
    if (!tea) {
        return res.status(404).send({message: "Tea not found"});
    }
    res.status(200).send(tea);
});

// updating a tea by id
app.put("/teas/:id", (req, res) => {
    const tea = teaData.find((tea) => tea.id === parseInt(req.params.id))
    if (!tea) {
        return res.status(404).send({message: "Tea not found"});
    }
    const {name, price} = req.body;
    tea.name = name;
    tea.price = price;
    res.status(200).send(tea);
});

// deleting a tea by id
app.delete("/teas/:id", (req, res) => {
    const teaIndex = teaData.findIndex((tea) => tea.id === parseInt(req.params.id))
    if (teaIndex === -1) {
        return res.status(404).send({message: "Tea not found"});
    }
    teaData.splice(teaIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
