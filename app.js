const express=require("express");
const studentRouter=require("./routers/student");
const app=express();
const morgan = require('morgan');

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.use("/student",studentRouter);

  module.exports=app;