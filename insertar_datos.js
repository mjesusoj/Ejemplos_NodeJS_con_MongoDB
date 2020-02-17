var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (error, db){
    if (error){
        throw error;
    }
    var dbo = db.db("miBdMongo");
    var myobj = { nombre: "Company Inc", direccion: "Highway 37"};
    dbo.collection("clientes").insertOne(myobj, function (error, res) {
        if (error){
            throw error;
        }
        console.log("1 documento insertado");
        db.close();
    })
})