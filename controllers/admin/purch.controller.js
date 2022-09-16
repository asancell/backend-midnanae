
const db = require('../../lib/db.js');


// CREATE type product
module.exports.create = function (req, res) {
    const {employee_id, status, total_price} = req.body;

    try {
        db.query(
            "INSERT INTO order_product (employee_id, date, status, total_price) VALUES(?, ?, ?, ?)",
            [employee_id, Date.now(), status, total_price ],
            (err, results, fields) => {
                if (err) {
                    console.log("Error while inserting a purch order product into the database", err);
                    return res.status(400).send();
                }
                return res.status(201).json({ message: "New purch order product successfully created!"});
            }
        )
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
}

module.exports.read = function (req, res) {
    db.query(
        "SELECT * FROM order_product ",
        (err, results) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(201).json(results)
        }
    );
}

module.exports.update = function (req, res){
    const order_product_id = req.params.wst_product_id;
    const {employee_id, status, total_price } = req.body;

    try {
        db.query("UPDATE order_product SET employee_id = ?, date = ? , status = ?, total_price = ? WHERE order_product_id = ?", 
        [employee_id, Date.now(), status, total_price, order_product_id], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json({ message: "User order product updated successfully!"});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
}

module.exports.delete = function (req, res){
    const order_product_id = req.params.wst_product_id;

    try {
        db.query("DELETE FROM order_product WHERE order_product_id = ?", [order_product_id], (err, results, fields) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ message: "No order product with that wst_product_id!"});
            }
            return res.status(200).json({ message: "order product deleted successfully!"});
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
}