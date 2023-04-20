const express = require("express");
const cors = require('cors');
const { port } = require('../config');
const productRouter=require('./products/products.router');
const db = require('./utils/database');
const app = express();

app.get("/",(req,res)=>{
res.status(200).json({message:"todo okey"})
})

//?  db.authenticate()  IMFORMATIVO
db.authenticate()
.then(()=>{
console.log("database autentificate");
})
.catch(error=>{
    console.log(error);
});

db.sync()
.then(()=>{
    console.log(`data base Syncet`);
})
.catch(error=>{
console.log(error);
});

app.use(express.json());
app.use(cors());
app.use('/api/v1',productRouter);





app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});