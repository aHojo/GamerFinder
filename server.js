const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080

// Here we define the route files to handle request and responses
const htmlroute = require("./routes/htmlroute");
// const apiroute = require("./routes/apiroute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", htmlroute);
// app.use("/api", apiroute);
app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}`);
});