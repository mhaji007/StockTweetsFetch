// Backend for dealing with CORS

const cors = require("cors");
const express = require("express");

const routes = require("./routes");

const app = express();
const port = process.env.PORT || 4000;

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tweets", routes.tweets);

// * Start * //

app.listen(port, () => console.log(`listening on port ${port}!`));
