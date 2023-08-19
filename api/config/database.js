const { createPool } = require('mysql2');
require("dotenv").config();

// Connection to database
const db = createPool({
    host: process.env.db_host,
    port: process.env.db_post,
    user: process.env.db_user,
    password: process.env.db_pass,
    database: process.env.db_name,
    multipleStatements: true,
    connectionLimit: 30
});

db.getConnection((error) => {
    if(error){
        console.log(error)
    };
    console.log("Database connected successfully")
})

module.exports = db;
