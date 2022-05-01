const db = require("../db/dbConfig.js");

const getAllQuestions = async () => {
    try{
        const allQuestions = await db.any("SELECT * FROM reviews");
        return allQuestions;
    }catch(err){
        return err;
    }
}

const getQuestion = async (id) => {
    try{
        const oneQuestion = await db.one("SELECT * FROM reviews WHERE id=$1", id);
        return oneQuestion;
    }catch(err){
        console.log(err);
    }
}

const createQuestion = async (question) => {
    try{   
        const newQuestion = await db.one(
            "INSERT INTO reviews (name, message, email) VALUES($1, $2, $3) RETURNING *",
            [question.name, question.message, question.email]
        );
        return newQuestion;
    }catch(err){
        return err;
    }
}

module.exports = {
    getAllQuestions,
    getQuestion,
    createQuestion
}