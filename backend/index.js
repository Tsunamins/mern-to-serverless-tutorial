import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient //get access to our mongo client from MongoDB

const port = process.env.PORT || 8000 //use the port spec in env or if unable to access use 8000

// (specify URI, options)
//options poolSize = only 50 ppl can access at a time
//wtimeout after 2500 ms request will time out
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        useUnifiedTopology: true,
        poolSize: 50,
        useNewUrlParser: true,
        writeConcern: {
            wtimeout: 2500,
        },
        

    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await RestaurantsDAO.injectDB(client) 
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})