import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app= express()
dotenv.config()
const port = 3005

app.use(cors({origin: '*'}))
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extends: false}))

const connectDB= () => {
    const{
        MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
    } = process.env

    const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin}`

        mongoose.connect(url).then( () => {
            console.log('Mongo esta corriendo')
        }).catch((err) => {
            console.log(err)
        })
    }
    
app.listen(port, () => {
    console.log('Api corriendo en http://localhost:3005')
})

app.get('/victor', async (req, res) => {
    res.status(200).send('Hola mundo, mi primera API!')
})