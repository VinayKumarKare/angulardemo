const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/dist/my1stngproj'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/my1stngproj/index.html');
  })

 app.listen(port, ()=>{
     console.log('Example app listening at ${port}')
 })