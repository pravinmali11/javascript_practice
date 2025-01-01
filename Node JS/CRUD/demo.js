// const express= require('express');
// const app=express();
// const conn=require('./config')

// app.use(express.json());

// app.get('/',(req,res)=>{
//     conn.query('select * from student',(err,results)=>{
//         if(err){
//             res.send('Error '+err)
//             console.log('Error '+err);

//         }else{
//             res.send(results)
//             console.log(results);  
//         }
//     })
// })
// app.post('/student',(req,res)=>{
//     const {id,Name,Contact,City}=req.body;
//     if (!Name || !Contact || !City) {
//         return res.status(400).send("Name, city and mobile no fildes are required");
        
//     }
// const data = {id,Name, Contact,City};
// conn.query('Insert into  student set?' , data,(err,results)=>{
//     if (err) {
//         console.log("Error: ",err);
//         return res.send("An error occured while adding data")  
//     }else{
//         res.send(results);
//     }
// });
// });
// app.listen(4000,()=>{
//     console.log('server is running on http://localhost:4000');
// })

const express = require('express');
const app = express();
const conn = require('./config'); // Assuming config is the database connection module

app.use(express.json());

// POST: Add a new student
app.post('/student', (req, res) => {
    const { ID, Name, Contact, City } = req.body;

    if (!ID || !Name || !Contact || !City) {
        return res.status(400).send("ID, Name, Contact, and City fields are required.");
    }

    const data = { ID, Name, Contact, City };
    conn.query('INSERT INTO student SET ?', data, (err, result) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).send("An error occurred while adding data.");
        }
        res.status(201).send({ message: "Student added successfully", result });
    });
});

// GET: Retrieve all students
app.get('/student', (req, res) => {
    conn.query('SELECT * FROM student', (err, results) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).send("An error occurred while retrieving data.");
        }
        res.status(200).send({ message: "Students retrieved successfully", data: results });
    });
});

// PUT: Update a student's details
app.put('/student/:id', (req, res) => {
    const studentId = req.params.id; // Get ID from URL
    const { Name, Contact, City } = req.body; // Get data from the request body

    if (!Name && !Contact && !City) {
        return res.status(400).send("At least one field (Name, Contact, or City) is required for update.");
    }

    // Construct the dynamic query for fields to be updated
    let updateFields = [];
    let updateValues = [];

    if (Name) {
        updateFields.push('Name = ?');
        updateValues.push(Name);
    }
    if (Contact) {
        updateFields.push('Contact = ?');
        updateValues.push(Contact);
    }
    if (City) {
        updateFields.push('City = ?');
        updateValues.push(City);
    }

    updateValues.push(studentId); // Add studentId as the last parameter

    const updateQuery = `UPDATE student SET ${updateFields.join(', ')} WHERE ID = ?`;

    conn.query(updateQuery, updateValues, (err, results) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).send("An error occurred while updating data.");
        }

        if (results.affectedRows === 0) {
            return res.status(404).send({ message: "Student not found" });
        }

        res.send({ message: "Student updated successfully", results });
    });
});

app.delete('/student/:id',(req,res)=>{
    //const data = { ID, Name, Contact, City };
    conn.query(`delete from student where id =${req.params.id}`,(error, result)=>{
        {
            if(error){
                console.log("Error : ",error);
                
            }
            else{
                res.send(result)
            }
        }

    })
})
// DELETE: Remove a student by ID
// app.delete('/student/:id', (req, res) => {
//     const studentId = req.params.id;

//     if (!studentId) {
//         return res.status(400).send("Student ID is required.");
//     }

//     conn.query('DELETE FROM student WHERE ID = ?', [studentId], (err, result) => {
//         if (err) {
//             console.error("Error:", err);
//             return res.status(500).send("An error occurred while deleting the student.");
//         }

//         if (result.affectedRows === 0) {
//             return res.status(404).send({ message: "Student not found" });
//         }

//         res.send({ message: "Student deleted successfully", result });
//     });
// });


app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
