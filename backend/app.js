const express = require("express")
const mongoose = require('mongoose')
const User = require ('./db/schema/user')



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))