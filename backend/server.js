import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js" //to be created

const app = express()

app.use(cors())
app.use(express.json()) //replaces bodyparser, or is sufficient to not need bodyparser

//specify routes
app.use("/api/v1/restaurants", restaurants) //routes to be used will be in the restaurants file
app.use("*", (req, res) => res.status(404).json({ error: "not found"})) //set up a return for a route that doesn't exist


export default app // export the module, able to now import this module into the file that will access the db

