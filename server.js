const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

// Here we define the route files to handle request and responses
const apiroute = require("./routes/apiroute");
const htmlroute = require("./routes/htmlroute");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", apiroute);
app.use("/", htmlroute);

app.listen(PORT, function () {

    console.log(`Server listening on port ${PORT}`);
});