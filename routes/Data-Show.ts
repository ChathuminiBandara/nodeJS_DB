import express from "express";
import dataSource from "../database/data-store";

const router_data = express.Router();

router_data.get('/', async (req, res) => {
    const [rows] = await dataSource.query("SELECT * FROM customers");
    res.json(rows);
});

router_data.post('/add', async (req, res) => {
    const { id, name, email } = req.body;
    await dataSource.query("INSERT INTO customers (id, name, email) VALUES (?, ?, ?)", [id, name, email]);
    res.send("Customer added successfully!");
});

export default router_data;
