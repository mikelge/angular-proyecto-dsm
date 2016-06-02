

var express = require('express');
var app = express();

//creamos la base de datos 
var mongoose = require('mongoose');
//Conexion con la DataBase y creacion de modelos
mongoose.connect('mongodb://localhost/tareas', function(err) {
    if (!err) {} else {
        throw err;
    }
});
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var Nota = new Schema({
	category:
      {
        name: String,
        icon: String
      },
    description: String,
    title: String,    
    content: String,
});
var Nota = mongoose.model('Nota', Nota);

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var Usuario = new Schema({
     name: String,
  	 bio: String,
  	 email: String
});
var Usuario = mongoose.model('Usuario', Usuario);

app.use(express.static('angular2-level 3'));

app.get('/notas', function(request, response){

	Nota.find().count(function(err, count) {
        Nota.find(function(err, count2) {
            if (err) {
                console.log(err);
            } else {
                if (count > 0) {
                    var array_notas = [];
                    for (var i = 0; i <= count - 1; i++) {
                        array_notas[i] = count2[i];
                    }
                    response.json(array_notas);
                }
            }
        });
    });

	
});



app.get('/usuarios', function(request, response) {
	Usuario.find().count(function(err, count) {
        Usuario.find(function(err, count2) {
            if (err) {
                console.log(err);
            } else {
                if (count > 0) {
                    var array_usuarios = [];
                    for (var i = 0; i <= count - 1; i++) {
                        array_usuarios[i] = count2[i];
                    }
                    response.json({info:array_usuarios});
                }
            }
        });
    });

});

app.get('/notas/:id', function(request, response){

	//hay que filtrar por id y buscar esa nota
	var id = request.params.id;
  	
  	Nota.findById(id,function(err, count) {  
         response.json(count);
  	});
              
});

app.delete('/notas/:id', function(request, response){

	//hay que filtrar por id y buscar esa nota
	var id = request.params.id;
  	
  	Nota.remove({_id: id}, function(err) {
        if (!err) {} else {
            throw err;
        }
    });
              
      
    
});

app.post('/notas', function(request, response){
  //response.json(notas);
  console.log('graba');
  
  var nota = new Nota({
     category:
      {
        name: "Ipsum",
        icon: "ipsum"
      },
    description:request.query.description,
    title: request.query.header,
    content: request.query.content
  });
  nota.save(function(err) {
        if (!err) {} else {
            throw err;
        }
  });


});

app.get('/borrar', function(request, response) {
	Usuario.find().count(function(err, count) {
        Usuario.find(function(err, count2) {
            if (err) {
                console.log(err);
            } else {
                if (count > 0) {
                    var array_usuarios = [];
                    for (var i = 0; i <= count - 1; i++) {
                        array_usuarios[i] = count2[i];
                    }
                    response.json({info:array_usuarios});
                }
            }
        });
    });

});

app.put('/notas', function(request, response) {

	var id = request.query._id;
	
	Nota.update({_id:id}, {$set: {'title':request.query.title}}, function(err,result){
			if(err) throw err;
		});
	Nota.update({_id:id}, {$set: {'content':request.query.content}}, function(err,result){
			if(err) throw err;
		});
	Nota.update({_id:id}, {$set: {'description':request.query.description}}, function(err,result){
			if(err) throw err;
		});

});

app.listen(9000);


