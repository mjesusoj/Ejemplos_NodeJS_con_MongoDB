var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (error, db){
    if (error) throw error;
    var dbo = db.db("miBdMongo");
    // Mostrar de la colección clientes, todos sus registros
    dbo.collection("clientes").find({}).toArray(function (error, result) {
        if (error) throw error;
        console.log(result);
        db.close();
    })
})