# GradesWS - Yishai Neeman


This WS use is to display the data regarding excellent students in Shenkar college (yearly GPA&gt;=90) for 2012-2014.
The data source is MongoDB documents which looks like this (The field year might show after the students array like the example for function 3):

          [
            {
          "year":2012,
          "students": [
                        {
                            "id": 1,
                            "firstName": "John",
                            "lastName": "Doe",
                            "GPA": 80
                        },
                        {
                            "id": 2,
                            "firstName": "Anna",
                            "lastName": "Smith",
                            "GPA": 90
                        },
                        {
                            "id": 3,
                            "firstName": "Peter",
                            "lastName": "Jones",
                            "GPA": 100
                        }
        
                       ]
        },
        {
          "year":2013,
          "students":[
                      {
                          "id": 1,
                          "firstName": "John",
                          "lastName": "Doe",
                          "GPA": 85
                      },
                      {
        
                          "id": 2,
                          "firstName": "Anna",
                          "lastName": "Smith",
                          "GPA": 92
                      },
                      {
                          "id": 3,
                          "firstName": "Peter",
                          "lastName": "Jones",
                          "GPA": 88
                      }
        
                     ]
          }
        ]
To get to the API : https://studentsws.herokuapp.com/api

General function which gets all students for all years : https://studentsws.herokuapp.com/getallstud

There are 3 GET function in use:

1) General function which gets all excellent for all years : https://studentsws.herokuapp.com/

Empty object ( [] ) will be returned if there are no results.

2) Get student's grades by id: https://studentsws.herokuapp.com/getStudGradeByID?id=1

ID starts from 1 , every student has a unique ID and result object covers all years.

Results example:

          [{
            "year": 2012,
            "students": [{
                "id": 1,
                "firstName": "John",
                "lastName": "Doe",
                "GPA": 90
            }]
          }, {
            "year": 2013,
            "students": [{
                "id": 1,
                "firstName": "John",
                "lastName": "Doe",
                "GPA": 95
            }]
          }]
Empty object ( [] ) will be returned if there are no results.

3) Get student's excellent grades by year: https://studentsws.herokuapp.com/getExcellenceByYear?year=2012

Results Example:

          [{
            students: [
          {
              id: 2,
              firstName: "Anna",
              lastName: "Smith",
              GPA: 90
          },
          {
              id: 3,
              firstName: "Peter",
              lastName: "Jones",
              GPA: 100
          }
                ],
          year: 2012
          }]
          
Empty object ( [] ) will be returned if there are no results.

Debugging: In the response header you can find "function-name" with the function name as value and "parameter" which will indicate the sent parameter and its value.
Status code (200 - OK,404 - Error) will also be available under "Status".

Example:

    function-name:getStudGrade
    parameter:id=1
	Status:200
