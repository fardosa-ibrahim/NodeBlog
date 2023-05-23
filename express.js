const express=require('express');
const morgan=require('morgan')
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogroutes')


// express app 
const app=express();

// connect to mongo db 
const dbURI='mongodb+srv://fardosa:123qas@nodecrush.k6agoag.mongodb.net/node-crush?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>app.listen(4000)).catch((error)=>console.log('error'))

// register view engine 
app.set('view engine','ejs')

// middleware and static files 
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


app.get('/',(req,res)=>{
    // res.send('<h1>Welcome Home</h1>');
  res.redirect('/blogs')
});
app.get('/about',(req,res)=>{
    // res.send('<h1>Welcome to about page</h1>');
    res.render('about',{title:'About'})
});
app.use(blogRoutes)

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'})
})