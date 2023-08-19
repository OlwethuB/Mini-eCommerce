const cors = require("cors"); // Import cors

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = require("./router/routes"); // Import routes
require("dotenv").config();

const { log } = require('console')
const express = require('express')
const routes =require('./router/routes.js')    // Import express
const app = express()  // Init express
const path = require('path')
const port = +process.env.PORT || 3000   // Port...

app.use(express.json()); // Use express json

// Use cors
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Use router
app.use("/", routes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


// routes.get('^/$|/Mini-eCommerce', (req, res) => {
//     res.sendFile(path.resolve(_dirname, './static/html/index.html'))
// })

// static   
// app.use(express.static('./static'))
// app.use(
//     express.urlenncoded({

//     }),
//     routes
// )
