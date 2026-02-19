const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mahindra",
    database: "stu_reg_forms"
});

db.connect(err => {
    if(err){
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL");
});

app.post("/submit", (req, res) => {

    console.log("Received Data:", req.body);

    const { NAME, DOB, EMAIL, DEPT, PHNO, USERNAME, PASSWORD } = req.body;

    if(!NAME || !DOB || !EMAIL || !DEPT || !PHNO || !USERNAME || !PASSWORD){
        return res.json({success:false, message:"All fields are required"});
    }

    const sql = `
        INSERT INTO stu_details 
        (NAME, DOB, EMAIL, DEPT, PHNO, USERNAME, PASSWORD)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, 
        [NAME, DOB, EMAIL, DEPT, PHNO, USERNAME, PASSWORD], 
        (err, result) => {
            if(err){
                console.error(err);
                return res.json({success:false, message:"Database Error"});
            }

            if(result.affectedRows > 0){
                res.json({success:true});
            } else {
                res.json({success:false, message:"Insert Failed"});
            }
        }
    );
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
