var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db){
    if (err) throw err;
    var dbo = db.db("miBdMongo");
    dbo.collection("pedidos").aggregate([
        {
            $lookup: {
                from: 'productos',
                localField: 'producto_id',
                foreignField: '_id',
                as: 'detallesPedido'
            }
        }
    ]).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    })
})