var file =  require( './data/students1.json' );
var fake;
var keys;

var grade=module.exports=
{

    getAllStud : function () { //get all students
     fake=JSON.parse(JSON.stringify(file));
     keys = Object.keys(fake);
    if(Object.keys(fake).length === 0 && JSON.stringify(fake) === JSON.stringify([]))
    
    return JSON.stringify({});
    

    return JSON.stringify(fake);
    },

    getAllExcellenceStudent : function () { //get all students with GPA>=90
     fake=JSON.parse(JSON.stringify(file));
     keys = Object.keys(fake);
       for(var i=keys.length-1; i>=0; i--)   // amount of year structs
       {  
        for(var j=fake[i].students.length-1; j>=0; j--)
        {   
            if(fake[i].students[j].GPA<90) // delete all irrelevant records
            {
                delete fake[i].students[j];
                fake[i].students=fake[i].students.filter(function(x) {return x!==null});
            }
        }
        if(fake[i].students.length==0)
        {
            delete fake[i];
            fake=fake.filter(function(x) {return x!==null});
        }
    }

    if(Object.keys(fake).length === 0 && JSON.stringify(fake) === JSON.stringify([]))
    
    return JSON.stringify({});
    

    return JSON.stringify(fake);
    },

    getStudGradeByID : function (id) {  //get student's grades by id
    fake=JSON.parse(JSON.stringify(file));
    keys = Object.keys(fake);
    for(var i=keys.length-1; i>=0; i--)
    {     
        for(var j=fake[i].students.length-1; j>=0; j--)
        {   
            if(fake[i].students[j].id!=id) // delete all irrelevant records
            {
                delete fake[i].students[j];
                fake[i].students=fake[i].students.filter(function(x) {return x!==null});
            }
        }
        if(fake[i].students.length==0)
        {
            delete fake[i];
            fake=fake.filter(function(x) {return x!==null});
        }

    }

    if(Object.keys(fake).length === 0 && JSON.stringify(fake) === JSON.stringify([]))
    
    return JSON.stringify({});
    return JSON.stringify(fake);

    },

        getExcellenceByYear: function(year) {   //get all students with GPA>=90 by year

            fake=JSON.parse(JSON.stringify(file));
            keys = Object.keys(fake);
            for(var i=keys.length-1; i>=0; i--)
            {    
                if(fake[i].year!=year)
                fake=fake.slice(0,i);
                else
                {
                    for(var j=fake[i].students.length-1; j>=0; j--)
                    {   
            if(fake[i].students[j].GPA<90) // delete all irrelevant records
            {
                delete fake[i].students[j];
                fake[i].students=fake[i].students.filter(function(x) {return x!==null});
            }

        }
        fake=fake.slice(i,i+1); //leave only relevant year 
        break;
    }
}
keys = Object.keys(fake);

if(fake[keys].students.length==0)

return JSON.stringify({});

return JSON.stringify(fake);            
}

};