const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");   

const app = express();


app.use(cors({
    origin: "http://127.0.0.1:5500",  
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: true
}));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mahindra",   
    database: "stu_reg_forms"
});

db.connect(err => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const sql = "SELECT * FROM stu_details WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            return res.json({ success: false, message: "Database error" });
        }

        if (result.length > 0) {
            req.session.user = result[0];
            res.json({ success: true, message: "Login Successful" });
        } else {
            res.json({ success: false, message: "Invalid Username or Password" });
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});