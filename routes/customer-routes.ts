import express from 'express';
import {addCustomer, deleteCustomer, showCustomers, updateCustomer} from "../database/data-store";

const router = express.Router();

router.post("/add", (req, res) => {
    addCustomer(req.body)
    res.send("Customer Added Successfully!")
})
router.get("/", (req, res) => {
    res.json(showCustomers());
})
router.delete("/delete/:id", (req, res) => {
    deleteCustomer(req.params.id)
    res.send("Customer Deleted Successfully!")
})
router.put("/update/:id", (req, res) => {
    updateCustomer(req.params.id, req.body)
    res.send("Customer Updated Successfully!")
})

export default router;