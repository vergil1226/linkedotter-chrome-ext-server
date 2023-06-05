const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");

const app = express();
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
 
//mongodb+srv://kunalclepr:3rIgEIz5Kr1xRz46@cluster0.rizr71l.mongodb.net/?retryWrites=true/registrationFormHeruko
db.mongoose
  .connect(`mongodb+srv://petro:fn8xZSib3wGFjDx3@linkedotter.yqoyoi1.mongodb.net/?retryWrites=true/registrationFormHeruko`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

 
