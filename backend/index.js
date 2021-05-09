//connnect db and start server in this file
import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config()
const MongoClient = mongodb.MongoClient //get access to our mongo client from MongoDB

const port = process.env.PORT || 8000 //use the port spec in env or if unable to access use 8000

// (specify URI, options)
//options poolSize = only 50 ppl can access at a time
//wtimeout after 2500 ms request will time out
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParser: true,

    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})