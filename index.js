const express = require('express');
const categoryRouter = require('./Modules/Category/Routes/category.Routes');
const productRouter = require('./Modules/Product/Routes/product.Routes');
const UserRouter = require('./Modules/Users/Routes/user.routes');
const { createTables } = require('./MySqlConfig/mysqlConfig');
const app = express();
const port = 4001;
const www = process.env.WWW || './';
createTables();
app.use(express.json());
app.use(UserRouter);
app.use(categoryRouter);
app.use(productRouter);
app.use(express.urlencoded({extended:false}));// to be able to print on console

 
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
