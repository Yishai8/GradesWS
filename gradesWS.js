var file =  require( './data/students1.json' );
var fake;
var keys;
var mongoose = require ('mongoose');
var grade = require ('./grade');
var gradeM;
// Serialize a document 


var gradeArr=module.exports=
{

    getAllStud : function (gradeM,res) { //get all students
        gradeM.aggregate({$project : {
            _id : 0 ,
            year : 1 ,
            students : 1
        }}).exec(function (err, data) {
            if (err) {res.set('Status' , 404 );
            res.send( "err: " + err);}
            else
            {
                res.set('Status' , 200 );
                res.send(JSON.stringify(data)); 
            }});

    },

    getAllExcellenceStudent : function (gradeM,res) { //get all students with GPA>=90

        gradeM.aggregate( { $unwind: '$students'},{ $match: {'students.GPA': {$gte: 90}}}
            ,{ $group: {_id:'$year',
            students: {$push: {id:'$students.id',firstName:'$students.firstName',
            lastName:'$students.lastName',
            GPA:'$students.GPA',}}}},{$project : {
                _id : 0 ,
                year : '$_id' ,
                students : '$students'
            }},{$sort:{year:1}}).exec(function (err, data) {
                if (err) {res.set('Status' , 404 );
                res.send( "err: " + err);}
                else
                {
                    res.set('Status' , 200 );
                    res.send(JSON.stringify(data)); 
                }});
        },

    getStudGradeByID : function (id,gradeM,res) {  //get student's grades by id
    gradeM.aggregate( { $unwind: '$students'},{ $match: {'students.id': {$eq: parseInt(id)},'students.GPA': {$gte: 90}}}
        ,{ $group: {_id:'$year',
        students: {$push: {id:'$students.id',firstName:'$students.firstName',
        lastName:'$students.lastName',
        GPA:'$students.GPA',}}}},{$project : {
            _id : 0 ,
            year : '$_id' ,
            students : '$students'
        }},{$sort:{year:1}}).exec(function (err, data) {
            if (err) {res.set('Status' , 404 );
            res.send( "err: " + err);}
            else
            {
                res.set('Status' , 200 );
                res.send(JSON.stringify(data)); 
            }});

    },

        getExcellenceByYear: function(year,gradeM,res) {   //get all students with GPA>=90 by year
            gradeM.aggregate( {$match: {year: parseInt(year)}},{ $unwind: '$students'},{$match: {'students.GPA': {$gte: 90}}},
                { $group: {_id:'$year',
                students: {$push: {id:'$students.id',firstName:'$students.firstName',
                lastName:'$students.lastName',
                GPA:'$students.GPA',}}}},{$project : {
                    _id : 0 ,
                    year : '$_id' ,
                    students : '$students'
                }},{$sort:{year:1}}).exec(function (err, data) {
                    if (err) {res.set('Status' , 404 );
                    res.send( "err: " + err);}
                    else
                    {
                        res.set('Status' , 200 );
                        res.send(JSON.stringify(data)); 
                    }});
            }

        };