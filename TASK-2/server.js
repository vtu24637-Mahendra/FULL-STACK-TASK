const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#123**Vinnu@",
    database: "stu_reg_forms"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Database Connected");
    }
});

// Route
app.get("/students", (req, res) => {

    const sort = req.query.sort;
    const dept = req.query.dept;

    let query = "SELECT NAME, DOB, EMAIL, DEPT, PHNO FROM stu_details";
    let countQuery = "SELECT DEPT, COUNT(*) as total FROM stu_details GROUP BY DEPT";

    let conditions = [];
    let values = [];

    if (dept) {
        conditions.push("DEPT = ?");
        values.push(dept);
    }

    if (conditions.length > 0) {
        query += " WHERE " + conditions.join(" AND ");
    }

    if (sort === "name") {
        query += " ORDER BY NAME ASC";
    }
    else if (sort === "dob") {
        query += " ORDER BY DOB ASC";
    }

    db.query(query, values, (err, students) => {
        if (err) {
            return res.json({ error: err.message });
        }

        db.query(countQuery, (err2, counts) => {
            if (err2) {
                return res.json({ error: err2.message });
            }

            res.json({
                students,
                counts
            });
        });
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
