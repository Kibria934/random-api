const express = require("express");
const cors = require("cors");
const user_router = require("./routes/v1/users.router");
const port = process.env.PORT || 5000;
const app = express();

// ----------- Middleware -----------
app.use(cors());
app.use(express.json());

// -------------- Router -------------
app.use("/user", user_router);

//------------ Home API ----------
app.get("/", (req, res) => {
  res.send(`<h1>This is my homepage of server</h1> `);
});

//------------ Making App ----------
app.listen(port, () => console.log("server is running on port", port));
