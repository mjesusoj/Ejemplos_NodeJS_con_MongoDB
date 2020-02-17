var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (error, db){
    if (error){
        throw error;
    }
    var dbo = db.db("miBdMongo");
    var myobj = [
        { nombre: 'John', direccion: 'Highway 71' },
        { nombre: 'Peter', direccion: 'Lowstreet 4' },
        { nombre: 'Amy', direccion: 'Apple st 652' },
        { nombre: 'Hannah', direccion: 'Mountain 21' },
        { nombre: 'Michael', direccion: 'Valley 345' },
        { nombre: 'Sandy', direccion: 'Ocean blvd 2' },
        { nombre: 'Betty', direccion: 'Green Grass 1' },
        { nombre: 'Richard', direccion: 'Sky st 331' },
        { nombre: 'Susan', direccion: 'One way 98' },
        { nombre: 'Vicky', direccion: 'Yellow Garden 2' },
        { nombre: 'Ben', direccion: 'Park Lane 38' },
        { nombre: 'William', direccion: 'Central st 954' },
        { nombre: 'Chuck', direccion: 'Main Road 989' },
        { nombre: 'Viola', direccion: 'Sideway 1633' }
    ]
    dbo.collection("clientes").insertMany(myobj, function (error, res) {
        if (error){
            throw error;
        }
        console.log("Se han insertado " + res.insertedCount + " documentos");
        db.close();
    })
})