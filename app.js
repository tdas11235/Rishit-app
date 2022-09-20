const express= require('express');
const app= express();
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

//routes
app.get('/', (req, res)=> {
    res.render('index');
})

app.get('/profile', (req, res)=> {
    res.render('profile');
})

app.get('/photo', (req, res)=> {
    res.render('photo');
})

app.listen(8000, ()=> {
    console.log("server is listening to port 8000");
})