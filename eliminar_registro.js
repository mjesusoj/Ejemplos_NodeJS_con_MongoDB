var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (error, db){
    if (error) throw error;
    var dbo = db.db("miBdMongo");
    var myquery = { direccion: 'Mountain 21' }
    dbo.collection("clientes").deleteOne(myquery, function (error, result) {
        if (error) throw error;
        console.log("1 elemento eliminado");
        db.close();
    })
})