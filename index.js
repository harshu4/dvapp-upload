const express = require('express')
const app = express()
const port = 8000
var fileUpload = require('express-fileupload');
var fs = require('fs');

app.use(express.static('public'))
app.use(fileUpload());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload', (req, res) => {
    let uploadedfile = req.files.fileToUpload;
    var dir = './public/';
    dir = dir + req.body.folder+ uploadedfile.name;
    console.log(req.body.folder);
    console.log(dir);
    uploadedfile.mv(dir, function(err) {
        if (err)
        {
            return res.status(500).send(err);
        }
       
    });

    res.send("hello")
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})