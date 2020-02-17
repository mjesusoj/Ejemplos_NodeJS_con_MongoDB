var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true}, function (error, db){
    if (error){
        throw error;
    }
    var dbo = db.db("miBdMongo");
    dbo.createCollection("clientes", function (error, res) {
        if (error){
            throw error;
        }
        console.log("Colección creada!");
        db.close();
    })
})