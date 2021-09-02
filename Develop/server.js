var express = require('express');
var app = express();
const path = require('path');
const fs = require('fs');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

var PORT = process.env.PORT || 1000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
// here!!
app.use(express.static(path.join(__dirname,'public')));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.get('/notes',function(req,res){
//     res.sendFile(path.join(__dirname,'public/notes.html'))
// })

// app.get('/api/notes',function(req,res){
//     let noteData;
//     let readFile = fs.readFile('Develop/db/db.json', function(err, data) {
//         console.log('LINE 15 ERROR:'+err);
//         console.log('line 17 console:'+data);
//         noteData=data;
//         res.json()
//     });

// })

// app.delete('/api/notes/:id',function(req,res) {
//     console.log(req.body,req.params.id)
//     let dbArray = JSON.parse('Develop/db/db.json', function(err) {console.log('line 21 error'+err)})
//     console.log(dbArray)
// })

// app.post('/api/notes',function(req,res) {
//     let note = req.body;
  
//     let dbArray;// = (fs.readFile('./Develop/db/db.json', function(err, data) {console.log(err)}));
//     console.log({note,dbArray})
//     //dbArray.push(note);
//     console.log(dbArray);
//     //fs.writeFile('Develop/db/db.json', dbArray, (err)=> console.log('line 32 error'+err))
// })

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });