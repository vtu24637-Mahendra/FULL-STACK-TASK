const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '#123**Vinnu@', 
    database: 'order_management'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to database');
});

app.get('/orders', (req, res) => {
    const query = `
        SELECT c.name AS customer, p.name AS product, o.quantity,
        p.price, (o.quantity * p.price) AS total_amount, o.order_date
        FROM orders o
        JOIN customers c ON o.customer_id = c.id
        JOIN products p ON o.product_id = p.id
        ORDER BY o.order_date DESC
    `;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.get('/highest-order', (req, res) => {
    const query = `
        SELECT c.name, p.name AS product, o.quantity,
        (o.quantity * p.price) AS total_amount
        FROM orders o
        JOIN customers c ON o.customer_id = c.id
        JOIN products p ON o.product_id = p.id
        ORDER BY total_amount DESC
        LIMIT 1
    `;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.get('/most-active', (req, res) => {
    const query = `
        SELECT c.name
        FROM customers c
        JOIN orders o ON c.id = o.customer_id
        GROUP BY c.id
        ORDER BY COUNT(o.id) DESC
        LIMIT 1
    `;
    db.query(query, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
