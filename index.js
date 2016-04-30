var http = require ('http');
var url = require('url') ;
var GInfo = require ('./gradesWS');
var express= require('express');
var app= express();
var port = process.env.PORT || 3000;
var fs = require("fs");

app.get('/api',function(req, res){
    console.log("Calling API page");
    fs.readFile("./API.html", function(err, data){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
});
    
});

app.get('/',function(req, res){
    
    console.log("Calling root function");
    res.set('function-name' , 'general' );
    res.set('parameter' , 'none' );
    res.end(GInfo.getAllExcellenceStudent());
    
});


app.get('/getAllStud',function(req, res){
    console.log("Getting all students list");   
    res.set('function-name' , 'getAllStud' );
    res.set('parameter' , 'none' );
    res.end(GInfo.getAllStud());
    
});

app.get('/getStudGradeByID',function(req,res){
    console.log("Getting all excellent students grades by ID");   
    res.set('function-name','getStudGradeByID');
    res.set('parameter','id='+req.query.id);
    res.end(GInfo.getStudGradeByID(req.query.id));

});

app.get('/getExcellenceByYear',function(req,res){
    res.set('function-name','getExcellenceByYear');
    res.set('parameter','year='+req.query.year);
    res.end(GInfo.getExcellenceByYear(req.query.year));
});


    app.listen(port);
    console.log("listening on port "+port);
    
       
       
        
   



    