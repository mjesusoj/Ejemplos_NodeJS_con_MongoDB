var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db){
    if (err) throw err;
    var dbo = db.db("miBdMongo");
    dbo.collection("clientes").drop(function (err, deleteOK) {
        if (err) throw err;
        if (deleteOK) {
            console.log("Colección eliminada");
        }
        db.close()
    })
})