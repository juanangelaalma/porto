require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000 || process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;
const verifyToken = require('./middlewares/auth')

// routing
const usersRoute = require("./routes/users");
const uploadFileRoute = require('./routes/uploadfile')
const categoriesRoute = require('./routes/categories') 
const postsRoute = require('./routes/posts') 

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

/* this line tells Express to use the public folder as our static folder from which we can serve static files*/
app.use(express.static('public')); 

// routing
app.use("/users", usersRoute);
app.use('/files', uploadFileRoute)
app.use('/categories', categoriesRoute)
app.use('/posts', postsRoute)

app.get("/", verifyToken, (req, res) => {
  res.send("Hello world");
});

// database connection
mongoose
  .connect(DATABASE_URI)
  .then(() => {
    console.log('Database connection at', DATABASE_URI)
    app.listen(port, () => console.log("Server running at", port))
  })
  .catch((err) => console.log(err));