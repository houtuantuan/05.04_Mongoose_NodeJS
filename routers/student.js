const {Router}= require("express");

const studentRouter= Router();

const {createStudent,getStudent,updateFirstName}= require("../controllers/student");

studentRouter.post("/",createStudent);
studentRouter.get("/",getStudent);
studentRouter.put("/:_id",updateFirstName)

module.exports=studentRouter;