import express from "express";
const app = express();

app.use(express.json()); 

const PORT = process.env.PORT || 3000;

const contacts = [];

app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error : "All fields are required."})
    }

    const contactnew = {
        id : contacts.length + 1,
        name, 
        email, 
        message
    }

    contacts.push(contactnew);
    

  res.status(201).json({
      message: "Contact saved!",
      contacts: contacts,
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
