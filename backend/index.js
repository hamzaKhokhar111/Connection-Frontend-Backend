// const express=require('express')
import express from "express";
import cors from 'cors'
const app=express();


app.use(cors())
app.get('/jokes',(req,resp)=>{
    const jokes = [{
        id: 1,
        tittle:"joke one",
        content: 'This is a Joke'
    },
    {
        id: 2,
        tittle:"joke two",
        content: 'This is B Joke'
    },
    {
        id: 1,
        tittle:"joke three",
        content: 'This is C Joke'
    },
    {
        id: 1,
        tittle:"joke four",
        content: 'This is D Joke'
    },
]
resp.send(jokes)

})


app.listen(5000,()=>{
    console.log("Every thing is ok")
})