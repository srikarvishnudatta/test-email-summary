import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.json({message : "Hello world"});
});

app.post("/api/messages", (req, res) => {
  const userText = req.body.text || "";
  res.send({ reply: `You said: ${userText}` });
});

app.listen(4000, () => {
    console.log("listening on port 4000")
});