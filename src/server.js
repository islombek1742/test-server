import express from "express";

const app = express()

const PORT = process.env.PORT ?? 4000

app.get("/", (req, res) => {
    console.log(req)
    res.status(200).json({
        message: "Started",
        status: 200
    })
})

try{
    app.listen( PORT, () => {
        console.log(`server started at ${PORT}`)
    })
}catch(error){
    console.log(error.message)
}