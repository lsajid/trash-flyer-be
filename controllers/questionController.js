const express = require("express");
const questions = express.Router();

const { getAllQuestions, getQuestion, createQuestion } = require("../queries/questions.js");

questions.get("/", async (req, res) => {
    try{
        const allQuestions = await getAllQuestions();
        if(allQuestions.length > 0){
            res.status(200).json(allQuestions);
        }else{
            res.status(404).json({error: "server cannot get all reviews"});
        }
    }catch(err){
        console.log(err);
    }
})

questions.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const question = await getQuestion(id);
        if(question.id){
            res.status(200).json(question);
        }else{
            res.status(404).json({error: "server error"});
        }
    }catch(err){
        console.log(err);
    }
})

questions.post("/", async (req, res) => {
     const { body } = req;
     try{
        const createdQuestion = await createQuestion(body);
        if(createdQuestion.id){
            res.status(200).json(createdQuestion);
        }else{
            res.status(500).json({error: "server error"})
        }
     }catch(err){
         console.log(err)
     }
})

module.exports = questions;