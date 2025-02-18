const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/info', (req, res) => {
    try{
        const{username, email, password} = req.body;
        if(!username){
            return res.status(400).json({message: "username cannot be empty"});

        }
        if(!email){
            return res.status(400).json({message: "email cannot be empty"});

        }
        const pass = password.length();
        if(pass<8 || pass>16){
            return res.status(400).json({message: "password lenght should be greater than 8 and less than 16"});
        }
        else{
            return res.status(200).json({message: "success"});
        }
    }
    catch(err){
        console.log(err.message);
    }
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});