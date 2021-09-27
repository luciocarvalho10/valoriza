import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"

import { router } from "./routes"

import "./database"
import { errors } from "./utilities/errors"

const app = express()

app.use(express.json())

app.use(router)

app.use(errors)

app.listen(3000, () => console.log(`Server is running at ${new Date()}`))
