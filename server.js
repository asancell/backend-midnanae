const express = require('express');
const app = express();
const cors = require('cors');
// set up port
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
// add routes
const user = require('./routes/user.route');
const product = require('./routes/product.route');
const purch = require('./routes/purch.route');
const sell = require('./routes/sell.route');

app.use('/user', user);
app.use('/product', product);
app.use('/purch', purch );
app.use('/sell', sell);
// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));