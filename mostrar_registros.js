var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (error, db){
    if (error) throw error;
    var dbo = db.db("miBdMongo");
    dbo.collection("clientes").find({}).project({ nombre: 1 }).toArray(function (error, result) {
        if (error){
            throw error;
        }
        console.log(result);
        db.close();
    })
})